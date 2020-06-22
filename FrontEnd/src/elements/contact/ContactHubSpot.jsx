import React, { Component } from "react";
import axios from "axios";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import Mailto from "react-protected-mailto";
import validator from "validator";

import HubspotForm from "react-hubspot-form";

class ContactThree extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit(e) {}

  resetForm() {}

  render() {
    return (
      <Element name="contacto" className="element">
        <div className="contact-form--1">
          <div className="container">
            <div className="row row--35 align-items-start">
              <div className="col-lg-6 order-2 order-lg-1">
                <div className="section-title text-left mb--50">
                  <h2 className="title">{this.props.contactTitle}</h2>
                  <p className="description">
                    Estamos disponibles para contacto.
                    <br /> Conéctese con nosotros a través de WhatsApp:
                    <a href="tel:0050762765105">+507 6276-5105</a> <br />o
                    semail :
                    <Mailto
                      email="ventas@3famericas.com"
                      headers={
                        ({ subject: "Click en correo del sitio web" },
                        { cc: "ventas@3famericas.com" })
                      }
                    />
                  </p>
                </div>
                <div
                  className={` ${
                    this.state.vForm
                      ? "msgForm " + this.state.msgAlertColor
                      : ""
                  }`}
                >                  
                </div>
                <div className="form-wrapper">
                  <HubspotForm
                    portalId="7872238"
                    formId="ed111862-5077-41bf-a122-513d6252e9f1"
                    onSubmit={() => console.log("Submit!")}
                    onReady={(form) => console.log("Form ready!")}
                    loading={<div>Loading...</div>}
                  />
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2">
              <p>Contamos con personal especializado, brindando así soluciones completas, comprobadas y certificadas a través de organismos internacionales. Nuestros servicios se extienden desde el soporte técnico, asesoría – evaluación y la realización de estudios personalizados, capacitación, mantenimiento y servicio post-ventas.</p>
                <div className="thumbnail mb_md--30 mb_sm--30">
                  <img src={`${this.props.contactImages}`} alt="trydo" />
                </div>
                <div>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
    );
  }
}
export default ContactThree;
