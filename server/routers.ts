import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure } from "./_core/trpc";
import { z } from "zod";
import { 
  getAllProducts, 
  getProductById, 
  createProduct, 
  updateProduct, 
  createOrder, 
  getOrderById, 
  getUserOrders, 
  updateOrderStatus, 
  createOrderItem, 
  getOrderItems, 
  createContactSubmission, 
  getAllContactSubmissions, 
  updateContactSubmissionStatus 
} from "./db";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // Products router
  products: router({
    list: publicProcedure.query(async () => {
      return getAllProducts();
    }),
    get: publicProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ input }) => {
        return getProductById(input.id);
      }),
    create: protectedProcedure
      .input(z.object({
        name: z.string(),
        nameKm: z.string(),
        description: z.string().optional(),
        price: z.string(),
        emoji: z.string(),
        color: z.string(),
        badge: z.string().optional(),
        inStock: z.boolean().default(true),
      }))
      .mutation(async ({ input }) => {
        return createProduct(input as any);
      }),
    update: protectedProcedure
      .input(z.object({
        id: z.number(),
        name: z.string().optional(),
        price: z.string().optional(),
        inStock: z.boolean().optional(),
      }))
      .mutation(async ({ input }) => {
        const { id, ...updates } = input;
        await updateProduct(id, updates as any);
        return { success: true };
      }),
  }),

  // Orders router
  orders: router({
    create: protectedProcedure
      .input(z.object({
        customerName: z.string(),
        customerPhone: z.string(),
        flowerType: z.string().optional(),
        message: z.string().optional(),
        totalPrice: z.string(),
        items: z.array(z.object({
          productId: z.number(),
          quantity: z.number(),
          priceAtPurchase: z.string(),
        })),
      }))
      .mutation(async ({ input, ctx }) => {
        const order = await createOrder({
          userId: ctx.user!.id,
          customerName: input.customerName,
          customerPhone: input.customerPhone,
          flowerType: input.flowerType,
          message: input.message,
          totalPrice: input.totalPrice as any,
          status: "pending",
        });
        
        if (order) {
          for (const item of input.items) {
            await createOrderItem({
              orderId: order.id,
              productId: item.productId,
              quantity: item.quantity,
              priceAtPurchase: item.priceAtPurchase as any,
            });
          }
        }
        
        return order;
      }),
    get: publicProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ input }) => {
        return getOrderById(input.id);
      }),
    myOrders: protectedProcedure.query(async ({ ctx }) => {
      return getUserOrders(ctx.user!.id);
    }),
    updateStatus: protectedProcedure
      .input(z.object({ id: z.number(), status: z.string() }))
      .mutation(async ({ input }) => {
        await updateOrderStatus(input.id, input.status);
        return { success: true };
      }),
    items: publicProcedure
      .input(z.object({ orderId: z.number() }))
      .query(async ({ input }) => {
        return getOrderItems(input.orderId);
      }),
  }),

  // Contact submissions router
  contact: router({
    submit: publicProcedure
      .input(z.object({
        name: z.string(),
        phone: z.string(),
        flowerType: z.string().optional(),
        message: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        return createContactSubmission({
          name: input.name,
          phone: input.phone,
          flowerType: input.flowerType,
          message: input.message,
          status: "new",
        });
      }),
    list: protectedProcedure.query(async () => {
      return getAllContactSubmissions();
    }),
    updateStatus: protectedProcedure
      .input(z.object({ id: z.number(), status: z.string() }))
      .mutation(async ({ input }) => {
        await updateContactSubmissionStatus(input.id, input.status);
        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
