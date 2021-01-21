import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";

import ReactDOM from "react-dom";

export const Modal = forwardRef((props, ref) => {
  const inside = useRef();
  const [show, setShow] = useState(false);

  const close = () => {
    setShow(false);
    document.getElementById("body").classList.remove("modalOpen");
  };

  useImperativeHandle(ref, () => {
    return {
      openModal: () => {
        setShow(true);
        document.getElementById("body").classList.add("modalOpen");
      },
      closeModal: () => {
        setShow(false);
        document.getElementById("body").classList.remove("modalOpen");
      },
    };
  });

  if (show) {
    return ReactDOM.createPortal(
      <div
        className={
          props.customClass
            ? `modalWrapper ${props.customClass}`
            : "modalWrapper"
        }
      >
        <div onClick={(e) => close()} className="modalBackdrop"></div>
        <div ref={inside} className="modalBox">
          {" "}
          <i
            onClick={(e) => close()}
            className=" close  fa fa-times-circle fa-5x"
            style={{ color: "white" }}
          ></i>
          {props.children}
        </div>
      </div>,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
});
