import React, { useEffect, useContext, forwardRef, useRef , useCallback} from "react";
import ReactDOM from "react-dom";
import { MyContext } from "../Provider";
import { useWindowSize } from "../custom hooks/useWindowSize";

export const SideCart = forwardRef((props, ref) => {
  let state = useContext(MyContext);
  const inside = useRef();
  const [width] = useWindowSize();

  const cartCallback = useCallback(state.toggleCart,[])
  useEffect(() => {
    if (width > 700) {
      cartCallback(false);
    }
  }, [width, cartCallback]);

  if (state.cartShow) {
    return ReactDOM.createPortal(
      <div
        className={
          props.customClass ? `cartWrapper ${props.customClass}` : "cartWrapper"
        }
      >
        <div onClick={() => state.closeCart()} className="cartBackdrop"></div>
        <div ref={inside} className="cartBox">
          {" "}
          <i
            onClick={() => state.closeCart()}
            className=" close  fa fa-times-circle fa-5x"
            style={{ color: "yellow" }}
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
