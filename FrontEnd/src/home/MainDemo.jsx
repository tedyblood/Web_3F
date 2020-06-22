import React, { Component, Fragment } from "react";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";

import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

import SliderOne from "../component/slider/SliderOne";
import ServiceTwo from "../elements/service/ServiceTwo";
import About from "../component/HomeLayout/homeOne/About";
import BrandTwo from "../elements/BrandTwo";
import Helmet from "../component/common/Helmet";
import Contacto from "../elements/contact/ContactHubSpot";
import WA from "../component/whatsapp/Whatsapp";
import VideoModal from "../component/ModalVideo";
import LoadItems from "../component/loadITems/LoadItem";

//Importacion de Items
import FAS from "../elements/Productos/FAS";
import CTD from "../elements/Productos/CTD";
import FIREMIKS from "../elements/Productos/FIREMIKS";
import RCY from "../elements/Productos/RCY";
import SCORPE from "../elements/Productos/SCORPE";
import POK from "../elements/Productos/POK";
import Ruth_Lee from "../elements/Productos/Ruth_Lee";
import EQUIPOSESPUMA from "../elements/Productos/EQUIPOSESPUMA";
import covid from "../elements/Productos/covid";
import SF from "../elements/Productos/sf";

import HubspotForm from "react-hubspot-form";
import ModalVideo from "react-modal-video";

import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { FaVenusDouble } from "react-icons/fa";

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
        {/* Start FAMILIA Area */}
        <div className="rn-blog-area pt--120 bg_color--1 mb-dec--30 bg-img-icon">
          <div className="container">
            <div className="row align-items-end d-flex   justify-content-center align-items-center">
              <div className="col-lg-10 col-md-12 col-sm-12 col-12">
                <div className="section-title text-left">
                  <Element name="covid" />
                  <span className="Subtitulo">Nuestras Espumas Verdes</span>
                  <h2>Soluciones Espumantes Ecologicas</h2>
                  <p>
                    3F ofrece al mundo una gama completa de espumógenos y
                    aditivos contra incendios.
                  </p>
                  <h3>Bienvenidos a las SMART FOAMS ®</h3>
                  <p>
                    La espuma Verde - Sin Fluor y Sin Solventes - es Totalmente
                    respetuosa al medio ambiente y sin toxicidad para el ser
                    humano La nueva Tecnología examina todos los compuestos
                    utilizados en los espumógenos y evalúa el impacto de cada
                    uno en el medio ambiente.
                  </p>
                  <p>
                    La respuesta dada para remplazar los compuestos químicos se
                    encuentra en la combinación sinérgica de unos tensoactivos y
                    polímeros con base natural renovable para ofrecer una gama
                    completa de productos contra incendios.
                  </p>
                  <h4>Espumógenos</h4>
                  <p>
                    La gama tiene mas de 30 referencias distintas e incluye
                    todos los tipos, clase A, sintéticos, AFFF y anti alcoholes,
                    mas una gama especial de productos ecológicos. Estas espumas
                    ''verdes'' combinan la eficacia extintora y la demanda
                    creciente para productos cumpliendo con las mas altas
                    exigencias de nuestros Clientes, ofreciendo productos
                    eficaces garantizando la mejor protección contra los
                    incendios.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-2 col-md-12 col-sm-12 col-12 "
                // style={{ position: "relative", top: "-260px", right: "0" }}
              >
                <img src="./assets/images/logo/3F_SMART-FOAM_SP-3.png" />
              </div>
            </div>
            <LoadItems data={SF}/>            
          </div>
        </div>
        {/* End FAMILIA Area */}

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
                    Equipos y Sistemas para la Prevención, la lucha contra
                    Incendios y Rescate de victimas en desastres Naturales.
                  </h2>
                  <p>
                    3F ha creado una alianza estratégica con varias empresas de
                    Europa con el fin de constituir un portafolio de equipos
                    técnicos enfocados a las necesidades enfrentadas por los
                    profesionales, dedicados al rescate de victimas, a la
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
                    Cada uno de nuestros equipos tienen un concepto único;
                    fabricados por los mejores especialistas, alcanzando así los
                    mas exigentes niveles de Calidad, de robustez y de eficacia,
                    aspectos que nos diferencian de la competencia, siendo la
                    Prevención, la Preservación del Medio Ambiente y el Rescate
                    nuestro principal eslogan cuando se trata proteger y Salvar
                    Vidas
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
              <div className="col-lg-10 col-md-12 col-sm-12 col-12">
                <div className="section-title text-left">
                  <Element name="covid" />
                  <span className="Subtitulo">A BASE DE OZONO</span>
                  <h2>EQUIPOS CONTRA EL COVID - 19</h2>
                  <p>
                    Para el Tratamiento de Desinfección y descontaminación
                    Ambiental. Los cuales están especialmente fabricados para
                    purificar el ambiente en sus 5 modelos de uso personal,
                    individual o Industrial
                  </p>
                  <p>
                    Ofrecemos una gama de Generadores de Ozono, para
                    tratamientos de Choque Ambiental, los cuales funciona de
                    forma autónoma no necesitan de otro producto adicional para
                    su funcionamiento.{" "}
                  </p>
                  <p>
                    El Ozono se obtiene al someter el oxigeno a descargas
                    eléctricas controladas, por tanto el ozono es un gas
                    oxidante muy potente, más eficaz que el cloro. Destruye
                    bacterias, virus, hongos, y mohos rápidamente sin dejar
                    residuos. Cada modelo genera la cantidad de Ozono adecuado
                    de acuerdo a las dimensiones en m3 del lugar a desinfectar,
                    para así eliminar los microorganismos, purificar el ambiente
                    y tener un aire puro y libre de olores.
                  </p>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-12 d-lg-flex">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                      <h5>Aplicaciones SAB-GO-MINI:</h5>
                      <ul>
                        <li>Ideal para espacios pequeños; </li>
                        <li>Oficinas, </li>
                        <li>Consultorios médicos, </li>
                        <li>Bufetes, </li>
                        <li>Vehículos, </li>
                        <li>Habitaciones, </li>
                        <li>Hogar, </li>
                        <li>Etc.</li>
                      </ul>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                      <h5>Aplicaciones para el resto de los modelos:</h5>
                      <ul>
                        <li>Hoteles</li>
                        <li>Cines</li>
                        <li>Restaurantes</li>
                        <li>Salas de Reunión</li>
                        <li>Tiendas</li>
                        <li>Centros Comerciales</li>
                        <li>Supermercados</li>
                        <li>Etc.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-2 col-md-12 col-sm-12 col-12 "
                style={{ position: "relative", top: "-260px", right: "0" }}
              >
                <img
                  src="./assets/images/logo/covid.png"
                  className="w-100 p-3"
                />
              </div>
            </div>
            <LoadItems data={covid}/>
            
          </div>
        </div>
        {/* End FAMILIA Area */}
        {/* Start FAMILIA Area */}
        <div className="rn-blog-area pt--120 bg_color--1 mb-dec--30">
          <div className="container">
            <div className="row align-items-end d-flex justify-content-center align-items-center">
              <div className="col-lg-9 col-12">
                <Element name="fas" />
                <span className="Subtitulo">FAS</span>
                <h2>Fire Attack System</h2>
                {/* <img src="./assets/images/logo/fas.png" className="w-25 p-3" style={{"float": "left","margin": "10px"}} /> */}
                <p>
                  Nuestros Sistemas están concebidos para ofrecer una respuesta
                  inmediata para el ataque de los fuegos. Para conseguir esto,
                  nuestros Ingenieros utilizan la tecnología Alta Presión para
                  un mejor uso del agua sobre el fuego.
                </p>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12 col-12 d-flex flex-column justify-content-center align-items-center">
                <img src="./assets/images/logo/fas.png" className="w-100 p-3" />
                <VideoModal idVideo="Gg8NCKSqE2w" channel="youtube" />
              </div>
            </div>
            <div className="mt-5">
              <ol className="TwoCol">
                <li>
                  <h5>Ataque inmediato para los bomberos</h5> Con fuegos con
                  velocidad de esparcimiento alta.
                </li>
                <li>
                  <h5>Ideal para los Fuegos Forestakles</h5> Esta concebido para
                  entrar en un vehículo pick-up 4x4 o una camioneta, son
                  unidades mas pequeños que los camiones de bomberos, por tanto
                  pueden entrar en zonas de acceso dificil o de peligro.
                </li>
                <li>
                  <h5>Protección de eventos públicos; </h5> Como fiestas
                  competencias, deporte, ferias...
                </li>
                <li>
                  <h5>Minas</h5> Para tener una respuesta eficaz en zonas
                  aisladas sin bomberos a proximidad inmediata.
                </li>
              </ol>
              <p>
                Una de las principales Ventajas de nuestros Sistemas es que
                ofrece una excelente protección contra el fuego, para cualquier
                situación y con <b>muy poco uso del agua.</b>
              </p>
              <p>
                El equipo puede ser dotado con distintas lanzas para tener la
                mejor combinación según el fuego: lanza doble jet o spray,
                baja/alta presión, espuma, lanza de perforación, lanza de
                penetración.
              </p>
            </div>
            <LoadItems data={FAS}/> 
            
          </div>
        </div>
        {/* End FAMILIA Area */}
        {/* Start FAMILIA Area */}
        <div className="rn-blog-area pt--120 bg_color--1 mb-dec--30">
          <div className="container">
            <div className="row align-items-end d-flex justify-content-center align-items-center">
              <div className="col-lg-9 col-12">
                <Element name="ctd" />
                <span className="Subtitulo">CTD</span>
                <h2>Sistema de Dosificación Automáticos Electrónicos</h2>
                <p>
                  CTD es reconocido por su liderazgo Tecnológico. El concepto se
                  apoya en el automatización y el control preciso de la
                  dosificación de la espuma con la ayuda de un panel de control
                  sencillo e intuitivo. El sistema esta concebido para el uso de
                  los bomberos y resiste a las condiciones extremas. CTD es un
                  producto de excelente calidad comprobada y comprobable.
                </p>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12 col-12 d-flex flex-column justify-content-center align-items-center">
                <img src="./assets/images/logo/ctd.png" className="w-100 p-3" />
                <VideoModal idVideo="Gg8NCKSqE2w" channel="youtube" />
              </div>
            </div>

            <div className="mt-5">
              <p className="mt-2 text-left">
                <mark className="Marca">
                  Los <strong>Sistemas de Dosificación CTD</strong> son únicos
                  en el mercado, ofrecen ventajas que demuestran que son
                  sistemas inigualables:
                </mark>
              </p>
              <ol className="TwoCol TwoCol__Eigh__Iems">
                <li>
                  <h5>No perdida de presión</h5> Permite ubicar el sistema y los
                  camiones fuera de la zona de peligro.
                </li>
                <li>
                  <h5>Fiabilidad</h5> Más de 1000 unidades vendidas en los
                  últimos 10 años y NUNCA una fue remplazada o eliminada.
                </li>
                <li>
                  <h5>Sencillez de empleo</h5>Capacitación tan sencilla que
                  cualquier persona podría utilizarles con menos de 30 minutos
                  de entrenamiento.
                </li>
                <li>
                  <h5>Presión</h5> Funcionamiento entre 2 y 40 Bars – 30 a 60
                  psi.
                </li>
                <li>
                  <h5>Caudal</h5> Disponible en un rango de 30 hasta 20,000 l/mn
                  – 8 hasta 5500 GPM.
                </li>
                <li>
                  <h5>Rapidez</h5> El sistema bombea y elige automáticamente la
                  espuma y el porcentaje de empleo, y la inyecta inmediatamente.
                </li>
                <li>
                  <h5>Precisión</h5> El sistema permite de dosificar con una
                  precisión de 0.1% en toda la gama de presión y de caudal.
                </li>
                <li>
                  <h5>Inteligencia</h5> Todas las operaciones se registran y
                  tienen acceso por una conexión BlueTooth.
                </li>
              </ol>
            </div>
            <LoadItems data={CTD}/>             
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
                  <span className="Subtitulo">FIREMIKS</span>
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
                <VideoModal idVideo="D6ntIb2edMw" channel="youtube" />
              </div>
            </div>
            <div className="row align-items-end">
              <div className="col-12 mt-3 section-title">
                <h4>
                  La idea básica del sistema FIREMISK :{" "}
                  <strong>! Sencillez !</strong>
                </h4>
                <p>
                  Un sistema mecánico funcionando con el caudal de agua – SIN
                  necesitar energía externa. La proporción debe de ser
                  automática, o sea que el Sistema ajusta la inyección según el
                  caudal y la presión, sin requerir calibración.
                </p>

                <p className="mt-2 text-left">
                  <mark className="Marca">
                    El dosificador amigo del usuario
                  </mark>
                </p>
                <ol className="TwoCol ">
                  <li>
                    <h5>FACIL DE INSTALAR</h5> Por su sistema compacto impulsado
                    únicamente por la corriente de agua. Sin necesidad adicional
                    de componentes o energía externa.
                  </li>
                  <li>
                    <h5>FÁCIL DE USAR </h5> Por su sistema mécanico de flujo
                    auto-regulador con un amplio intérvalo de flujo y presión.
                    Sin necesidad de complicaciones buscando el equilibrio o
                    calibrado de la presión.
                  </li>
                  <li>
                    <h5>FÁCIL DE MANTENER Y ENSAYAR</h5> Prueba economizadora y
                    ambientalmente aprobada gracias a la válvula dosificadora de
                    retención del concentrado de medios opcional. Sin necesidad
                    de consumir medios de extinción durante los ensayos o el
                    mantenimiento.{" "}
                  </li>
                </ol>
              </div>
            </div>
            <LoadItems data={FIREMIKS}/>            
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
                  <span className="Subtitulo">RCY</span>
                  <h2>Especialista en textiles técnicos.</h2>
                  <p>
                    Especializado en la protección del medio ambiente, del
                    Hombre y de los bienes, RCY está reconocida a nivel
                    internacional como socios imprescindibles. El área de
                    producción tiene una{" "}
                    <strong>tecnología de última generación</strong> para la
                    fabricación de los productos.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                <img src="./assets/images/logo/rcy.png" className="w-100 p-3" />
                <VideoModal idVideo="Gg8NCKSqE2w" channel="youtube" />
              </div>
            </div>
            <div className="row">
              <div className="col-12 section-title mt-2">
                <p>
                  <strong>RCY</strong> Es reconocido debido a la calidad de sus
                  productos, realiza la transformación del textil técnico para
                  varias aplicaciones, su experiencia, su reactividad y su
                  servicio post-venta. Posee clientes exigentes y prestigiosos,
                  como la
                  <strong> Marina Nacional Francesa</strong>,{" "}
                  <strong>La Armada Suiza</strong>,{" "}
                  <strong>la Armada Española </strong>o el{" "}
                  <strong>Bundeswehr Alemán</strong>.
                </p>
                <p className="mt-5 mb-5 text-left">
                  <mark className="Marca">
                    Los productos RCY se ofrecen en 4 familias distintas
                  </mark>
                </p>

                <ol className="TwoCol">
                  <li>
                    <h5>LAS BARRERAS ANTI CONTAMINACION</h5> RCY propone una
                    gama de barreras según la zona a proteger. Es muy importante
                    efectuar una correcta identificación de la zona para elegir
                    la barrera adecuada. RCY ofrece también equipos asociados
                    como las bombas, las desnatadoras, tanques flotantes,
                    absorbentes... RCY fabricó 20 kilómetros de barrera para los
                    desastres petroleros del Erika y del Prestige.
                  </li>
                  <li>
                    <h5>
                      LAS CARPAS INFLABLES Y LAS UNIDADES DE DECONTAMINACION
                    </h5>
                    Nuestras carpas inflables son fabricadas para un montaje
                    rápido y fácil, para situaciones de emergencia y campos de
                    sobrevivencia. Tienen varios accesorios y opciones; Se
                    pueden hacer a medidas y estudiar para diferentes
                    configuraciones de uso: Descontaminación, Campo militar,
                    Campo de obra, Confinamiento. Nuestro último modelo no tiene
                    armadura metálica: se acciona el inflador de aire y la carpa
                    se pone en forma en unos minutos con poco personal.
                  </li>
                  <li>
                    <h5>LOS TANQUES FLEXIBLES PARA ALMACENAMIENTO</h5>
                    Los tanques están disponibles en volúmenes entre 1 m3 y 1200
                    m3. Son equipados con un conjunto de válvulas y accesorios
                    adaptados para su uso. Eligiendo la tela, pueden almacenar
                    varios líquidos: agua potable, aguas de lluvia, desechos
                    agrícolas, lodo de estación de depuración, combustibles,
                    químicos,entre otros. Son fáciles de instalación y uso,
                    convienen para varias aplicaciones. Los tanques flexibles
                    son económicos y prácticos, para almacenar agua en zonas
                    aisladas.
                  </li>
                  <li>
                    <h5>LAS BARRERAS ANTI INUNDACION</h5>
                    Las barreras son hechas con tubos flexibles, llenas de agua
                    para quedarse estables en el suelo. Los tramos se apilan en
                    altura y se conectan entre ellos para constituir una barrera
                    con medidas variables (largo y alto) según la necesidad.
                    Pueden contener inundaciones y constituyen una muralla en
                    caso de altas mareas en los puertos. Se instalan por
                    anticipación antes de la subida de las aguas.
                  </li>
                </ol>
              </div>
            </div>
            <LoadItems data={RCY}/>            
            
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
                  <span className="Subtitulo">Scorpe</span>
                  <h2>Herramientas y equipos de Rescate para Bomberos.</h2>
                  <p>
                    Herramientas de ultima generación, altamente portátiles y
                    confiables. Utilizados por equipos de rescate en el
                    mundo.Scorpe es especialista en Equipos y Herramientas de
                    Rescate. La planta se ubica en los Ardenes, al norte de
                    Francia.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                <img
                  src="./assets/images/logo/scorpe.png"
                  className="w-100 p-3"
                />
                <VideoModal idVideo="Gg8NCKSqE2w" channel="youtube" />
              </div>

              <div className="row">
                <div className="col-12 section-title mt-5 col-sm-12 col-xs-12">
                  <div className="d-lg-flex flex-row flex-wrap mt-5 d-xs-column d-sm-column">
                    <div className="col-lg-4 col-sm-12 col-xs-12">
                      <h5 className="mt-2">Green Spirit</h5> Herramientas
                      eléctricas de Rescate
                      <h5 className="mt-2">Scorp’Air</h5>Cojines de Levamiento
                      <h5 className="mt-2">Beetle</h5> Ventilador de Alto Caudal
                      <h5 className="mt-2">Aquafast</h5> Bombas Flotantes
                    </div>
                    <div className="col-lg-4 col-sm-12 col-xs-12">
                      <h5>VibraSearch</h5>
                      Equipos de Búsqueda y Rescate para victimas sepultadas en
                      situaciones de desastres.La gama Vibrasearch propone 3
                      tipos de productos. Pionero en la tecnología, SCORPE ha
                      concebido cada equipo con unas ventajas especificas e
                      únicas en el mercado.
                      <ol className="">
                        <li>
                          <h6 className="mt-2">Vibraphone</h6> Equipo de
                          búsqueda de victimas sepultadas por vibración.
                        </li>
                        <li>
                          <h6 className="mt-2">Vibrascope</h6>Equipo de
                          comunicación con victimas con cámara y audífonos
                        </li>
                        <li>
                          <h6 className="mt-2">Scorp’Air</h6> Detector Laser de
                          movimientos
                        </li>
                      </ol>
                    </div>
                    <div className="col-lg-4 col-sm-12 col-xs-12">
                      <h5>Scorpe</h5>
                      Ofrece una gama de herramientas de extracción cumpliendo
                      con requisitos muy estrictos.
                      <ol className="">
                        <li>Funcionamiento sin grupo hidráulico externo</li>
                        <li>
                          Compacto y liviano para una manipulación fácil por una
                          sola persona
                        </li>
                        <li>
                          Alimentación autónoma con batería recargable idéntica
                          para todos los modelos
                        </li>
                        <li>
                          Practico y económico: los modelos Combi combinan las
                          funciones separador y cortador
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              <LoadItems data={SCORPE}/>                  
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
                  <span className="Subtitulo">POK</span>
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
                <VideoModal idVideo="lHoUaLDL2K8" channel="youtube" />
              </div>
              <div className="row mt-4 pr-3 pl-3">
                <div className="col-lg-6 section-title mt-2   ">
                  <h5>BOQUILLAS</h5>
                  <p className="AlturaMin__CASO1">
                    Con características de seguridad innovadora y una
                    impresionante investigación y desarrollo, POK ha fabricado
                    una amplia gama de boquillas de mano, que de seguro se
                    adaptaran a sus necesidades.
                  </p>
                  <ol className="TwoCol TwoCol__Eigh__Iems">
                    <li>
                      <h5>Regulación automática de presión </h5>
                      Con corredera o valvula esférica
                    </li>
                    <li>
                      <h5>Presión doble</h5>
                      Funciona a 3 o 6 bares – 45 o 90 psi
                    </li>
                    <li>
                      <h5>Galonaje fijo</h5>
                    </li>
                    <li>
                      <h5>Galonaje por selección</h5>
                    </li>
                    <li>
                      <h5>Patrones de flujos por selección</h5>
                      Chorro directo, flash-over, y chorro neblina{" "}
                    </li>
                    <li>
                      <h5>Elección de cero, uno o dos empuñaduras</h5>
                    </li>
                    <li>
                      <h5>Opciones de color – Personalizable</h5>
                    </li>
                    <li>
                      <h5>
                        El material es de aluminio, bronce y acero inoxidable
                      </h5>
                    </li>
                    <li>
                      <h5>Boquillas Manuales</h5>
                    </li>
                    <li>
                      <h5>Boquillas Forestales</h5>
                    </li>
                  </ol>
                </div>
                <div className="col-lg-6 section-title mt-2 col-sm-12 col-xs-12">
                  <h5>MONITORES</h5>
                  <p className="AlturaMin__CASO1">
                    POK es el especialista de los monitores (cañones diseñados y
                    fabricados con los mejores materiales disponibles). Sea cual
                    sea la aplicación, POK tiene la solución.
                  </p>
                  <ol className="TwoCol TwoCol__Eigh__Iems">
                    <li>
                      <h5>Monitores portátiles / fijos</h5>
                    </li>
                    <li>
                      <h5>Eléctrico con sistema de control remoto</h5>
                    </li>
                    <li>
                      <h5>Diámetro de salida desde 1'' 1⁄2 hasta 16''</h5>
                    </li>
                    <li>
                      <h5>
                        Galonaje dedes 500 a 40.000 lpm – 125 a 10.000 GPM
                      </h5>
                    </li>
                    <li>
                      <h5>Con o sin válvula shutoff</h5>
                    </li>
                    <li>
                      <h5>Movimientos horizonal, vertical y oscilante</h5>
                    </li>
                    <li>
                      <h5>
                        Variedad de materiales como aluminio, bronce y acero
                        inoxidable
                      </h5>
                    </li>
                    <li>
                      <h5>
                        Una amplia gama de equipos para montar en los monitores
                        (lanzas / difusores)
                      </h5>
                    </li>
                    <li>
                      <h5>Monitores Manuales</h5>
                    </li>
                    <li>
                      <h5>Monitores Motorizados</h5>
                    </li>
                  </ol>
                </div>
              </div>
              <div className="row  mr-1 ml-1">
                <div className="col-lg-6 section-title mt-2 col-sm-12 col-xs-12">
                  <h5>Carretes CARPOK</h5>
                  <p>
                    Nuestros carretes móviles CARPOK, se proponen en dos modelos
                    de 100L y 150L. El carrete es autónomo y se conecta a la red
                    hídrica. El espumógeno está ubicado en el tanque, las
                    mangueras, el proporcionador y los pitones permiten crear
                    una espuma de Baja o Media expansión.
                  </p>
                  <ol className="TwoCol">
                    <li>
                      <h5>CARPOK 100 L</h5>
                    </li>
                    <li>
                      <h5>CARPOK 150 L</h5>
                    </li>
                  </ol>
                  <div>
                    <h5>Eductor Venturi</h5>
                    <p>
                      Nuestros eductores se conectan directamente a la
                      alimentación de agua e inyectan el espumógeno en el chorro
                      del agua. Ofrecemos variedad modelos calibrados para el
                      caudal adecuado con la elección del porcentaje de uso:
                      0.4%, 1%, 3% y 6%
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 section-title mt-2 col-sm-12 col-xs-12">
                  <h5>HandiPOK</h5>
                  <p>
                    Este equipo portátil tiene un tanque tipo "Back Pack", un
                    proporcionador y a petición un pitón de baja o media
                    expansión para varias aplicaciones.
                  </p>
                  <h5>Pitones</h5>
                  <p>
                    Tenemos pitones de Baja y Media expansión de varios modelos
                    y de diferentes caudales.
                  </p>
                  <h5>Alta expansión</h5>
                  <p>
                    Ofrecemos un generador móvil de alta expansión GHX 400. Para
                    las instalaciones fijas, tenemos 3 modelos de caudales
                    distintos: 100, 200 y 400 l/mn.
                  </p>
                  <h5>Devanadores</h5>
                  <p>
                    3F presenta una gama amplia de devanadores para la
                    protección de los edificios. Nuestros modelos existen en
                    varios diámetros y larguras de mangueras, tipos de
                    gabinetes, válvulas...
                  </p>
                </div>
              </div>
              <LoadItems data={POK}/>               
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
                  <span className="Subtitulo">Ruth Lee</span>
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
                <VideoModal idVideo="Gg8NCKSqE2w" channel="youtube" />
              </div>
              <div className="row mr-3 ml-3 mt-5">
                <h5>Maniquíes de entrenamiento</h5>
                <p>
                  Ruth Lee es una empresa Británica, especializada en el
                  concepto y la fabricación de maniquíes de capacitación técnica
                  de rescates, utilizados en diferentes escenarios de
                  entrenamiento. Los maniquíes están concebidos para ser usados
                  en las peores condiciones, como son: el rescate al mar, en el
                  fuego, en alturas, en caso de explosiones y atentados.
                </p>
              </div>
              <LoadItems data={Ruth_Lee}/>   
              
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
                  <span className="Subtitulo">Monitoreo de Espumas.</span>
                  <h2>Laboratorio de Espuma.</h2>
                </div>
              </div>
              
              <div className="row mr-3 ml-3 mt-5">
                <div className="col-lg-6 col-sm-12 col-xs-12">
                <p>3F Américas ofrece servicios de monitoreo de sus Espumas</p>
                <p>
                  Con este servicio nuestros clientes pueden tener la garantía
                  que los elementos espumógenos tendrán una alta efectividad en
                  caso de registrarse un evento. Nuestros Laboratorios se
                  encuentran en Inglaterra y contamos con tecnología de punta
                  para analizar la estabilidad y efectividad de los espumógenos.
                </p>
                </div>
                <img src="./assets/images/bg/lab.jpeg" className="w-50 p-3" />
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
                <h2>Certificaciones</h2>
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
