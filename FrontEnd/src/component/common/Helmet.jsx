import React, { Component } from "react";
import { Helmet } from 'react-helmet'

class PageHelmet extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} || Smart Foams || Espuma AFFF</title>
                    <meta name="description" content="Equipos y sistemas de protección contra incendios - Equipos de Rescate - Espuma AFFF - Generadores de Ozono ✅" />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
