import React from 'react';
import './ServicesPage.css'; 

// Placeholder images (adjust paths as needed)
import filmProductionImg from '../assets/film-production.png'; 
import brandingImg from '../assets/branding.png';
import artCurationImg from '../assets/art-curation.png';

function ServicesPage() {

  return (
    <div className="page container-fluid p-0 m-0 h-100 text-center">

      <div className="container py-5">
        <div className="mx-auto mb-4">
          <h3 className="pagetitle">The storyboard reveals the breadth of our craft.</h3>
        </div>

        {/* Image Grid: 'row' with 'gx-0' for zero gutter between columns */}
        <div className="row justify-content-center mt-5 gx-0">
          <div className="col-lg-4 col-md-6 col-sm-12 service-item">
            <div className="polaroid-card tilt-left shadow-lg border-0 bg-white">
              <div className="image-wrapper"> 
                <img src={filmProductionImg} alt="Film Production" className="img-fluid" />
              </div>
              <p className="caption mt-2 fw-bold">Film Production</p>
            </div>
          </div>

          {/* Item 2: Branding (Straight) */}
          <div className="col-lg-4 col-md-6 col-sm-12 service-item">
            {/* Used Bootstrap 'shadow-lg', 'border-0', 'bg-white' */}
            <div className="polaroid-card shadow-lg border-0 bg-white">
              <div className="image-wrapper border-0">
                <img src={brandingImg} alt="Branding" className="img-fluid" />
              </div>
              {/* Used Bootstrap 'fw-bold' for font weight */}
              <p className="caption mt-2 fw-bold">Branding</p>
            </div>
          </div>

          {/* Item 3: Art Curation (Tilted Right) */}
          <div className="col-lg-4 col-md-6 col-sm-12 service-item">
            <div className="polaroid-card tilt-right shadow-lg border-0 bg-white">
              <div className="image-wrapper border-0">
                <img src={artCurationImg} alt="Art Curation" className="img-fluid" />
              </div>
              <p className="caption mt-2 fw-bold">Art Curation</p>
            </div>
          </div>

        </div>
      </div>
      
      {/* Static pattern border at the bottom (still needs custom CSS) */}
      <div className="bottom-mandala-border"></div>
    </div>
  );
}

export default ServicesPage;