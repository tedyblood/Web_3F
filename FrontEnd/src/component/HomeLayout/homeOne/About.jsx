import React, { Component } from "react";

class About extends Component {
  render() {
    let title = "¿Quiénes Somos?",
      description =
        "3F Es una Empresa dedicada a la fabricación y comercialización de una amplia gama de equipos, productos y Sistemas de Prevención y Ataque contra Incendios, nos enfocamos a la Preservación del medio ambiente, mediante la creación de productos ecológicos no contaminantes. 3F fue creda a partir del año 2.007 y cuenta con un personal altamente capacitado, con más de 20 años de experiencia en el mercado.";
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
                    alt="FireMan using 3F Product"
                  />
                </div>
              </div>

              <div className="col-lg-7 col-md-12">
                <div className="position-absolute Logo__About">
                  <img
                    className="w-25"
                    src="/assets/images/logo/logo.png"
                    alt="Logo 3F Latam"
                  />
                </div>
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
                          Nuestra principal misión es la creación y fabricación
                          de productos innovadores en la Química, la mecánica, y
                          la electrónica. <br />
                          Estamos Certificados bajo la Norma <br />
                          <span className="font-weight-bold">
                            ISO: 9001-2015
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                      <div className="about-us-list">
                        <h3 className="title">¿Dónde estamos?</h3>
                        <p>
                          Gracias a sus Fabricas en Europa, (Uk, Francia) y sus
                          sucursales en Asia; Singapour y en América Latina:
                          Panamá, Ecuador, Peru, Chile, Bolivia, Colombia y
                          Mexico, nuestra Organización es capaz de responder
                          rápidamente a nuestros clientes a nivel Mundial.
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
