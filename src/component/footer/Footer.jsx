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
                      Somos es una empresa dirigida por personas de experiencia
                      demostrada por su conocimiento en la lucha contra
                      incendios desde hace más de 20 años.
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
                            <a href="mailto:admin@example.com">
                              admin@example.com
                            </a>
                          </li>
                          <li>
                            <a href="mailto:hr@example.com">hr@example.com</a>
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
