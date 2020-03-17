import React, { Component } from 'react'
import { FaWhatsapp } from 'react-icons/fa';



export class Whatsapp extends Component {
    render() {
        return (
            <React.Fragment>
                <a href="https://api.whatsapp.com/send?phone=0050762765105&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20." class="float animated bounceIn delay-3s" target="_blank">
                    <FaWhatsapp />
                </a>
            </React.Fragment >

        )
    }
}

export default Whatsapp
