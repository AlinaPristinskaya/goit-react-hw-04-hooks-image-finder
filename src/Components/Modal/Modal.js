import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import s from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

function Modal({onClick,children}){
  useEffect(() => {
    window.addEventListener("keydown", handelKeyDown)

    return () => {
      window.removeEventListener("keydown", handelKeyDown)
    };
  });

  const handelKeyDown=e=>{
    if(e.code==='Escape'){
        onClick() 
     }

  }
  return createPortal(
    <div className={s.Overlay}>
      <div className={s.Modal}>{children}</div>
    </div>,
    modalRoot
  );

}

/* class Modal extends Component {
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
}; */

export default Modal;
