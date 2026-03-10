// server/routes/contact.js
import express from 'express';
import { db } from '../db';
import { contacts } from '../../shared/schema';
import { eq } from 'drizzle-orm';

const router = express.Router();

// រក្សាទុកទិន្នន័យទំនាក់ទំនង
router.post('/api/contact', async (req, res) => {
  try {
    const { name, phone, email, address, message, productId } = req.body;
    
    // ពិនិត្យមើលទិន្នន័យដែលចាំបាច់
    if (!name || !phone) {
      return res.status(400).json({ 
        success: false, 
        message: 'ឈ្មោះ និងលេខទូរស័ព្ទចាំបាច់ត្រូវបំពេញ' 
      });
    }

    // រក្សាទុកក្នុង Database
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
    const allContacts = await 
db.select().from(contacts).orderBy(contacts.createdAt, 'desc');
    res.json(allContacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ message: 'មានបញ្ហាក្នុងការទាញយកទិន្នន័យ' });
  }
});

// អាប់ដេតស្ថានភាពទំនាក់ទំនង
router.patch('/api/contacts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    const updated = await db.update(contacts)
      .set({ status, updatedAt: new Date() })
      .where(eq(contacts.id, parseInt(id)))
      .returning();
    
    res.json(updated[0]);
  } catch (error) {
    res.status(500).json({ message: 'មានបញ្ហាក្នុងការអាប់ដេតទិន្នន័យ' });
  }
});

export default router;
