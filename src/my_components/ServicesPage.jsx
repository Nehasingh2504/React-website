import React from 'react';
import './ServicesPage.css';
import filmProductionImg from '../assets/film-production.png';
import brandingImg from '../assets/branding.png';
import artCurationImg from '../assets/art-curation.png';

function ServicesPage() {

  return (
    <div className="page position-relative overflow-hidden">
      <div className="container-fluid">
        <div className='body-content'>
          <div className="mb-4">
            <h3 className="pagetitle">The storyboard reveals the breadth of our craft.</h3>
          </div>

          {/* Image Grid */}
          <div className="row justify-content-center mt-5 gx-0">

            {/* Item1 */}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="polaroid-card tilt-left bg-white ">
                <div className='service-item service_pos1'></div>
                <div className="image-wrapper shadow-lg">
                  <img src={filmProductionImg} alt="Film Production" className="img-fluid" />
                </div>
                <p className="caption mt-2 fw-bold">Film Production</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="polaroid-card tilt bg-white">
                <div className='service-item service_pos2'></div>
                <div className="image-wrapper shadow-lg">
                  <img src={brandingImg} alt="Branding" className="img-fluid" />
                </div>
                <p className="caption mt-2 fw-bold">Branding</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="polaroid-card tilt-right bg-white">
                <div className='service-item service_pos3'></div>
                <div className="image-wrapper shadow-lg">
                  <img src={artCurationImg} alt="Art Curation" className="img-fluid" />
                </div>
                <p className="caption mt-2 fw-bold">Art Curation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
