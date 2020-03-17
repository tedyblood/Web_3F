import React, { Component } from "react";

class About extends Component {
  render() {
    let title = "¿Quienes Somos?",
      description =
        "3F es una compañía dirigida por personas altamente experimentadas que han sido una fuerza impulsora en su propia área de experiencia dentro de la industria de protección contra incendios durante las últimas tres décadas.";
    return (
      <React.Fragment>
        <div className="about-wrapper" name="Nosotros">
          <div className="container">
            <div className="row row--35 align-items-center">
              <div className="col-lg-5 col-md-12">
                <div className="thumbnail">
                  <img
                    className="w-100"
                    src="/assets/images/about/about-1.jpg"
                    alt="About Images"
                  />
                </div>
              </div>

              <div className="col-lg-7 col-md-12">
                <img
                  className="w-25"
                  src="/assets/images/logo/logo.png"
                  alt="logo-cuerpo"
                />
                <div className="about-inner inner">
                  <div className="section-title">
                    <h2 className="title">{title}</h2>
                    <p className="description">{description}</p>
                  </div>
                  <div className="row mt--30 mt_sm--10">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                      <div className="about-us-list">
                        <h3 className="title">¿Por qué nosotros?</h3>
                        <p>
                          Somos personas dedicadas a la creación y la
                          fabricación de productos de innovación en la química,
                          la mecánica y la electrónica. <br />
                          Estamos certificados por <br />
                          <span className="font-weight-bold">
                            ISO 9001:2015
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                      <div className="about-us-list">
                        <h3 className="title">¿Donde estamos ubicados?</h3>
                        <p>
                          Gracias a sus fábricas en Inglaterra, Singapur,
                          Marruecos y Panamá, nuestra empresa es capaz de
                          responder rápidamente a nuestros clientes a nivel
                          mundial.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default About;
