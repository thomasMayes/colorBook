import React, { useRef, useEffect } from "react";
import { Modal } from "./Modal";
import Login from "./Login.jsx";

const Landing = (props) => {
  let modalRef = useRef();

  useEffect(() => {
    document.getElementById("body").classList.add("modalOpen");
  }, []);

  return (
    <div className="landingContainer">
      <div className="callToAction">
        <img src="./img/logo2.png" alt="" className="src" />
        <button onClick={() => modalRef.current.openModal()}>Enter</button>
      </div>
      <div className="hero">
        <div className="imageCont">
          <img alt="" src="/img/art/streetart.jpg"></img>
          <img alt="" src="/img/art/streetart2.jpg"></img>
          <img alt="" src="/img/art/streetart3.jpg"></img>
          <img alt="" src="/img/art/streetart4.jpg"></img>
          <img alt="" src="/img/art/streetart.jpg"></img>
          <img alt="" src="/img/art/abstract.jpg"></img>
          <img alt="" src="/img/art/streetart3.jpg"></img>
          <img alt="" src="/img/art/girl.jpg"></img>
        </div>
        <div className="imageCont2">
          <img alt="" src="/img/art/streetart5.jpg"></img>
          <img alt="" src="/img/art/streetart.jpg"></img>
          <img alt="" src="/img/art/streetart2.jpg"></img>
          <img alt="" src="/img/art/pol.jpg"></img>
        </div>
        <div className="imageCont3">
          <img alt="" src="/img/art/streetart5.jpg"></img>
          <img alt="" src="/img/art/streetart.jpg"></img>
          <img alt="" src="/img/art/streetart2.jpg"></img>
          <img alt="" src="/img/art/pol.jpg"></img>
        </div>
      </div>

      <Modal ref={modalRef} customClass="loginStuff">
        <Login />
      </Modal>
    </div>
  );
};
export default Landing;
