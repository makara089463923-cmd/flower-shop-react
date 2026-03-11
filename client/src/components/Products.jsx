// import React, { useState } from 'react';
// import { trpc } from '@/lib/trpc';
// import { Loader2 } from 'lucide-react';

// export default function Products() {
//   const { data: products = [], isLoading } = trpc.products.list.useQuery();
//   const [cart, setCart] = useState([]);

//   const handleAddToCart = (product) => {
//     setCart([...cart, product]);
//     alert(`${product.name} ត្រូវបានបន្ថែមទៅម៉ាកប័ត្រ!`);
//   };

//   if (isLoading) {
//     return (
//       <section className="section fade-up" id="products">
//         <div className="flex justify-center items-center py-12">
//           <Loader2 className="animate-spin w-8 h-8" />
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="section fade-up" id="products">
//       <div className="section-tag">🌺 ផ្ការបស់យើង</div>
//       <h2 className="section-title">ផ្កាស្អាតៗ</h2>
//       <p className="section-desc">
//         ផ្កាស្អាត និងស្ងាត់ៗ ដែលរៀបចំដោយដៃ ដើម្បីបង្ហាញពីស្នេហា និងការយោគ្យល់ដឹងរបស់អ្នក។
//       </p>
//       <div className="products-grid">
//         {products && products.length > 0 ? (
//           products.map(product => (
//             <div key={product.id} className="product-card">
//               <div className={`product-img ${product.color}`}>
//                 <span>{product.emoji}</span>
//                 {product.badge && (
//                   <div className="product-badge">{product.badge}</div>
//                 )}
//               </div>
//               <div className="product-info">
//                 <h3 className="product-name">{product.name}</h3>
//                 <p className="product-name-km">{product.nameKm}</p>
//                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                   <span className="product-price">${product.price}</span>
//                   <button
//                     className="product-add"
//                     onClick={() => handleAddToCart(product)}
//                     disabled={!product.inStock}
//                   >
//                     {product.inStock ? '➕ បន្ថែម' : 'ស្ទុក'}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-center col-span-3">មិនមានផ្កាដែលមាន</p>
//         )}
//       </div>
//     </section>
//   );
// }

import React, { useState } from "react";

const flowerProducts = [
  {
    id: 1,
    name: "Red Rose Bouquet",
    nameKm: "កម្រង់ផ្កាកុលាប",
    price: 25,
    emoji: "🌹",
    color: "pink",
    badge: "ពេញនិយម",
    inStock: true,
  },
  {
    id: 2,
    name: "Sunflower Bundle",
    nameKm: "កម្រង់ផ្កាព្រះអាទិត្យ",
    price: 18,
    emoji: "🌻",
    color: "yellow",
    badge: null,
    inStock: true,
  },
  {
    id: 3,
    name: "White Lily",
    nameKm: "ផ្កាលីលីស",
    price: 22,
    emoji: "🌸",
    color: "white-bg",
    badge: "ថ្មី",
    inStock: true,
  },
  {
    id: 4,
    name: "Purple Lavender",
    nameKm: "ផ្កាឡាវ៉ង់ដ័រ",
    price: 20,
    emoji: "💜",
    color: "purple",
    badge: null,
    inStock: true,
  },
  {
    id: 5,
    name: "Pink Tulip",
    nameKm: "ផ្កាទូលីបផ្កាយ",
    price: 28,
    emoji: "🌷",
    color: "pink",
    badge: "Sale",
    inStock: true,
  },
  {
    id: 6,
    name: "Daisy Crown",
    nameKm: "ផ្កាដេស៊ី",
    price: 15,
    emoji: "🌼",
    color: "yellow",
    badge: null,
    inStock: true,
  },
  {
    id: 7,
    name: "Cherry Blossom",
    nameKm: "ផ្កាចេរ៊ី",
    price: 35,
    emoji: "🌸",
    color: "pink",
    badge: "VIP",
    inStock: true,
  },
  {
    id: 8,
    name: "Orange Marigold",
    nameKm: "ផ្កាម៉ារីហ្គោលត",
    price: 16,
    emoji: "🧡",
    color: "coral",
    badge: null,
    inStock: true,
  },
  {
    id: 9,
    name: "Blue Hydrangea",
    nameKm: "ផ្កាហ៊ីដ្រង់ស្យា",
    price: 30,
    emoji: "💙",
    color: "purple",
    badge: "ថ្មី",
    inStock: true,
  },
  {
    id: 10,
    name: "Red Carnation",
    nameKm: "ផ្កាការណ៉ាស្យុង",
    price: 19,
    emoji: "🌹",
    color: "red",
    badge: null,
    inStock: true,
  },
  {
    id: 11,
    name: "White Orchid",
    nameKm: "ផ្កាអរគីដ",
    price: 45,
    emoji: "🌺",
    color: "white-bg",
    badge: "Premium",
    inStock: true,
  },
  {
    id: 12,
    name: "Yellow Daffodil",
    nameKm: "ផ្កាដាហ្វូឌីល",
    price: 17,
    emoji: "🌼",
    color: "yellow",
    badge: null,
    inStock: true,
  },
  {
    id: 13,
    name: "Pink Peony",
    nameKm: "ផ្កាភីអូនី",
    price: 38,
    emoji: "🌸",
    color: "pink",
    badge: "ពេញនិយម",
    inStock: true,
  },
  {
    id: 14,
    name: "Violet Iris",
    nameKm: "ផ្កាអ៊ីរីស",
    price: 24,
    emoji: "💜",
    color: "purple",
    badge: null,
    inStock: false,
  },
  {
    id: 15,
    name: "Mixed Bouquet",
    nameKm: "កម្រង់ផ្កាចម្រុះ",
    price: 42,
    emoji: "💐",
    color: "pink",
    badge: "ហត់",
    inStock: true,
  },
  {
    id: 16,
    name: "White Jasmine",
    nameKm: "ផ្កាម្លិះ",
    price: 14,
    emoji: "🤍",
    color: "white-bg",
    badge: null,
    inStock: true,
  },
  {
    id: 17,
    name: "Red Poppy",
    nameKm: "ផ្កាផូភី",
    price: 21,
    emoji: "🌹",
    color: "red",
    badge: null,
    inStock: true,
  },
  {
    id: 18,
    name: "Pink Gerbera",
    nameKm: "ផ្កាហ្សឺបេរ៉ា",
    price: 16,
    emoji: "🌸",
    color: "pink",
    badge: "Sale",
    inStock: true,
  },
  {
    id: 19,
    name: "Blue Forget-Me-Not",
    nameKm: "ផ្កាភ្លេចខ្ញុំ",
    price: 13,
    emoji: "💙",
    color: "purple",
    badge: null,
    inStock: true,
  },
  {
    id: 20,
    name: "Orange Tiger Lily",
    nameKm: "ផ្កាលីលីខ្លា",
    price: 27,
    emoji: "🧡",
    color: "coral",
    badge: "ថ្មី",
    inStock: true,
  },
  {
    id: 21,
    name: "Purple Wisteria",
    nameKm: "ផ្កាវីស្ទេរ៉ា",
    price: 33,
    emoji: "💜",
    color: "purple",
    badge: null,
    inStock: true,
  },
  {
    id: 22,
    name: "Pink Rose Garden",
    nameKm: "សួនផ្កាកុលាបផ្កាយ",
    price: 55,
    emoji: "🌹",
    color: "pink",
    badge: "VIP",
    inStock: true,
  },
  {
    id: 23,
    name: "Sunflower Crown",
    nameKm: "មកុដផ្កាព្រះអាទិត្យ",
    price: 29,
    emoji: "🌻",
    color: "yellow",
    badge: null,
    inStock: true,
  },
  {
    id: 24,
    name: "White Magnolia",
    nameKm: "ផ្កាម៉ាញ៉ូលីយ៉ា",
    price: 36,
    emoji: "🌸",
    color: "white-bg",
    badge: "Premium",
    inStock: true,
  },
  {
    id: 25,
    name: "Red Anthurium",
    nameKm: "ផ្កាអានធូរ៉ូម",
    price: 40,
    emoji: "❤️",
    color: "red",
    badge: null,
    inStock: false,
  },
  {
    id: 26,
    name: "Pink Camellia",
    nameKm: "ផ្កាកាម៉ីលីយ៉ា",
    price: 23,
    emoji: "🌸",
    color: "pink",
    badge: null,
    inStock: true,
  },
  {
    id: 27,
    name: "Yellow Mimosa",
    nameKm: "ផ្កាមីម៉ូហ្ស",
    price: 18,
    emoji: "🌼",
    color: "yellow",
    badge: "Sale",
    inStock: true,
  },
  {
    id: 28,
    name: "Blue Delphinium",
    nameKm: "ផ្កាដែលហ្វីនីយ៉ូម",
    price: 26,
    emoji: "💙",
    color: "purple",
    badge: null,
    inStock: true,
  },
  {
    id: 29,
    name: "Coral Begonia",
    nameKm: "ផ្កាបេហ្គូនីយ៉ា",
    price: 15,
    emoji: "🧡",
    color: "coral",
    badge: "ថ្មី",
    inStock: true,
  },
  {
    id: 30,
    name: "White Gardenia",
    nameKm: "ផ្កាហ្គាដេនីយ៉ា",
    price: 32,
    emoji: "🤍",
    color: "white-bg",
    badge: null,
    inStock: true,
  },
  {
    id: 31,
    name: "Pink Azalea",
    nameKm: "ផ្កាអាហ្សាលេ",
    price: 20,
    emoji: "🌸",
    color: "pink",
    badge: null,
    inStock: true,
  },
  {
    id: 32,
    name: "Purple Allium",
    nameKm: "ផ្កាអាល្លូម",
    price: 22,
    emoji: "💜",
    color: "purple",
    badge: "ពេញនិយម",
    inStock: true,
  },
  {
    id: 33,
    name: "Yellow Ranunculus",
    nameKm: "ផ្ការរ៉ានុនខ្យូលុស",
    price: 28,
    emoji: "🌼",
    color: "yellow",
    badge: null,
    inStock: true,
  },
  {
    id: 34,
    name: "Red Geranium",
    nameKm: "ផ្កាហ្សេរ៉ានីយ៉ូម",
    price: 14,
    emoji: "🌹",
    color: "red",
    badge: null,
    inStock: true,
  },
  {
    id: 35,
    name: "Pink Cyclamen",
    nameKm: "ផ្កាស៊ីក្លាម៉ែន",
    price: 19,
    emoji: "🌸",
    color: "pink",
    badge: "Sale",
    inStock: true,
  },
  {
    id: 36,
    name: "Blue Agapanthus",
    nameKm: "ផ្កាអាហ្គាប៉ានធុស",
    price: 31,
    emoji: "💙",
    color: "purple",
    badge: null,
    inStock: false,
  },
  {
    id: 37,
    name: "Orange Zinnia",
    nameKm: "ផ្កាហ្ស៊ីនីយ៉ា",
    price: 12,
    emoji: "🧡",
    color: "coral",
    badge: null,
    inStock: true,
  },
  {
    id: 38,
    name: "White Freesia",
    nameKm: "ផ្កាហ្រ្វីស៊ីយ៉ា",
    price: 24,
    emoji: "🤍",
    color: "white-bg",
    badge: "ថ្មី",
    inStock: true,
  },
  {
    id: 39,
    name: "Pink Lisianthus",
    nameKm: "ផ្កាលីស្យានធុស",
    price: 27,
    emoji: "🌸",
    color: "pink",
    badge: null,
    inStock: true,
  },
  {
    id: 40,
    name: "Purple Statice",
    nameKm: "ផ្កាស្តាទីស",
    price: 16,
    emoji: "💜",
    color: "purple",
    badge: "VIP",
    inStock: true,
  },
  {
    id: 41,
    name: "Sunflower Field",
    nameKm: "ទុ่งផ្កាព្រះអាទិត្យ",
    price: 48,
    emoji: "🌻",
    color: "yellow",
    badge: "Premium",
    inStock: true,
  },
  {
    id: 42,
    name: "Red Amaryllis",
    nameKm: "ផ្កាអាម៉ារីលីស",
    price: 34,
    emoji: "❤️",
    color: "red",
    badge: null,
    inStock: true,
  },
  {
    id: 43,
    name: "Pink Sweet Pea",
    nameKm: "ផ្កាស្វីតភី",
    price: 17,
    emoji: "🌸",
    color: "pink",
    badge: null,
    inStock: true,
  },
  {
    id: 44,
    name: "Blue Cornflower",
    nameKm: "ផ្កាស្រូវសាឡី",
    price: 13,
    emoji: "💙",
    color: "purple",
    badge: "Sale",
    inStock: true,
  },
  {
    id: 45,
    name: "Coral Protea",
    nameKm: "ផ្កាប្រូទេ",
    price: 42,
    emoji: "🧡",
    color: "coral",
    badge: "ថ្មី",
    inStock: true,
  },
  {
    id: 46,
    name: "White Stephanotis",
    nameKm: "ផ្កាស្តេហ្វាណូទីស",
    price: 29,
    emoji: "🤍",
    color: "white-bg",
    badge: null,
    inStock: true,
  },
  {
    id: 47,
    name: "Pink Cosmos",
    nameKm: "ផ្កាខូស្មូស",
    price: 11,
    emoji: "🌸",
    color: "pink",
    badge: null,
    inStock: true,
  },
  {
    id: 48,
    name: "Purple Bougainvillea",
    nameKm: "ផ្កាហ្គីស",
    price: 25,
    emoji: "💜",
    color: "purple",
    badge: "ពេញនិយម",
    inStock: true,
  },
  {
    id: 49,
    name: "Yellow Chrysanthemum",
    nameKm: "ផ្កាខ្រីហ្សង់ថឹម",
    price: 20,
    emoji: "🌼",
    color: "yellow",
    badge: null,
    inStock: true,
  },
  {
    id: 50,
    name: "Royal Rose Bouquet",
    nameKm: "កម្រង់ផ្កាកុលាបព្រះ",
    price: 75,
    emoji: "👑",
    color: "red",
    badge: "VIP",
    inStock: true,
  },
];

export default function Products() {
  const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState("all");
  const [page, setPage] = useState(1);
  const itemsPerPage = 9; // បង្ហាញ 9 មុខក្នុងម្តង

  const filtered =
    filter === "all"
      ? flowerProducts
      : flowerProducts.filter(p => p.color === filter);

  // Pagination
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const handleAddToCart = product => {
    setCart([...cart, product]);
    alert(`${product.nameKm} ត្រូវបានបន្ថែមទៅម៉ាកប័ត្រ!`);
  };

  // reset page ពេល filter ផ្លាស់ប្តូរ
  const handleFilter = key => {
    setFilter(key);
    setPage(1);
  };

  return (
    <section className="section fade-up" id="products">
      <div className="section-tag">🌺 ផ្ការបស់យើង</div>
      <h2 className="section-title">ផ្កាស្អាតៗ</h2>
      <p className="section-desc">
        ផ្កាស្អាត និងស្ងាត់ៗ ដែលរៀបចំដោយដៃ ដើម្បីបង្ហាញពីស្នេហា
        និងការយោគ្យល់ដឹងរបស់អ្នក។
      </p>

      {/* Filter Buttons */}
      <div
        style={{
          display: "flex",
          gap: "0.8rem",
          flexWrap: "wrap",
          marginBottom: "2rem",
        }}
      >
        {filters.map(f => (
          <button
            key={f.key}
            onClick={() => handleFilter(f.key)}
            style={{
              padding: "0.4rem 1.2rem",
              border: "1.5px solid",
              borderColor:
                filter === f.key ? "var(--rose)" : "rgba(201,115,106,0.3)",
              background: filter === f.key ? "var(--rose)" : "transparent",
              color: filter === f.key ? "white" : "var(--deep)",
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "0.9rem",
              letterSpacing: "0.05em",
              cursor: "pointer",
              transition: "all 0.3s",
              borderRadius: "2px",
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="products-grid">
        {paginated.map(product => (
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span className="product-price">${product.price}</span>
                <button
                  className="product-add"
                  onClick={() => handleAddToCart(product)}
                  disabled={!product.inStock}
                  style={{ opacity: product.inStock ? 1 : 0.5 }}
                >
                  {product.inStock ? "➕ បន្ថែម" : "អស់ស្ទុក"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.5rem",
          marginTop: "2.5rem",
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={() => setPage(p => Math.max(1, p - 1))}
          disabled={page === 1}
          style={{
            padding: "0.5rem 1.2rem",
            border: "1.5px solid var(--rose)",
            background: "transparent",
            color: "var(--rose)",
            cursor: page === 1 ? "not-allowed" : "pointer",
            opacity: page === 1 ? 0.4 : 1,
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "1rem",
          }}
        >
          ← មុន
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
          <button
            key={p}
            onClick={() => setPage(p)}
            style={{
              padding: "0.5rem 0.9rem",
              border: "1.5px solid",
              borderColor: page === p ? "var(--rose)" : "rgba(201,115,106,0.3)",
              background: page === p ? "var(--rose)" : "transparent",
              color: page === p ? "white" : "var(--deep)",
              cursor: "pointer",
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "0.95rem",
              minWidth: "36px",
            }}
          >
            {p}
          </button>
        ))}

        <button
          onClick={() => setPage(p => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
          style={{
            padding: "0.5rem 1.2rem",
            border: "1.5px solid var(--rose)",
            background: "transparent",
            color: "var(--rose)",
            cursor: page === totalPages ? "not-allowed" : "pointer",
            opacity: page === totalPages ? 0.4 : 1,
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "1rem",
          }}
        >
          បន្ទាប់ →
        </button>
      </div>

      {/* Cart Count */}
      {cart.length > 0 && (
        <div
          style={{
            position: "fixed",
            bottom: "2rem",
            right: "2rem",
            background: "var(--rose)",
            color: "white",
            padding: "0.8rem 1.5rem",
            borderRadius: "50px",
            fontFamily: "Noto Sans Khmer, sans-serif",
            fontSize: "0.9rem",
            boxShadow: "0 8px 25px rgba(201,115,106,0.4)",
            zIndex: 100,
          }}
        >
          🛒 ម៉ាកប័ត្រ: {cart.length} មុខ
        </div>
      )}
    </section>
  );
}
