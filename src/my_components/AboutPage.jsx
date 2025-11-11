import React from 'react';
import './AboutPage.css';
function AboutPage() {
  // Data for the counter boxes
  const stats = [
    { count: '85+', label: 'Projects', color: '#ffb367', tilt: 'tilt-left-sm' },
    { count: '50+', label: 'Happy Clients', color: '#f7d08a', tilt: 'tilt-right-sm' },
    { count: '10+', label: 'Experts Team', color: '#f5e0a9', tilt: 'tilt-left-lg' },
  ];

  return (
    <div className="about-page pattern-background container-fluid p-0 h-100">
      <div className="container-fluid">
        <div className="main-content">
          <div className='row'>

            {/* Left */}
            <div className=" col-lg-6 col-md-6 pt-4">
              <h2 className="text-center " style={{ color: '#32465a', fontFamily: 'cursive', textShadow: '1px 4px 5px #e58b88ff' }}>
                A montage of familiar faces and names.
              </h2>

              <p className="text-secondary mission-text mb-5">
                Some stories come from the biggest names.
                Others begin with bold, rising voices.
                We've been fortunate to walk alongside both -
                listening, creating, and building stories that matter.
              </p>

              {/* Stats/Counter Boxes */}
              <div className="d-flex justify-content-center flex-wrap pt-5">
                {stats.map((stat, index) => (
                  <div key={index} className={`stat-box p-3 ${stat.tilt}`}
                    style={{
                      backgroundColor: stat.color, transform: index === 0 ? 'rotate(-3deg)' : index === 2 ? 'rotate(5deg)' : 'none'
                      , zIndex: index === 0 ? 3 : index === 2 ? 1 : 2, margin: index === 0 ? 0 - 5 : index === 2 ? 0 : 0
                    }}>
                    <h3 className="mb-0 fw-bold" style={{ color: '#32465a' }}>{stat.count}</h3>
                    <p className="mb-0 small">{stat.label}</p>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Column: Motto/Graphic */}
            <div className="col-lg-6 col-md-6 text-end position-relative">
              <p className="motto-text fs-3 m-5 text-center" style={{ color: '#32465a', zIndex: 10 }}>
                Every project is more than just a brief
                it's a new chapter waiting to be written.
                Together, we've crafted tales that inspire,
                connect, and endure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
