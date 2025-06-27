// seedProducts.js
import { supabase } from './supabaseSeedClient.js';

// ... υπόλοιπος κώδικας seedProducts όπως πριν

const products = [
  {
    title: 'Nocte Eclipse',
    price: 120,
    mainImage:
      'https://wusghrurjjcjdjgknbvt.supabase.co/storage/v1/object/public/products/FSIMG1.webp',
    hoverImage:
      'https://wusghrurjjcjdjgknbvt.supabase.co/storage/v1/object/public/products/FSIMG11.webp',
  },
  {
    title: 'Nocte Nova',
    price: 135,
    mainImage:
      'https://wusghrurjjcjdjgknbvt.supabase.co/storage/v1/object/public/products/FSIMG2.webp',
    hoverImage:
      'https://wusghrurjjcjdjgknbvt.supabase.co/storage/v1/object/public/products/FSIMG22.webp',
  },
  {
    title: 'Nocte Lumina',
    price: 110,
    mainImage:
      'https://wusghrurjjcjdjgknbvt.supabase.co/storage/v1/object/public/products/FSIMG3.webp',
    hoverImage:
      'https://wusghrurjjcjdjgknbvt.supabase.co/storage/v1/object/public/products/FSIMG33.webp',
  },
  {
    title: 'Nocte Aether',
    price: 140,
    mainImage:
      'https://wusghrurjjcjdjgknbvt.supabase.co/storage/v1/object/public/products/FSIMG2.webp',
    hoverImage:
      'https://wusghrurjjcjdjgknbvt.supabase.co/storage/v1/object/public/products/FSIMG22.webp',
  },
  {
    title: 'Nocte Solis',
    price: 115,
    mainImage:
      'https://wusghrurjjcjdjgknbvt.supabase.co/storage/v1/object/public/products/FSIMG3.webp',
    hoverImage:
      'https://wusghrurjjcjdjgknbvt.supabase.co/storage/v1/object/public/products/FSIMG33.webp',
  },
  {
    title: 'Nocte Nox',
    price: 125,
    mainImage:
      'https://wusghrurjjcjdjgknbvt.supabase.co/storage/v1/object/public/products/FSIMG1.webp',
    hoverImage:
      'https://wusghrurjjcjdjgknbvt.supabase.co/storage/v1/object/public/products/FSIMG11.webp',
  },
  {
    title: 'Nocte Stella',
    price: 130,
    mainImage:
      'https://wusghrurjjcjdjgknbvt.supabase.co/storage/v1/object/public/products/FSIMG3.webp',
    hoverImage:
      'https://wusghrurjjcjdjgknbvt.supabase.co/storage/v1/object/public/products/FSIMG33.webp',
  },
  {
    title: 'Nocte Luna',
    price: 118,
    mainImage:
      'https://wusghrurjjcjdjgknbvt.supabase.co/storage/v1/object/public/products/FSIMG1.webp',
    hoverImage:
      'https://wusghrurjjcjdjgknbvt.supabase.co/storage/v1/object/public/products/FSIMG11.webp',
  },
];

async function seedProducts() {
  const { error } = await supabase.from('products').insert(products);
  if (error) {
    console.error('❌ Error inserting products:', error);
  } else {
    console.log('✅ Products inserted successfully');
  }
}

seedProducts();
