import React from 'react';
import './thirdSection.css';
import thirdSectionIMG1 from '../assets/thirdSectionIMG1.webp';

const ThirdSection = () => {
  return (
    <section className="third-section">
      <div className="third-container">
        <div className="third-image-wrapper">
          <div className="image-top-text">Our Summer Collection ss25</div>
          <img
            src={thirdSectionIMG1}
            alt="Summer Collection"
            className="third-image"
          />
          <div className="image-bottom-text">Nocté</div>
        </div>

        {/* Wrapper για τίτλο και περιεχόμενο σε οριζόντια διάταξη */}
        <div className="third-text-wrapper">
          <div className="third-title-and-text">
            <h2 className="third-title">
              <span className="horizontal-text" data-text="Ready">
                Ready
              </span>
              <span className="vertical-text">for Summer?</span>
            </h2>

            <div className="third-text-content">
              <p className="third-description">
                Explore new seasonal shades designed for sun-drenched days and
                warm vibes. Discover the perfect eyewear to complement your
                summer adventures, combining style, comfort, and protection for
                every sunny moment.
              </p>

              <button className="third-button">
                Discover Summer Collection
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
