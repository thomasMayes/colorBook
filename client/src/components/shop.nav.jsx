import React, { useContext, useState, useEffect, useRef } from "react";
import { MyContext } from "../Provider";
import { Modal } from "./Modal";
import { AccountUpdate } from "./accountUpdate";
import { SideNav } from "./side-nav.jsx";
import { useHistory } from "react-router-dom";

export const ShopNav = (props) => {
  let state = useContext(MyContext);
  let history = useHistory();
  let itemsInCart = state.cart
    .map((n) => n.quantity)
    .reduce((a, b) => a + b, 0);
  let [bubbleShow, toggleBubble] = useState(true);

  const inside = useRef();
  const link = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (link.current.contains(e.target)) {
        state.toggleUserShow(true);
      } else if (inside.current) {
        if (!inside.current.contains(e.target)) {
          state.toggleUserShow(false);
        }
      }
    };

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, [state]);

  useEffect(() => {
    toggleBubble(false);
    setTimeout(() => {
      toggleBubble(true);
    }, 10);
  }, [itemsInCart]);

  const logout = () => {
    localStorage.removeItem("jwtToken");
    window.location.reload();
  };

  const navRef = React.useRef();
  const modalRef = React.useRef();

  const openModal = () => {
    modalRef.current.openModal();
  };

  const openNav = () => {
    navRef.current.openNav();
  };

  const closeNav = () => {
    navRef.current.closeNav();
  };

  return (
    <div className="store">
      <nav className="navbar2">
        <img
          alt=""
          className="logo"
          onClick={() => {
            history.push("/");
          }}
          src="/img/logo.png"
        />
        <div className="hamburger" onClick={() => openNav()}>
          <i className="fa fa-bars fa-2x hamburger-icon"></i>
        </div>
        <SideNav ref={navRef}>
          <div
            onClick={() => {
              closeNav();
              props.history.push("/store");
            }}
          >
            <div>shop</div>
          </div>
          <div
            onClick={() => {
              closeNav();
              props.history.push("/sell");
            }}
          >
            <div>sell</div>
          </div>
          <div
            onClick={() => {
              closeNav();
              props.history.push("/studio");
            }}
          >
            <div>studio</div>
          </div>
          <div
            onClick={() => {
              openModal();
            }}
          >
            Account Settings
          </div>
          <div
            className="cart-side"
            onClick={() => {
              closeNav();
              history.push("/cart");
            }}
          >
            cart:{" "}
            {state.cart.length > 0 && bubbleShow ? (
              <span className="cart-num">{itemsInCart}</span>
            ) : (
              <span>0</span>
            )}
          </div>
          <div>LogOut</div>
        </SideNav>

        <div className="collapseNav">
          <div className="nav-stuff">
            <div
              onClick={() => props.history.push("/store")}
              className="skew-box"
            >
              <div className="test">shop</div>
            </div>
            <div
              onClick={() => props.history.push("/sell")}
              className="skew-box"
            >
              <div className="test">sell</div>
            </div>
            <div
              onClick={() => props.history.push("/studio")}
              className="skew-box"
            >
              <div className="test">studio</div>
            </div>
          </div>

          <div className="user-link" ref={link}>
            {state.user.name}
          </div>
          {state.userInfoShow && (
            <div ref={inside} className="user-info">
              <div
                onClick={() => {
                  openModal();
                  state.toggleUserShow(false);
                }}
              >
                Account
              </div>

              <div onClick={() => logout()}>logOut</div>
            </div>
          )}
          <div className="cart-box" onClick={() => state.openCart()}>
            <div className="cb-stuff">
              <div className="cart-info">
                {" "}
                <i className="fa fa-shopping-cart"></i>:
              </div>
            </div>
            <div className="cb-stuff">
              {state.cart.length > 0 && bubbleShow ? (
                <div className="cart-num">{itemsInCart}</div>
              ) : (
                <div>0</div>
              )}
            </div>
          </div>
        </div>
      </nav>
      <Modal ref={modalRef} className={"account-modal"}>
        <AccountUpdate />
      </Modal>
    </div>
  );
};
