import React, { Component } from "react";
import ServiceOne from "../../elements/service/ServiceOne";

import fuentesMarcas from "../../../public/assets/fonts/fonts";

class SliderOne extends Component {
  render() {
    return (
      <div className="slider-activation">
        <fuentesMarcas />
        {/* Start Single Slide */}
        <div
          className="Slider3F slide slide-style-4 slider-fixed--height d-flex align-items-center bg_image--30"
          data-black-overlay="8"
        >
          <div className="container position-relative">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner">
                  {/* SMART <br />
                    FOAMS® */}

                  <h1 className="SFoam animated bounceIn">
                    <span>S</span>mart <span>F</span>
                    oams®
                  </h1>
                </div>
              </div>
            </div>
            {/* Start Service Area */}
            <div className="service-wrapper service-white">
              <ServiceOne />
            </div>

            {/* End Service Area */}
          </div>
        </div>
        {/* End Single Slide */}
      </div>
    );
  }
}
export default SliderOne;
