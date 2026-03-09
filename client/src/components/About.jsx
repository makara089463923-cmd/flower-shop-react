import React from 'react';

export default function About() {
  return (
    <section className="section about fade-up" id="about">
      <div className="about-grid">
        <div>
          <div className="section-tag">🌿 ដោះលែង</div>
          <h2 className="section-title">អំពីលោក ដេស៊ី</h2>
          <p className="about-text">
            ផ្កាដេស៊ី គឺជាហាងផ្កា ដែលមានបទពិសោធន៍ក្នុងការរៀបចំផ្កា និងលម្អ ដែលស្អាត ដើម្បីបង្ហាញពីស្នេហា និងការយោគ្យល់ដឹងរបស់អ្នក។ ផ្ការបស់យើង ត្រូវបានរៀបចំដោយដៃ ដោយមានលម្អិតលម្អ ដើម្បីឱ្យស្អាត និងស្ងាត់ៗ។
          </p>
          <p className="about-text">
            យើងប្រឹងប្រែងដើម្បីផ្តល់ជូនលោកអ្នក នូវផ្កាដែលស្អាត និងស្ងាត់ៗ ដែលនឹងធ្វើឱ្យពេលវេលារបស់លោកអ្នក ក្លាយជាពេលវេលាដ៏ស្អាត។
          </p>
          <div className="about-stats">
            <div>
              <div className="stat-num">500+</div>
              <div className="stat-label">ប្រតិបត្តិការ</div>
            </div>
            <div>
              <div className="stat-num">98%</div>
              <div className="stat-label">ពេញចិត្ត</div>
            </div>
            <div>
              <div className="stat-num">10+</div>
              <div className="stat-label">ឆ្នាំ</div>
            </div>
          </div>
        </div>
        <div className="about-visual">
          🌺
        </div>
      </div>
    </section>
  );
}
