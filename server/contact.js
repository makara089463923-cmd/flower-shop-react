import express from 'express';
import { getDbConnection } from '../db';  // ប្តូរ import
import { contacts } from '../../shared/schema';
import { eq } from 'drizzle-orm';

const router = express.Router();

router.post('/api/contact', async (req, res) => {
  try {
    const db = await getDbConnection();  // ប្រើ function ថ្មី
    const { name, phone, email, address, message, productId } = req.body;

    if (!name || !phone) {
      return res.status(400).json({
        success: false,
        message: 'ឈ្មោះ និងលេខទូរស័ព្ទចាំបាច់ត្រូវបំពេញ'
      });
    }

    const newContact = await db.insert(contacts).values({
      name,
      phone,
      email: email || null,
      address: address || null,
      message: message || null,
      productId: productId || null,
      createdAt: new Date(),
      status: 'pending'
    }).returning();

    res.json({
      success: true,
      message: 'ទិន្នន័យត្រូវបានទទួលដោយជោគជ័យ',
      data: newContact[0]
    });

  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({
      success: false,
      message: 'មានបញ្ហាក្នុងការរក្សាទុកទិន្នន័យ'
    });
  }
});

export default router;
