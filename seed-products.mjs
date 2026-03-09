import { drizzle } from 'drizzle-orm/mysql2';
import { products } from './drizzle/schema.ts';

const db = drizzle(process.env.DATABASE_URL);

const initialProducts = [
  {
    name: 'Rose Bouquet',
    nameKm: 'ផ្កាផ្កា',
    description: 'ផ្កាកុលាបស្អាត ដែលរៀបចំដោយដៃ',
    price: '45.00',
    emoji: '🌹',
    color: 'pink',
    badge: 'ពេញនិយម',
    inStock: true,
  },
  {
    name: 'Sunflower',
    nameKm: 'ផ្កាព្រះអាទិត្យ',
    description: 'ផ្កាព្រះអាទិត្យដែលភ្លឺស្វាង',
    price: '35.00',
    emoji: '🌻',
    color: 'yellow',
    badge: 'ថ្មី',
    inStock: true,
  },
  {
    name: 'Lavender Mix',
    nameKm: 'ល្វាឡង់ដឺ',
    description: 'ល្វាឡង់ដឺលាយបញ្ចូលគ្នា',
    price: '40.00',
    emoji: '💜',
    color: 'purple',
    badge: 'ពេញនិយម',
    inStock: true,
  },
  {
    name: 'Daisy Delight',
    nameKm: 'ផ្កាដេស៊ី',
    description: 'ផ្កាដេស៊ីស្អាត',
    price: '30.00',
    emoji: '🌼',
    color: 'white-bg',
    badge: 'ថ្មី',
    inStock: true,
  },
  {
    name: 'Coral Dream',
    nameKm: 'សុបិន្តផ្កា',
    description: 'ផ្កាប្រាក់ដ៏ស្អាត',
    price: '50.00',
    emoji: '🧡',
    color: 'coral',
    badge: 'ពេញនិយម',
    inStock: true,
  },
  {
    name: 'Cherry Blossom',
    nameKm: 'ផ្កាលីច',
    description: 'ផ្កាលីចដែលស្អាត',
    price: '55.00',
    emoji: '🌸',
    color: 'red',
    badge: 'ពេញនិយម',
    inStock: true,
  },
];

async function seedProducts() {
  try {
    console.log('🌱 Starting to seed products...');
    
    for (const product of initialProducts) {
      await db.insert(products).values(product);
      console.log(`✅ Added: ${product.name}`);
    }
    
    console.log('🎉 All products seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding products:', error);
    process.exit(1);
  }
}

seedProducts();
