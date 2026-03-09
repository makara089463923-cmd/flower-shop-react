import React, { useState } from 'react';
import { trpc } from '@/lib/trpc';
import { Loader2 } from 'lucide-react';

export default function Products() {
  const { data: products = [], isLoading } = trpc.products.list.useQuery();
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} ត្រូវបានបន្ថែមទៅម៉ាកប័ត្រ!`);
  };

  if (isLoading) {
    return (
      <section className="section fade-up" id="products">
        <div className="flex justify-center items-center py-12">
          <Loader2 className="animate-spin w-8 h-8" />
        </div>
      </section>
    );
  }

  return (
    <section className="section fade-up" id="products">
      <div className="section-tag">🌺 ផ្ការបស់យើង</div>
      <h2 className="section-title">ផ្កាស្អាតៗ</h2>
      <p className="section-desc">
        ផ្កាស្អាត និងស្ងាត់ៗ ដែលរៀបចំដោយដៃ ដើម្បីបង្ហាញពីស្នេហា និងការយោគ្យល់ដឹងរបស់អ្នក។
      </p>
      <div className="products-grid">
        {products && products.length > 0 ? (
          products.map(product => (
            <div key={product.id} className="product-card">
              <div className={`product-img ${product.color}`}>
                <span>{product.emoji}</span>
                {product.badge && (
                  <div className="product-badge">{product.badge}</div>
                )}
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-name-km">{product.nameKm}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="product-price">${product.price}</span>
                  <button 
                    className="product-add"
                    onClick={() => handleAddToCart(product)}
                    disabled={!product.inStock}
                  >
                    {product.inStock ? '➕ បន្ថែម' : 'ស្ទុក'}
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-3">មិនមានផ្កាដែលមាន</p>
        )}
      </div>
    </section>
  );
}
