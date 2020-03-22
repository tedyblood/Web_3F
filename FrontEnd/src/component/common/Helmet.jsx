import React, { Component } from "react";
import { Helmet } from 'react-helmet'

class PageHelmet extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} || Smart Foams </title>
                    <meta name="description" content="Espumas contra incendios y espuma y equipos contra incendios" />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
