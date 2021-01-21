import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import API from "./utils/API";

export const MyContext = React.createContext();

export const MyProvider = (props) => {
  const defaultUserState = {
    name: "",
  };

  let token = localStorage.getItem("jwtToken");

  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = localStorage.getItem(
      "jwtToken"
    );

    if (localStorage.getItem("jwtToken")) {
      API.getUser()
        .then((res) => {
          updateUser(res.data);
        })
        .catch((error) => {});
    }
  }, []);

  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = localStorage.getItem(
      "jwtToken"
    );
  }, [token]);

  let [user, updateUser] = useState(defaultUserState);
  let [items, updateItems] = useState([]);
  let [cart, updateCart] = useState([]);
  let [userInfoShow, toggleUserShow] = useState(false);
  let [cartShow, toggleCart] = useState(false);
  let [currentArtist, setCurrentArtist] = useState("");

  const isAuthenticated = () => localStorage.getItem("jwtToken");

  const openCart = () => {
    toggleCart(true);
    document.getElementById("body").classList.add("modalOpen");
  };

  const closeCart = () => {
    toggleCart(false);
    document.getElementById("body").classList.remove("modalOpen");
  };

  const addItemToCart = (item) => {
    let itemWithQuantity = Object.assign({ ...item }, { quantity: 1 });
    let newCart = cart.map((n) => n._id);
    if (newCart.includes(item._id)) {
      let cartCopy = [...cart];
      cartCopy.forEach((n) => {
        if (n._id === item._id) {
          n.quantity = n.quantity + 1;
        }
      });
      updateCart(cartCopy);
    } else {
      updateCart([...cart].concat(itemWithQuantity));
    }
  };

  return (
    <MyContext.Provider
      value={{
        user,
        updateUser,
        isAuthenticated,
        items,
        updateItems,
        cart,
        updateCart,
        userInfoShow,
        toggleUserShow,
        cartShow,
        toggleCart,
        addItemToCart,
        openCart,
        closeCart,
        currentArtist,
        setCurrentArtist,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};
