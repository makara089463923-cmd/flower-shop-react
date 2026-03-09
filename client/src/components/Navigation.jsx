import React from 'react';

export default function Navigation() {
  return (
    <nav>
      <div className="logo">
        Dr.<span>Daisy</span>
      </div>
      <ul className="nav-links">
        <li><a href="#products">ផ្កា</a></li>
        <li><a href="#about">អំពីយើង</a></li>
        <li><a href="#contact">ទាក់ទង</a></li>
      </ul>
      <button className="nav-cart">🛒 ម៉ាកប័ត្រ</button>
    </nav>
  );
}
