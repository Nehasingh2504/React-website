// src/pages/Home.jsx
import React from 'react';
// Assuming your custom styles are loaded globally or imported here
 import './Home.css'; 
const Home = () => {
  return (
    <div className="mainpage-container position-relative">
      <div className="container py-5 vh-100 d-flex align-items-center">
        <div className="row w-100 align-items-center">
          {/* LEFT COLUMN */}
          <div className="col-lg-5 text-center mb-5 mb-lg-0">
            <div className="position-relative d-inline-block">
              <div className="mandala-background"></div>
            </div>
          </div>

          {/* RIGHT COLUMN*/}
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="main-title mb-1">
              Varnan is where stories find
              <br />
              their voice and form
            </h1>
            
            {/* Horizontal Line */}
            <hr className="d-none d-lg-block my-4" style={{borderColor: '#e7a09d', opacity: 1, width: '30%'}}/>

            {/* Sub-Title / Categories (using custom style: category-text) */}
            <h3 className="category-text my-4">
              <span className="text-pink">Films</span> . Brands . Art
            </h3>

            {/* Description Paragraph */}
            <p className="description-text mt-5 pe-lg-5 mx-auto mx-lg-0">
              Since 2009, V've been telling stories - stories of people, their journeys, and the places that shape them.
              Some begin in polished boardrooms, others in humble village squares. But every story starts the same way - by
              listening with intention. V believes it takes trust, patience, and an eye for the unseen to capture what truly matters.
              V doesn't just tell stories - **V honors them**.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;