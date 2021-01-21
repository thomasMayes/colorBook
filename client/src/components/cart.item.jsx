import React from "react";

export const CartItem = (props) => {
  return (
    <div className="cart-item">
      <div className="subCart">
        <img src={props.img} alt="Card i cap" />
        <div className="cart-item-detail">
          <h6>{props.name}</h6>
          <p>{props.desc.length<100? props.desc: props.desc.split('').slice(0,100).join('') + '...'}</p>
        </div>{" "}
        <p>QTY: {props.quantity}</p>{" "}
      </div>
      <p className="cart-item-price">
        ${(props.price * props.quantity).toFixed(2)}{" "}
      </p>
    </div>
  );
};
