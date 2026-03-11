// import React from 'react';

// export default function About() {
//   return (
//     <section className="section about fade-up" id="about">
//       <div className="about-grid">
//         <div>
//           <div className="section-tag">🌿 ដោះលែង</div>
//           <h2 className="section-title">អំពីលោក ដេស៊ី</h2>
//           <p className="about-text">
//             ផ្កាដេស៊ី គឺជាហាងផ្កា ដែលមានបទពិសោធន៍ក្នុងការរៀបចំផ្កា និងលម្អ ដែលស្អាត ដើម្បីបង្ហាញពីស្នេហា និងការយោគ្យល់ដឹងរបស់អ្នក។ ផ្ការបស់យើង ត្រូវបានរៀបចំដោយដៃ ដោយមានលម្អិតលម្អ ដើម្បីឱ្យស្អាត និងស្ងាត់ៗ។
//           </p>
//           <p className="about-text">
//             យើងប្រឹងប្រែងដើម្បីផ្តល់ជូនលោកអ្នក នូវផ្កាដែលស្អាត និងស្ងាត់ៗ ដែលនឹងធ្វើឱ្យពេលវេលារបស់លោកអ្នក ក្លាយជាពេលវេលាដ៏ស្អាត។
//           </p>
//           <div className="about-stats">
//             <div>
//               <div className="stat-num">500+</div>
//               <div className="stat-label">ប្រតិបត្តិការ</div>
//             </div>
//             <div>
//               <div className="stat-num">99%</div>
//               <div className="stat-label">ពេញចិត្ត</div>
//             </div>
//             <div>
//               <div className="stat-num">10+</div>
//               <div className="stat-label">ឆ្នាំ</div>
//             </div>
//           </div>
//         </div>
//         <div className="about-visual">
//           🌺
//         </div>
//       </div>
//     </section>
//   );
// }
import React, { useState } from "react";

const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1490750967868-88df5691cc7a?w=400&h=400&fit=crop",
    alt: "ផ្កា",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=400&h=400&fit=crop",
    alt: "ផ្កា",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1487530811015-780bfbff8e1e?w=400&h=400&fit=crop",
    alt: "ផ្កា",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=400&h=400&fit=crop",
    alt: "ផ្កា",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=400&h=400&fit=crop",
    alt: "ផ្កា",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400&h=400&fit=crop",
    alt: "ផ្កា",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1548460784-f2c4a5af0a4d?w=400&h=400&fit=crop",
    alt: "ផ្កា",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1444021465936-c6ca81d39b84?w=400&h=400&fit=crop",
    alt: "ផ្កា",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1477420140578-8e964ad05f5c?w=400&h=400&fit=crop",
    alt: "ផ្កា",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1520763185298-1b434c919102?w=400&h=400&fit=crop",
    alt: "ផ្កា",
  },
];

export default function About() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className="section about fade-up" id="about">
      {/* ជួរទី១ — Text + Decoration */}
      <div className="about-grid">
        <div>
          <div className="section-tag">🌿 ដោះលែង</div>
          <h2 className="section-title">អំពីលោក ដេស៊ី</h2>
          <p className="about-text">
            ផ្កាដេស៊ី គឺជាហាងផ្កា ដែលមានបទពិសោធន៍ក្នុងការរៀបចំផ្កា និងលម្អ
            ដែលស្អាត ដើម្បីបង្ហាញពីស្នេហា និងការយោគ្យល់ដឹងរបស់អ្នក។
          </p>
          <p className="about-text">
            យើងប្រឹងប្រែងដើម្បីផ្តល់ជូនលោកអ្នក នូវផ្កាដែលស្អាត និងស្ងាត់ៗ
            ដែលនឹងធ្វើឱ្យពេលវេលារបស់លោកអ្នក ក្លាយជាពេលវេលាដ៏ស្អាត។
          </p>
          <div className="about-stats">
            <div>
              <div className="stat-num">500+</div>
              <div className="stat-label">ប្រតិបត្តិការ</div>
            </div>
            <div>
              <div className="stat-num">99%</div>
              <div className="stat-label">ពេញចិត្ត</div>
            </div>
            <div>
              <div className="stat-num">10+</div>
              <div className="stat-label">ឆ្នាំ</div>
            </div>
          </div>
        </div>
        <div className="about-visual">🌺</div>
      </div>

      {/* ជួរទី២ — Gallery Full Width */}
      <div style={{ marginTop: "3rem" }}>
        <div
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: "1.2rem",
          }}
        >
          🌸 វិចិត្រសាលផ្កា
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "12px",
          }}
        >
          {images.map((img, index) => (
            <div
              key={img.id}
              onClick={() => setSelectedImg(img)}
              style={{
                cursor: "pointer",
                borderRadius: "10px",
                overflow: "hidden",
                aspectRatio: "1",
                transition: "transform 0.3s, box-shadow 0.3s",
                background: "rgba(250,246,240,0.1)",
                border: "1px solid rgba(201,169,110,0.2)",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                onError={e => {
                  e.target.onerror = null;
                  e.target.src = `https://picsum.photos/seed/flora${index + 1}/400/400`;
                }}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImg && (
        <div
          onClick={() => setSelectedImg(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            cursor: "pointer",
          }}
        >
          <img
            src={selectedImg.src}
            alt={selectedImg.alt}
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              borderRadius: "12px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
            }}
          />
          <button
            style={{
              position: "absolute",
              top: "20px",
              right: "30px",
              background: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.3)",
              color: "white",
              fontSize: "1.5rem",
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
}
