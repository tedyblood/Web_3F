import React, { Component } from "react";
import { FiCast, FiLayers, FiUsers, FiMonitor } from "react-icons/fi";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

const ServiceList = [
  {
    icon: "FOAM_01",
    title: "Absorbentes de Hidrocarburos.",
    description:
      "Absorbente vegetal 100% natural, fabricado a partir del pino con varios tratamientos hasta obtener una celulosa pura, adecuada para la absorción de los líquidos hidrófobos.",
    link: "Espuma"
  },

  {
    icon: <FiLayers />,
    title: "Neutralizantes de Gases Tóxicos",
    description:
      "Combinación de tensoactivos y de polímeros. Los tensoactivos están seleccionados por su alto poder espumante y su estabilidad. El polímero es muy hidrófilo y tiene sitios activos captadores de iones.",
    link: "Espuma"
  },
  {
    icon: <FiUsers />,
    title: "Espumas convencionales",
    description:
      "3F Especialista en la creación de productos químicos, estudiados para dar la mejor respuesta a los servicios de seguridad, industriales y municipales. ",
    link: "Absorbentes"
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
      description = `Nos especializamos en la fabricación de productos sin flúor con sus espumógenos de clase B y sus aditivos de clase A. 
       En 3F innovamos y lanzamos un adelanto en el mercado con su gama.`,
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
                       <img src="https://via.placeholder.com/320x250?text=320x250" alt="" srcset=""/>
                     </div>
                      <div className="content">
                        <h3 className="title">{val.title}</h3>
                        <p>{val.description}</p>
                        <Link
                          spy={true}
                          smooth={true}
                          offset={-200}
                          duration={500}
                          delay={500}
                          to="contacto"
                          className="rn-btn"
                        >
                          Contáctanos
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
