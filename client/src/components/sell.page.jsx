import React from "react";
import { ShopNav } from "./shop.nav.jsx";
import { AddItem } from "./addItem.jsx";

export const Sell = (props) => {
  
  return (
    <div className="sell-page">
      <div className="sell-nav">
      <ShopNav history={props.history} />
      </div>
      <div className="sell-cont">
        <AddItem history={props.history} />
      </div>
    </div>
  );
};
