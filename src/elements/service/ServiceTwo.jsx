import React, { Component } from "react";
import { FiCast, FiLayers, FiUsers, FiMonitor } from "react-icons/fi";
// import IconSvg from "../../component/SVG/Svg";

const ServiceList = [
  {
    icon: "FOAM_01",
    title: "Espuma Ecológica",
    description:
      "La nueva tecnología examina todos los compuestos utilizados en los espumógenos y evalúa el impacto de cada uno en el medio ambiente."
  },
  {
    icon: <FiLayers />,
    title: "Absorbentes de Hidrocarburos.",
    description:
      "Absorbente vegetal 100% natural, fabricado a partir del pino con varios tratamientos hasta obtener una celulosa pura, adecuada para la absorción de los líquidos hidrófobos."
  },
  {
    icon: <FiUsers />,
    title: "Neutralizantes de Gases Tóxicos",
    description:
      "Combinación de tensoactivos y de polímeros. Los tensoactivos están seleccionados por su alto poder espumante y su estabilidad. El polímero es muy hidrófilo y tiene sitios activos captadores de iones."
  },
  {
    icon: <FiMonitor />,
    title: "Espumas convencionales",
    description:
      "3F es especializado en la creación de productos químicos estudiados para dar la mejor respuesta a los servicios de seguridad, industriales y municipales. "
  }
];

class ServiceTwo extends Component {
  render() {
    let title = "Productos",
      description = `Nos especializamos en la fabricación de productos sin flúor con sus espumógenos de clase B y sus aditivos de clase A. 
        <br/> <br/>  En 3F innovamos y lanzamos un adelanto en el mercado con su gama<br/> <b>SMART FOAM – SF </b> : Productos sin solventes`,
      imgSF = "/assets/images/logo/3F_SMART-FOAM_SP-3.png";
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-lg-4 col-12">
            <div className="section-title mt--30 mt_md--5 mt_mobile--5 mb_mobile--10">
              <h2 className="title">{title}</h2>
              <p dangerouslySetInnerHTML={{ __html: description }}></p>
              <img className="Logo_3F" src={imgSF} alt="3F Latam" />
              <div className="service-btn">
                <a className="btn-transparent rn-btn-dark" href="#contacto">
                  <span className="text">Solicita un presupuesto</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-12 mt_md--50">
            <div className="row service-one-wrapper">
              {ServiceList.map((val, i) => (
                <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
                  <a href="#contacto">
                    <div className="service service__style--2">
                      {/* <div className="icon">{val.icon}</div> */}
                      {/* <IconSvg name={val.icon} className="" /> */}
                      <div className="content">
                        <h3 className="title">{val.title}</h3>
                        <p>{val.description}</p>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default ServiceTwo;
