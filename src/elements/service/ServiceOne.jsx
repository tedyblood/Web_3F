import React, { Component } from "react";

import IconSvg from "../../component/SVG/Svg";
import { Transition, animated } from "react-spring/renderprops";

const ServiceList = [
  {
    icon: "ECO",
    title: "Espuma Ecologica",
    description:
      "Ofrecemos una gama completa de espumógenos y aditivos contra incendios respetuosos con el medio ambiente."
  },
  {
    icon: "ROTO",
    title: "Sin Flúor",
    description: `Espuma sin PFCs. Los PFCs son indestructibles y se quedan en el medio ambiente para SIEMPRE,
      `
  },
  {
    icon: "AGUA",
    title: "Sin Solvente",
    description:
      "Espuma sin PBT. Los PBT son compuestos persistentes, Bio acumulativo, Tóxico."
  }
];

class ServiceOne extends Component {
  state = { show: true };
  toggle = e => this.setState(state => ({ show: !state.show }));
  render() {
    return (
      <React.Fragment>
        <div className="row">
          {ServiceList.map((val, i) => (
            <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
              <div className="service service__style--1">
                <div className="icon">
                  <IconSvg name={val.icon} className="" />
                </div>
                <div className="content">
                  <h4 className="title">{val.title}</h4>
                  <p>{val.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
export default ServiceOne;
