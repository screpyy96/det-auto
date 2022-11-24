import React from 'react';
import './hero-text.css';

export const HeroText = () => {
  return (
    <div className="container-text">
      <div className="main-title">
        <span className="title-hero">Valoarificare</span>
        <span className="title-hero">Protejare</span>
        <span className="title-hero">Mentinere</span>
        <span className="title-hero">Personalizere</span>
      </div>
      <div className="text-hero">
        <p>
          Detailing Auto Suceava a fost creat din pasiune pentru masini si prezentarea lor. A fost
          nascut sa rescrie cum proprietarii de masini ar trebui sa mentina prezenta masinilor
        </p>
      </div>
    </div>
  );
};
