import React from 'react';

export default function Marquee() {
  const marqueeText = '✿ ផ្កាស្អាត ✿ ដឹងលម្អ ✿ ដោះលែង ✿ ផ្កាស្អាត ✿ ដឹងលម្អ ✿ ដោះលែង ✿ ';

  return (
    <div className="marquee-wrap">
      <div className="marquee">
        {marqueeText}
        {marqueeText}
      </div>
    </div>
  );
}
