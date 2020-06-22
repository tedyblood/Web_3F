import React, { Component } from "react";
import MVideo from "react-modal-video";

class ModalVideo extends Component {
    constructor () {
        super()
        this.state = {
          isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal () {
        this.setState({isOpen: true})
    }
      
    render() {
        return (
            <div>
                <MVideo
                  channel={this.props.channel}
                  isOpen={this.state.isOpen}
                  videoId={this.props.idVideo}
                  onClose={() => this.setState({ isOpen: false })}
                />
                <button
                  className="btn btn-block btn-lg btn-success w-100"
                  onClick={this.openModal}
                >
                  Ver Video ►{" "}
                </button>
            </div>
        )
    }
}

export default ModalVideo;

