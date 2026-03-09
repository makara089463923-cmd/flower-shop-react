import React from 'react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <div className="hero-tag">🌸 ស្វាគមន៍</div>
        <h1 className="hero-title">
          ផ្កា<em>ស្អាត</em><br />
          សម្រាប់<em>ពេលវេលា</em><br />
          ពិសេស
        </h1>
        <p className="hero-subtitle">
          ផ្កា신선 និងស្អាត ដែលរៀបចំដោយដៃ ដើម្បីបង្ហាញពីស្នេហា និងការយោគ្យល់ដឹងរបស់អ្នក។
        </p>
        <div className="hero-btns">
          <button className="btn-primary">🛍️ ទិញឥឡូវ</button>
          <button className="btn-outline">📖 ស្វាគមន៍</button>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-circle">
          <div className="hero-flower-emoji">🌹</div>
        </div>
        <div className="hero-badge">
          <p>⭐ ពិសេស</p>
          <h4>រលាយលើលម្អ</h4>
        </div>
      </div>
    </section>
  );
}
