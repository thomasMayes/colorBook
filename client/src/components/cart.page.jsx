import React, { useContext } from "react";
import { ShopNav } from "./shop.nav.jsx";
import { MyContext } from "../Provider";
import { CartItem } from "./cart.item.jsx";

export const CartPage = (props) => {
  let state = useContext(MyContext);
  let itemsInCart = state.cart
    .map((n) => n.quantity)
    .reduce((a, b) => a + b, 0);
  let cartTotal = state.cart
    .map((n) => n.price * n.quantity)
    .reduce((a, b) => a + b, 0)
    .toFixed(2);

  return (
    <div className="cart-page">
      <div className="cart-nav">
        <ShopNav history={props.history} />
      </div>
      <div className="cartCont">
        <div className="cart-page-body">
          <div className="cart-banner">
            <div className="bannerInfo">
              <div>{state.user.name}'s cart</div>
              <div>
                {" "}
                {itemsInCart > 0 ? `${itemsInCart} items` : "no Items"}
              </div>
            </div>
          </div>
          <div className="cart-page-item-cont">
            {state.cart.map((n, i) => {
              return (
                <CartItem
                  quantity={n.quantity}
                  img={n.image}
                  name={n.name}
                  desc={n.description}
                  price={n.price}
                  fullItem={n}
                />
              );
            })}
          </div>
          <div className="cart-footer">total: ${cartTotal}</div>
        </div>
      </div>
    </div>
  );
};
