import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import NewProductsCard from './NewProductsCard';

function NewProductsArray() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase.from('products').select('*');
      if (error) {
        console.error('❌ Error fetching products:', error);
      } else {
        setProducts(data); // Χωρίς format, γιατί τα URLs είναι ήδη πλήρη
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="products-row">
      {products.map((product) => (
        <NewProductsCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default NewProductsArray;
