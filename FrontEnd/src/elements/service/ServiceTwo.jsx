import React, { Component } from "react";
import { FiCast, FiLayers, FiUsers, FiMonitor } from "react-icons/fi";
import VideoModal from "../../component/ModalVideo";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const ServiceList = [
  {
    title: "Absorbentes de Hidrocarburos.",
    description:
      "Absorbente vegetal 100% natural, fabricado a partir del pino con varios tratamientos hasta obtener una celulosa pura, adecuada para la absorción de los líquidos hidrófobos.",
    link: "Espuma",
    img: "3.jpg",
    pdf: "GRANOSORB_FT_SP.pdf",
  },

  {
    title: "Neutralizantes de Gases Tóxicos",
    description:
      "Combinación de tensoactivos y de polímeros. Los tensoactivos están seleccionados por su alto poder espumante y su estabilidad. El polímero es muy hidrófilo y tiene sitios activos captadores de iones.",
    link: "Espuma",
    img: "2.jpg",
    pdf: "STOPAL_FT_SP.pdf",
  },
  {
    title: "Espumas convencionales",
    description:
      "3F Especialista en la creación de productos químicos, estudiados para dar la mejor respuesta a los servicios de seguridad, industriales y municipales. ",
    link: "Absorbentes",
    img: "1.jpg",
    youtube: true
  },
  // {
  //   icon: <FiMonitor />,
  //   title: "Espumas convencionales",
  //   description:
  //     "3F es especializado en la creación de productos químicos estudiados para dar la mejor respuesta a los servicios de seguridad, industriales y municipales. ",
  //   link: "Neutralizantes"
  // }
];

class ServiceTwo extends Component {
  render() {
    let title = "Productos Especiales",
      description = `3F Propone su gama de Productos Especiales, aparte del incendio, con una alta variedad de Aplicaciones Industriales
      Como complemento con la gama de las espumas, 3F tiene un Catalogo de productos especiales, que con frecuencia interesan a los mismos usuarios para aplicaciones conectadas o riesgos específicos.
      
      `,
      imgSF = "/assets/images/logo/3F_SMART-FOAM_SP-3.png";
    return (
      <React.Fragment>
        <Element name="Productos_Especiales">
          <div className="row">
            <div className=" col-12">
              <div className="section-title mt--30 mt_md--5 mt_mobile--5 mb_mobile--10 mb-5">
                <h2 className="title">{title}</h2>
                <p dangerouslySetInnerHTML={{ __html: description }}></p>
                {/* <img className="Logo_3F" src={imgSF} alt="3F Latam" /> */}
              </div>
            </div>
            <div className="col-lg-12 col-12 mt_md--50">
              <div className="row service-one-wrapper">
                {ServiceList.map((val, i) => (
                  <div className="col-lg-4 col-md-4 col-sm-4 col-12" key={i}>
                    <div className="service service__style--2">
                      <div className="Imagen__Card mb-5">
                        <img
                          src={`./assets/images/product/prodesp/${val.img}`}
                          alt=""
                          srcset=""
                        />
                      </div>
                      <div className="content">
                        <h3 className="title">{val.title}</h3>
                        <p>{val.description}</p>

                        <div className="row d-flex flex-row justify-content-around">
                          <div className="">
                            <Link
                              spy={true}
                              smooth={true}
                              offset={-200}
                              duration={500}
                              delay={500}
                              to="contacto"
                              className="rn-btn rn-btn-small rn-btn"
                            >
                              Contáctanos
                            </Link>
                          </div>
                          {val.pdf && (
                            <div className="">
                              <div className="blog-btn">
                                <a
                                  className="rn-btn rn-btn-small"
                                  href={`./assets/pdf/prodesp/${val.pdf}`}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  Ficha Técnica
                                </a>
                              </div>
                            </div>
                          )}
                          {val.youtube && (
                            <div className="">
                              
                              
                              
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <VideoModal idVideo="sJOW89_bQr4" text="¿Cómo funciona las espumas de alta expanción?" channel="youtube" />
          {/* <div className="service-btn ">
                  <a className="btn-transparent rn-btn-dark" href="#contacto">
                    <span className="text">Solicita un presupuesto</span>
                  </a>
                </div> */}
        </Element>
      </React.Fragment>
    );
  }
}
export default ServiceTwo;
