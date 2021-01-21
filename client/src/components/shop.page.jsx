import React, { useEffect, useContext, useState, useCallback } from "react";
import { ShopNav } from "./shop.nav.jsx";
import API from "../utils/API";
import { MyContext } from "../Provider";
import { ShoppingCart } from "./shoppingcart.jsx";
import { Items } from "./pagination.items.jsx";
import { Pagination } from "./pagination.jsx";
import { Modal } from "./Modal.jsx";
import { SideCart } from "./side-cart.jsx";
import { useHistory } from "react-router-dom";

export const Shop = (props) => {
  let state = useContext(MyContext);

  console.log(state)
  let history = useHistory();
  let [currentPage, setCurrentPage] = useState(1);
  let [postsPerPage] = useState(10);
  let [modalItem, setModalItem] = useState({});

  const updateItems = useCallback(state.updateItems, [])
    


  useEffect(() => {
    API.getItems().then((result) => {
      let newItems = result.data.items.reverse();
      updateItems(newItems);
    });
  }, [updateItems]);

  const modalRef = React.useRef();
  const cartRef = React.useRef();

  const openModal = () => {
    modalRef.current.openModal();
  };
  const openCart = () => {
    cartRef.current.openCart();
  };

  const indexOfLastItem = currentPage * postsPerPage;
  const indexOfFirstItem = indexOfLastItem - postsPerPage;
  let currentPosts = state.items.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (num) => setCurrentPage(num);

  const runSearch = (e) => {
    e.prevent.default();
  };

  return (
    <>
      <div className="store">
        <div className="stickyStuff">
          <ShopNav
            toggleCart={() => {
              openCart();
            }}
            cartShow={() => {
              openCart();
            }}
            history={props.history}
          />
          <form onSubmit={runSearch}>
            <div className="search-cont">
              <i className="fab fa-sistrix fa-1x"> </i>
              <input
                type="text"
                placeholder="search for Item"
                className="searchbar"
              />
            </div>
          </form>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={state.items.length}
            paginate={paginate}
          />
        </div>
        <Items
          setModalItem={setModalItem}
          openModal={openModal}
          posts={currentPosts}
        />

        <Modal customClass="art-modal" ref={modalRef} className={"pic-modal"}>
          <div className="modal-shit">
            <h1>{modalItem ? modalItem.name : "fuck"}</h1>
            <img alt="" className="modal-pic" src={modalItem.image}></img>
            <p>{modalItem.description}</p>

            <button
              className="custom-btn-three btn-3"
              onClick={() => {
                state.setCurrentArtist(modalItem.userId);
                history.push("/artist");
                modalRef.current.closeModal();
              }}
            >
              Visit this artist's studio
            </button>
            <button
              className="custom-btn-three btn-3"
              onClick={() => {
                state.addItemToCart(modalItem);
                modalRef.current.closeModal();
              }}
            >
              add item to cart
            </button>
          </div>
        </Modal>
      </div>
      <SideCart customClass="sideCart" ref={cartRef}>
        <ShoppingCart />
      </SideCart>
    </>
  );
};
