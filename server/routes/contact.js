import express from 'express';
import { db } from '../db';
import { contacts } from '../../shared/schema';
import { eq } from 'drizzle-orm';

const router = express.Router();

// រក្សាទុកទិន្នន័យទំនាក់ទំនង
router.post('/api/contact', async (req, res) => {
  try {
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

// ទាញយកទិន្នន័យទំនាក់ទំនងទាំងអស់
router.get('/api/contacts', async (req, res) => {
  try {
    const allContacts = await db
      .select()
      .from(contacts)
      .orderBy(contacts.createdAt, 'desc');
    res.json(allContacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({
      success: false,
      message: 'មានបញ្ហាក្នុងការទាញយកទិន្នន័យ'
    });
  }
});

export default router;
