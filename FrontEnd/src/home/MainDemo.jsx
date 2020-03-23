import React, { Component, Fragment } from "react";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";

import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

import SliderOne from "../component/slider/SliderOne";
import ServiceTwo from "../elements/service/ServiceTwo";
import CounterOne from "../elements/counters/CounterOne";
import Testimonial from "../elements/Testimonial";
import About from "../component/HomeLayout/homeOne/About";
import Portfolio from "../component/HomeLayout/homeOne/Portfolio";
import BrandTwo from "../elements/BrandTwo";
import Helmet from "../component/common/Helmet";
import Contacto from "../elements/contact/ContactThree";
import WA from "../component/whatsapp/Whatsapp";

//Importacion de Items
import FAS from "../elements/Productos/FAS";
import CTD from "../elements/Productos/CTD";
import FIREMIKS from "../elements/Productos/FIREMIKS";
import RCY from "../elements/Productos/RCY";
import SCORPE from "../elements/Productos/SCORPE";
import POK from "../elements/Productos/POK";
import Ruth_Lee from "../elements/Productos/Ruth_Lee";
import EQUIPOSESPUMA from "../elements/Productos/EQUIPOSESPUMA";

import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

class MainDemo extends Component {
  render() {
    // const FAS = FAS.slice(0, 3);

    return (
      <Fragment>
        <Helmet pageTitle="3F America" />

        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />

        {/* Start Slider Area   */}
        <div className="slider-wrapper">
          <SliderOne />
        </div>
        {/* End Slider Area   */}

        {/* Start About Area */}
        <div className="about-area about-position-top pb--120">
          <About />
        </div>
        {/* End About Area */}

        <div className="service-area ptb--80  ">
          <div className="container">
            <ServiceTwo />
          </div>
        </div>
        {/* Start FAMILIA Area */}
        <div className="rn-blog-area mb-dec--30">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-12">
                <div className="section-title text-left">
                  <Element name="fas" />
                  <h2>
                    Equipos y Sistemas para la prevención, la lucha contra
                    incendios y el rescate a victimas de desastres Naturales
                  </h2>
                  <p>
                    3F ha formado una alianza estratégica con varias empresas de
                    Europa con el fin de constituir un portafolio de equipos
                    técnicos enfocados a las necesidades enfrentadas por los
                    profesionales dedicados al rescate de victimas, a la
                    prevención y extinción de los incendios de toda clase de
                    combustible.
                  </p>
                  <p>
                    Ofrecemos un Catalogo con una gran diversidad de equipos;
                    dosificadores, detectores, bombas contra Incendios e
                    inundación, herramienta de extracción, ventiladores,
                    pitones, sistemas de extinción, maniquíes de capacitación,
                    barreras de contención de derrames, carpas, y un sin fin de
                    equipos especializados.
                  </p>
                  <p>
                    Cada uno de nuestros equipos ofertados tienen un concepto
                    único; fabricados por los mejores especialistas, alcanzando
                    así los mas exigentes niveles de Calidad, de robustez y de
                    eficacia aspectos que nos diferencian de la competencia,
                    siendo la Prevención, la Preservación del Medio Ambiente y
                    el Rescate nuestro principal eslogan cuando se trata
                    proteger y Salvar Vidas{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        {/* End FAMILIA Area */}
        {/* Start FAMILIA Area */}
        <div className="rn-blog-area pt--120 bg_color--1 mb-dec--30">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                <div className="section-title text-left">
                  <Element name="fas" />
                  <h3>FAS</h3>
                  <h2>Fire Attack System</h2>
                  <p>
                    Nuestros sistemas están concebidos para ofrecer una
                    respuesta inmediata para el ataque de los fuegos. Para
                    conseguir a esto, nuestros ingenieros utilizan la tecnología
                    Alta Presión para un mejor uso del agua sobre el fuego.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                <img src="./assets/images/logo/fas.png" className="w-100 p-3" />
              </div>
            </div>
            <div className="row mt--60 mt_sm--40">
              {FAS.map((value, i) => (
                <div className="col-lg-3 col-md-6 col-12" key={i}>
                  <div className="blog blog-style--1">
                    <div className="thumbnail">
                      <Link
                        spy={true}
                        smooth={true}
                        offset={-200}
                        duration={500}
                        delay={500}
                        to="contacto"
                      >
                        <img
                          className="w-100"
                          src={`/assets/images/blog/blog-${value.images}.jpg`}
                          alt="Blog Images"
                        />
                      </Link>
                    </div>
                    <div className="content">
                      <p className="blogtype">{value.category}</p>
                      <h4 className="title">
                        <Link
                          spy={true}
                          smooth={true}
                          offset={-200}
                          duration={500}
                          delay={500}
                          to="contacto"
                        >
                          {value.title}
                        </Link>
                      </h4>
                      <div className="blog-btn">
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
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End FAMILIA Area */}
        {/* Start FAMILIA Area */}
        <div className="rn-blog-area pt--120 bg_color--1 mb-dec--30">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                <div className="section-title text-left">
                  <Element name="ctd" />
                  <h3>CTD</h3>
                  <h2>Sistema de Dosificación Automáticos</h2>
                  <p>
                    CTD esta reconocido por su liderazgo tecnológico. El
                    concepto se apoya en el automatismo y el control preciso de
                    la dosificación con la ayuda de un panel de control sencillo
                    e intuitivo. El sistema esta concebido para el uso de los
                    bomberos y resiste a las condiciones extremas. CTD es un
                    producto de excelente calidad comprobada y comprobable.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                <img src="./assets/images/logo/ctd.png" className="w-100 p-3" />
              </div>
            </div>
            <div className="row mt--60 mt_sm--40">
              {CTD.map((value, i) => (
                <div className="col-lg-3 col-md-6 col-12" key={i}>
                  <div className="blog blog-style--1">
                    <div className="thumbnail">
                      <Link
                        spy={true}
                        smooth={true}
                        offset={-200}
                        duration={500}
                        delay={500}
                        to="contacto"
                      >
                        <img
                          className="w-100"
                          src={`/assets/images/blog/blog-${value.images}.jpg`}
                          alt="Blog Images"
                        />
                      </Link>
                    </div>
                    <div className="content">
                      <p className="blogtype">{value.category}</p>
                      <h4 className="title">
                        <Link
                          spy={true}
                          smooth={true}
                          offset={-200}
                          duration={500}
                          delay={500}
                          to="contacto"
                        >
                          {value.title}
                        </Link>
                      </h4>
                      <div className="blog-btn">
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
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End FAMILIA Area */}
        {/* Start FAMILIA Area */}
        <div className="rn-blog-area pt--120 bg_color--1 mb-dec--30">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                <div className="section-title text-left">
                  <Element name="FIREMIKS" />
                  <h3>FIREMIKS</h3>
                  <h2>Sistema mecánico de dosificación.</h2>
                  <p>
                    Los Sistemas FIREMIKS dosifican en proporción el flujo de
                    agua sin necesitar fuente de energía externa, en un rango
                    amplio de caudales y presiones. Son precisos y robustos.
                    Existen varios modelos para instalaciones fijas y para uso
                    móvil.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                <img
                  src="./assets/images/logo/firemiks.png"
                  className="w-100 p-3"
                />
              </div>
            </div>
            <div className="row mt--60 mt_sm--40">
              {FIREMIKS.map((value, i) => (
                <div className="col-lg-3 col-md-6 col-12" key={i}>
                  <div className="blog blog-style--1">
                    <div className="thumbnail">
                      <Link
                        spy={true}
                        smooth={true}
                        offset={-200}
                        duration={500}
                        delay={500}
                        to="contacto"
                      >
                        <img
                          className="w-100"
                          src={`/assets/images/blog/blog-${value.images}.jpg`}
                          alt="Blog Images"
                        />
                      </Link>
                    </div>
                    <div className="content">
                      <p className="blogtype">{value.category}</p>
                      <h4 className="title">
                        <Link
                          spy={true}
                          smooth={true}
                          offset={-200}
                          duration={500}
                          delay={500}
                          to="contacto"
                        >
                          {value.title}
                        </Link>
                      </h4>
                      <div className="blog-btn">
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
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End FAMILIA Area */}
        {/* Start FAMILIA Area */}
        <div className="rn-blog-area pt--120 bg_color--1 mb-dec--30">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                <div className="section-title text-left">
                  <Element name="rcy" />
                  <h3>RCY</h3>
                  <h2>Especialista en textiles técnicos.</h2>
                  <p>
                    RCY realiza la transformación del textil técnico para varias
                    aplicaciones. Posee clientes exigentes y prestigiosos, como
                    la Marina Nacional Francesa, la Armada Suiza, la Armada
                    Española o el Bundeswehr Alemán.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                <img src="./assets/images/logo/rcy.png" className="w-100 p-3" />
              </div>
            </div>
            <div className="row mt--60 mt_sm--40">
              {RCY.map((value, i) => (
                <div className="col-lg-3 col-md-6 col-12" key={i}>
                  <div className="blog blog-style--1">
                    <div className="thumbnail">
                      <Link
                        spy={true}
                        smooth={true}
                        offset={-200}
                        duration={500}
                        delay={500}
                        to="contacto"
                      >
                        <img
                          className="w-100"
                          src={`/assets/images/blog/blog-${value.images}.jpg`}
                          alt="Blog Images"
                        />
                      </Link>
                    </div>
                    <div className="content">
                      <p className="blogtype">{value.category}</p>
                      <h4 className="title">
                        <Link
                          spy={true}
                          smooth={true}
                          offset={-200}
                          duration={500}
                          delay={500}
                          to="contacto"
                        >
                          {value.title}
                        </Link>
                      </h4>
                      <div className="blog-btn">
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
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End FAMILIA Area */}
        {/* Start FAMILIA Area */}
        <div className="rn-blog-area pt--120 bg_color--1 mb-dec--30">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                <div className="section-title text-left">
                  <Element name="scorpe" />
                  <h3>Scorpe</h3>
                  <h2>Herramientas y equipos de Rescate para Bomberos.</h2>
                  <p>
                    Herramientas de ultima generación, altamente portátiles y
                    confiables. <br />
                    Utilizados por equipos de rescate en el mundo.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                <img
                  src="./assets/images/logo/scorpe.png"
                  className="w-100 p-3"
                />
              </div>
              <div className="row mt--60 mt_sm--40">
                {SCORPE.map((value, i) => (
                  <div className="col-lg-3 col-md-6 col-12" key={i}>
                    <div className="blog blog-style--1">
                      <div className="thumbnail">
                        <Link
                          spy={true}
                          smooth={true}
                          offset={-200}
                          duration={500}
                          delay={500}
                          to="contacto"
                        >
                          <img
                            className="w-100"
                            src={`/assets/images/blog/blog-${value.images}.jpg`}
                            alt="Blog Images"
                          />
                        </Link>
                      </div>
                      <div className="content">
                        <p className="blogtype">{value.category}</p>
                        <h4 className="title">
                          <Link
                            spy={true}
                            smooth={true}
                            offset={-200}
                            duration={500}
                            delay={500}
                            to="contacto"
                          >
                            {value.title}
                          </Link>
                        </h4>
                        <div className="blog-btn">
                          <Link
                            spy={true}
                            smooth={true}
                            offset={-200}
                            duration={500}
                            delay={500}
                            to="contacto"
                            className="rn-btn"
                          >
                            Leer Mas
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* End FAMILIA Area */}
        {/* Start FAMILIA Area */}
        <div className="rn-blog-area pt--120 bg_color--1 mb-dec--30">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                <div className="section-title text-left">
                  <Element name="pok" />
                  <h3>POK</h3>
                  <h2>
                    Boquillas, Monitores y Equipos contra incendios para uso
                    bomberil.
                  </h2>
                  <p>
                    POK es un fabricante francés de una amplia gama de
                    boquillas, monitores desde 250 GPM hasta 6000 GPM y equipos
                    de espuma, con un amplio catalogo de herramientas para el
                    uso Bomberil. Adicional una línea completa de accesorios;
                    acoples, bifurcadores, válvulas… Presenta su nueva
                    tecnología llamado “ JUPITER”, el cual es un monitor montado
                    sobre un robot para atacar fuegos sin exponer la seguridad
                    de los bomberos, en particular en zonas explosivas.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                <img src="./assets/images/logo/pok.png" className="w-100 p-3" />
              </div>
              <div className="row mt--60 mt_sm--40">
                {POK.map((value, i) => (
                  <div className="col-lg-3 col-md-6 col-12" key={i}>
                    <div className="blog blog-style--1">
                      <div className="thumbnail">
                        <Link
                          spy={true}
                          smooth={true}
                          offset={-200}
                          duration={500}
                          delay={500}
                          to="contacto"
                        >
                          <img
                            className="w-100"
                            src={`/assets/images/blog/blog-${value.images}.jpg`}
                            alt="Blog Images"
                          />
                        </Link>
                      </div>
                      <div className="content">
                        <p className="blogtype">{value.category}</p>
                        <h4 className="title">
                          <Link
                            spy={true}
                            smooth={true}
                            offset={-200}
                            duration={500}
                            delay={500}
                            to="contacto"
                          >
                            {value.title}
                          </Link>
                        </h4>
                        <div className="blog-btn">
                          <Link
                            spy={true}
                            smooth={true}
                            offset={-200}
                            duration={500}
                            delay={500}
                            to="contacto"
                            className="rn-btn"
                          >
                            Leer Mas
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* End FAMILIA Area */}
        {/* Start FAMILIA Area */}
        <div className="rn-blog-area pt--120 bg_color--1 mb-dec--30">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                <div className="section-title text-left">
                  <Element name="rl" />
                  <h3>Ruth Lee</h3>
                  <h2>
                    Maniquíes de formación para profesionales de rescate.{" "}
                  </h2>
                  <p>
                    Ruth Lee es un líder mundial de maniquíes y ayudas de
                    entrenamiento realistas para rescatar a expertos en
                    capacitación en todo el mundo.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                <img src="./assets/images/logo/rl.png" className="w-100 p-3" />
              </div>
              <div className="row mt--60 mt_sm--40">
                {Ruth_Lee.map((value, i) => (
                  <div className="col-lg-3 col-md-6 col-12" key={i}>
                    <div className="blog blog-style--1">
                      <div className="thumbnail">
                        <Link
                          spy={true}
                          smooth={true}
                          offset={-200}
                          duration={500}
                          delay={500}
                          to="contacto"
                        >
                          <img
                            className="w-100"
                            src={`/assets/images/blog/blog-${value.images}.jpg`}
                            alt="Blog Images"
                          />
                        </Link>
                      </div>
                      <div className="content">
                        <p className="blogtype">{value.category}</p>
                        <h4 className="title">
                          <Link
                            spy={true}
                            smooth={true}
                            offset={-200}
                            duration={500}
                            delay={500}
                            to="contacto"
                          >
                            {value.title}
                          </Link>
                        </h4>
                        <div className="blog-btn">
                          <Link
                            spy={true}
                            smooth={true}
                            offset={-200}
                            duration={500}
                            delay={500}
                            to="contacto"
                            className="rn-btn"
                          >
                            Leer Mas
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* End FAMILIA Area */}

        {/* Start Brand Area */}
        <div className="rn-brand-area brand-separation bg_color--5 pb--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <BrandTwo />
              </div>
            </div>
          </div>
        </div>
        {/* End Brand Area */}
        {/* Start Brand Area */}
        <div
          id="contacto"
          className="rn-brand-area brand-separation bg_color--2 pb--120"
        >
          <div className="container">
            <div className="col-lg-10 col-md-12 col-sm-12 col-12">
              <div className="section-title text-left">
                <h2>Hablemos</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <Contacto contactImages="/assets/images/about/about-3.jpg" />
              </div>
            </div>
          </div>
        </div>
        {/* End Brand Area */}

        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}
        <WA />
        <Footer />
      </Fragment>
    );
  }
}
export default MainDemo;
