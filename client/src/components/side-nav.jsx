import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import ReactDOM from "react-dom";
import { useWindowSize } from "../custom hooks/useWindowSize";

export const SideNav = forwardRef((props, ref) => {
  const inside = useRef();
  const [show, setShow] = useState(false);
  const [width] = useWindowSize();

  useEffect(() => {
    if (width > 700) {
      setShow(false);
    }
  }, [width]);


  const close = () => {
    setShow(false);
    document.getElementById("body").classList.remove("modalOpen");
  };

  useImperativeHandle(ref, () => {
    return {
      openNav: () => {
        setShow(true);
        document.getElementById("body").classList.add("modalOpen");
      },
      closeNav: () => {
        setShow(false);
        document.getElementById("body").classList.remove("modalOpen");
      },
    };
  });

  if (show) {
    return ReactDOM.createPortal(
      <div
        className={
          props.customClass ? `navWrapper ${props.customClass}` : "navWrapper"
        }
      >
        <div onClick={(e) => close()} className="navBackdrop"></div>
        <div ref={inside} className="navBox">
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
