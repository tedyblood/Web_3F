import React, { Component } from "react";
import axios from "axios";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";
import Mailto from "react-protected-mailto";

import isEmail from "validator/lib/isEmail";
import validator from "validator";

class ContactThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vForm: false,
      msgAlertColor: "",
      msgAlert: "",
      rnName: "",
      rnEmail: "",
      rnSubject: "",
      rnMessage: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.leerAlertas = this.leerAlertas.bind(this);
  }

  leerAlertas() {
    return this.state.msgAlert;
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ vForm: true });

    if (
      // Inicio de verificador de campos vacios
      this.state.rnName === "" ||
      this.state.rnEmail === "" ||
      this.state.rnSubject === "" ||
      this.state.rnMessage === ""
    ) {
      console.log("Faltan campos por llenar");
      this.setState({
        msgAlert: "Todos los campos son obligatorios.",
        msgAlertColor: "msForm--fail "
      });
    } else if (validator.isEmail(this.state.rnEmail)) {
      this.setState({
        msgAlert: "Enviando su Mensaje",
        msgAlertColor: "msForm--process"
      });
      axios
        .post("http://localhost:3002/send", {
          data: this.state
        })
        .then(response => {
          if (response.data.status === "success") {
            // alert("Message Sent.");
            this.setState({
              msgAlert: "Gracias. Recibimos su mensaje.",
              msgAlertColor: "msForm--sucess "
            });
            this.resetForm();
          } else if (response.data.status === "fail") {
            // alert("Message failed to send.");
            this.setState({
              msgAlert:
                "Ups, tenemos un error al realizar el envío. Por favor intente comunicarse al ventas@3famericas.com",
              msgAlertColor: "msForm--fail "
            });
          }
        });
    } else {
      this.setState({ msgAlert: "El correo no es válido" });
      console.log("El correo no es válido");
      this.setState({
        msgAlert: "Ingrese un email Válido",
        msgAlertColor: "msForm--fail "
      });
    } // Fin de  verificador de campos
  }

  resetForm() {
    this.setState({ rnName: "", rnEmail: "", rnSubject: "", rnMessage: "" });
  }

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
                  {this.leerAlertas()}
                </div>
                <div className="form-wrapper">
                  <form onSubmit={this.handleSubmit.bind(this)}>
                    <label htmlFor="item01">
                      <input
                        type="text"
                        name="name"
                        id="item01"
                        value={this.state.rnName}
                        onChange={e => {
                          this.setState({ rnName: e.target.value });
                        }}
                        placeholder="Nombre *"
                      />
                    </label>

                    <label htmlFor="item02">
                      <input
                        type="text"
                        name="email"
                        id="item02"
                        value={this.state.rnEmail}
                        onChange={e => {
                          this.setState({ rnEmail: e.target.value });
                        }}
                        placeholder="Email *"
                      />
                    </label>

                    <label htmlFor="item03">
                      <input
                        type="text"
                        name="subject"
                        id="item03"
                        value={this.state.rnSubject}
                        onChange={e => {
                          this.setState({ rnSubject: e.target.value });
                        }}
                        placeholder="Asunto"
                      />
                    </label>
                    <label htmlFor="item04">
                      <textarea
                        type="text"
                        id="item04"
                        name="message"
                        value={this.state.rnMessage}
                        onChange={e => {
                          this.setState({ rnMessage: e.target.value });
                        }}
                        placeholder="Mensaje"
                      />
                    </label>
                    <button
                      className="rn-button-style--2 btn-solid"
                      type="submit"
                      value="submit"
                      name="submit"
                      id="mc-embedded-subscribe"
                    >
                      Enviar
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2">
                <div className="thumbnail mb_md--30 mb_sm--30">
                  <img src={`${this.props.contactImages}`} alt="trydo" />
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
