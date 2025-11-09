import React from 'react';
import './Home.css';
const Home = () => {
    return (
        <div className="mainpage-container position-relative">
            <div className="container-fluid mt-3 mt-sm-0 vh-100 d-flex align-items-center justify-content-center">
                <div className="row w-100 align-items-center mt-sm-0">
                    {/* LEFT COLUMN */}
                    <div className="col-lg-5 text-center mb-5 mb-lg-0 position-relative d-flex justify-content-center">
                        <div className="mandala-background"></div>
                    </div>

                    {/* RIGHT COLUMN*/}
                    <div className="col-lg-7 text-lg-start ">
                        <h1 className="main-title mb-1 text-center">
                            Varnan is where stories find
                            their voice and form
                        </h1>

                        {/* Horizontal Line */}
                        <hr className="d-none d-lg-block my-4" style={{ borderColor: '#e7a09d', opacity: 1, width: '40%' }} />

                        {/* Sub-Title / Categories (using custom style: category-text) */}
                        <h3 className="category-text my-4 text-center">
                            <span className="text-pink">Films</span> . Brands . Art
                        </h3>

                        {/* Description Paragraph */}
                        <p className="description-text mt-5 px-lg-5 mx-auto text-center">
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
