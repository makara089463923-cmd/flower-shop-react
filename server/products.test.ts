import { describe, expect, it, beforeAll } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock authenticated user context
const createAuthContext = (): TrpcContext => {
  return {
    user: {
      id: 1,
      openId: "test-user",
      email: "test@example.com",
      name: "Test User",
      loginMethod: "manus",
      role: "user",
      createdAt: new Date(),
      updatedAt: new Date(),
      lastSignedIn: new Date(),
    },
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };
};

// Mock public context (no user)
const createPublicContext = (): TrpcContext => {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };
};

describe("Products API", () => {
  it("should list all products", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const products = await caller.products.list();

    expect(Array.isArray(products)).toBe(true);
  });

  it("should get a product by ID", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    // First get all products
    const products = await caller.products.list();

    if (products.length > 0) {
      const product = await caller.products.get({ id: products[0].id });
      expect(product).toBeDefined();
      expect(product?.id).toBe(products[0].id);
      expect(product?.name).toBe(products[0].name);
    }
  });

  it("should create a product with authenticated user", async () => {
    const ctx = createAuthContext();
    const caller = appRouter.createCaller(ctx);

    const newProduct = await caller.products.create({
      name: "Test Rose",
      nameKm: "ផ្កាសាកល្បង",
      price: "25.00",
      emoji: "🌹",
      color: "pink",
      description: "A test rose",
      inStock: true,
    });

    expect(newProduct).toBeDefined();
    expect(newProduct?.name).toBe("Test Rose");
    expect(newProduct?.price).toBe("25.00");
  });
});

describe("Contact API", () => {
  it("should submit a contact form", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const submission = await caller.contact.submit({
      name: "John Doe",
      phone: "+855 12 345 678",
      flowerType: "Rose",
      message: "I want to order flowers",
    });

    expect(submission).toBeDefined();
    expect(submission?.name).toBe("John Doe");
    expect(submission?.status).toBe("new");
  });

  it("should list contact submissions with authenticated user", async () => {
    const ctx = createAuthContext();
    const caller = appRouter.createCaller(ctx);

    const submissions = await caller.contact.list();

    expect(Array.isArray(submissions)).toBe(true);
  });

  it("should update contact submission status", async () => {
    const ctx = createAuthContext();
    const caller = appRouter.createCaller(ctx);

    // First submit a contact form
    const submission = await caller.contact.submit({
      name: "Jane Doe",
      phone: "+855 98 765 432",
      flowerType: "Sunflower",
      message: "Beautiful flowers!",
    });

    if (submission?.id) {
      const result = await caller.contact.updateStatus({
        id: submission.id,
        status: "read",
      });

      expect(result.success).toBe(true);
    }
  });
});

describe("Orders API", () => {
  it("should create an order with authenticated user", async () => {
    const ctx = createAuthContext();
    const caller = appRouter.createCaller(ctx);

    // First get products
    const products = await caller.products.list();

    if (products.length > 0) {
      const order = await caller.orders.create({
        customerName: "John Doe",
        customerPhone: "+855 12 345 678",
        flowerType: "Rose",
        message: "Please deliver tomorrow",
        totalPrice: "45.00",
        items: [
          {
            productId: products[0].id,
            quantity: 1,
            priceAtPurchase: products[0].price,
          },
        ],
      });

      expect(order).toBeDefined();
      expect(order?.customerName).toBe("John Doe");
      expect(order?.status).toBe("pending");
    }
  });

  it("should get user orders", async () => {
    const ctx = createAuthContext();
    const caller = appRouter.createCaller(ctx);

    const orders = await caller.orders.myOrders();

    expect(Array.isArray(orders)).toBe(true);
  });

  it("should update order status", async () => {
    const ctx = createAuthContext();
    const caller = appRouter.createCaller(ctx);

    // Get user orders
    const orders = await caller.orders.myOrders();

    if (orders.length > 0) {
      const result = await caller.orders.updateStatus({
        id: orders[0].id,
        status: "confirmed",
      });

      expect(result.success).toBe(true);
    }
  });

  it("should get order items", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    // Get authenticated caller to create an order first
    const authCtx = createAuthContext();
    const authCaller = appRouter.createCaller(authCtx);

    const products = await caller.products.list();

    if (products.length > 0) {
      const order = await authCaller.orders.create({
        customerName: "Test User",
        customerPhone: "+855 99 999 999",
        totalPrice: "50.00",
        items: [
          {
            productId: products[0].id,
            quantity: 2,
            priceAtPurchase: products[0].price,
          },
        ],
      });

      if (order?.id) {
        const items = await caller.orders.items({ orderId: order.id });
        expect(Array.isArray(items)).toBe(true);
        expect(items.length).toBeGreaterThan(0);
      }
    }
  });
});
