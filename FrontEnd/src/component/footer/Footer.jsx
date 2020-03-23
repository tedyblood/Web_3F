import React, { Component } from "react";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn
} from "react-icons/fa";
import Mailto from "react-protected-mailto";

const SocialShare = [
  { Social: <FaFacebookF />, link: "https://www.facebook.com/" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/" },
  { Social: <FaInstagram />, link: "https://www.instagram.com/" },
  { Social: <FaTwitter />, link: "https://twitter.com/" }
];
class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer className="footer-area">
          <div className="footer-wrapper">
            <div className="row align-items-end row--0">
              <div className="col-lg-6">
                <div className="footer-left">
                  <div className="inner">
                    <img
                      className="Logo_3F"
                      src="/assets/images/logo/logo.png"
                      alt="3F Latam"
                    />
                    <span>
                      Somos una empresa reconocida a nivel mundial, que pone a
                      su disposición una amplia gama de productos para prevenir
                      y actuar en todas las situaciones extremas de emergencias.
                      Contamos con personal especializado, brindando así
                      soluciones completas, comprobadas y certificadas a través
                      de organismos internacionales. Nuestros servicios se
                      extienden desde el soporte técnico, asesoría – evaluación
                      y la realización de estudios personalizados, capacitación,
                      mantenimiento y servicio post-ventas.
                    </span>

                    <Link
                      className="rn-button-style--2"
                      spy={true}
                      smooth={true}
                      offset={-200}
                      duration={500}
                      delay={500}
                      to="contacto"
                    >
                      <span>Contacto</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="footer-right" data-black-overlay="6">
                  <div className="row">
                    {/* Start Single Widget  */}
                    <div className="col-lg-6 col-sm-6 col-12">
                      <div className="footer-link">
                        <h4>Enlaces</h4>
                        <ul className="ft-link">
                          <li>
                            <Link
                              spy={true}
                              smooth={true}
                              offset={-200}
                              duration={500}
                              delay={500}
                              to="Nosotros"
                            >
                              Nosotros
                            </Link>
                          </li>
                          <li>
                            <Link
                              spy={true}
                              smooth={true}
                              offset={-200}
                              duration={500}
                              delay={500}
                              to="Espuma"
                            >
                              Productos
                            </Link>
                          </li>
                          <li>
                            <Link
                              spy={true}
                              smooth={true}
                              offset={-200}
                              duration={500}
                              delay={500}
                              to="contacto"
                            >
                              Contacto
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* End Single Widget  */}
                    {/* Start Single Widget  */}
                    <div className="col-lg-6 col-sm-6 col-12 mt_mobile--30">
                      <div className="footer-link">
                        <h4>Hablemos</h4>
                        <ul className="ft-link">
                          <li>
                            <a href="tel:0050762765105">+507 6276-5105</a>
                          </li>
                          <li>
                            <Mailto
                              email="ventas@3famericas.com"
                              headers={
                                ({ subject: "Click en correo del sitio web" },
                                { cc: "ventas@3famericas.com" })
                              }
                            />
                          </li>
                        </ul>

                        <div className="social-share-inner">
                          <ul className="social-share social-style--2 d-flex justify-content-start liststyle mt--15">
                            {SocialShare.map((val, i) => (
                              <li key={i}>
                                <a href={`${val.link}`}>{val.Social}</a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* End Single Widget  */}

                    <div className="col-lg-12">
                      <div className="copyright-text">
                        <p>Copyright © 2020 3F Latam</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
export default Footer;