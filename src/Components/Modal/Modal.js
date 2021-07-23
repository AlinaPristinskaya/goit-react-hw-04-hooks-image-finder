import PropTypes from "prop-types";
import React, { Component } from "react";
import { createPortal } from "react-dom";

import s from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
  componentWillMount(){
      window.addEventListener("keydown",this.handelKeyDown)
  }
  componentWillUnmount(){
      window.removeEventListener("keydown",this.handelKeyDown)
  }
 
  handelKeyDown=e=>{
    if(e.code==='Escape'){
        this.props.onClick() 
     }

  }
  
  render() {
    return createPortal(
      <div className={s.Overlay}>
        <div className={s.Modal}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func,
};

export default Modal;