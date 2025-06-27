import React from 'react';
import './secondSection.css';
import secondSectionIMG1 from '../assets/secondSectionIMG1.jpg';
import secondSectionIMG2 from '../assets/secondSectionIMG2.jpg';
import secondSectionIMG3 from '../assets/secondSectionIMG3.jpg';
import EyewearCard from './EyewearCard';

function SecondSection() {
  return (
    <section className="second-section">
      <h1 className="section-title">Choose Your Eyewear</h1>
      <div className="card-row">
        <EyewearCard title="Sunglasses" image={secondSectionIMG1} />
        <EyewearCard title="Prescription Glasses" image={secondSectionIMG2} />
        <EyewearCard title="Blue Light Glasses" image={secondSectionIMG3} />
      </div>
    </section>
  );
}

export default SecondSection;
