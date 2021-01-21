import React, {  useContext} from "react";
import { MyContext } from "../Provider";
import { CartItem } from "./cart.item.jsx";


export const ShoppingCart = (props) => {
  let state = useContext(MyContext);
  let itemsInCart = state.cart
    .map((n) => n.quantity)
    .reduce((a, b) => a + b, 0);
  let cartTotal = (state.cart
    .map((n) => n.price *n.quantity)
    .reduce((a, b) => a + b, 0)).toFixed(2)



  return (
    <div className="cart-overlay" >
      <div className="cart" >
        <div className="cart-banner">
          <i onClick={()=> state.closeCart()} className="fa fa-times"></i>
          <div className="bannerInfo">
            <div>{state.user.name}'s cart</div>
            <div> {itemsInCart > 0 ? `${itemsInCart} items` : "no Items"}</div>
          </div>
        </div>
        <div className="cart-item-cont">
        {state.cart.map((n, i) => {
          return (
            <CartItem
            key={i}
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
        <div className="cart-footer">
          total: ${cartTotal}
        </div>
      </div>
    </div>
  );
};
