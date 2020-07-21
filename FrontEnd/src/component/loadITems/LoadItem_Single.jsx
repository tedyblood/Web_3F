import React, { Component } from "react";
import { Link } from "react-scroll";

export default class LoadItem extends Component {
  render() {
    return (
      <div>
        <div className="row mt--60 mt_sm--40  mr-1 ml-1 Ajuste__lista__Productos">
          {this.props.data.map((value, i) => (
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
                      src={`/assets/images/product/${value.path}/${value.images}`}
                      alt={value.title}
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
                  {value.pdf &&
                  <div className="blog-btn">
                    <a
                      className="rn-btn"
                      href={`/assets/pdf/${value.pdf__path}/${value.pdf__file}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ficha Técnica
                    </a>
                  </div>
                  }
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
