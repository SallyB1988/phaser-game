import React from "react";
import ReactModal from 'react-modal';
import './PanicModal.css';


class PanicModal extends React.Component {

  render() {
    return (

        <ReactModal 
          isOpen={this.props.modalOpen}
          onRequestClose={this.props.hideModal}
          className="Modal"
          overlayClassName="Overlay"
        />
    );
  }
}

export default PanicModal;