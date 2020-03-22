import React from 'react';
import ServiceOne from "../../elements/service/ServiceOne";

import classes from './BackgroundVideo.module.css';

const Videos = () => {
    const videoSource = "../public/assets/video/video.m4v"
    return (
        <div className={classes.Container} >
            <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
                <source src={videoSource} type="video/m4v" />
                Your browser does not support the video tag.
            </video>

            <div className={classes.Content}>
                <div className={classes.SubContent} >
                    <div
                    // className="Slider3F slide slide-style-4 slider-fixed--height d-flex align-items-center bg_image--30"
                    // data-black-overlay="8"
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
            </div>
        </div>
    )
}

export default Videos
