import React, { useContext, useRef, useState } from "react";
import { ShopNav } from "./shop.nav";
import { MyContext } from "../Provider";
import { StudioItem } from "./studio.item.jsx";
import { itemSort } from "../functions/itemSort";
import { Modal } from "./Modal.jsx";
import { AccountUpdate } from "./accountUpdate.jsx";

export const Studio = (props) => {
  let state = useContext(MyContext);
  let [modalItem, setModalItem] = useState({});
  let userItems = state.items.filter((x) => x.userId === state.user._id);
  let itemArrs = itemSort(userItems);

  const modalRef = useRef();
  const imgModalRef = useRef();

  const openImgModal = () => {
    imgModalRef.current.openModal();
  };

  return (
    <div className="studio-page">
      <ShopNav history={props.history} />
      <div className="studio-header">
        <div className="studio-banner">
          <h1>{state.user.name}</h1>
          <button onClick={() => modalRef.current.openModal()}>
            Profile Settings
          </button>
        </div>
      </div>
      <div className="studio-item-display">
        <div className="left">
          <div className="left-one">
            {itemArrs[0].map((n, i) => {
         
              return (
                <div className="studio-item-cont" key={i}>
                  <div className="price-tag-left">${n.price}</div>
                  <StudioItem
                    key={i}
                    img={n.image}
                    name={n.name}
                    desc={n.description}
                    price={n.price}
                    fullItem={n}
                    color={n.color}
                    openImgModal={openImgModal}
                    setModalItem={setModalItem}
                  />
                </div>
              );
            })}
          </div>

          <div className="left-two">
            {itemArrs[1].map((n, i) => {
              let newIMG = new Image();
              newIMG.src = n.image;

              return (
                <div className="studio-item-cont" key={i}>
                  <div className="price-tag-left">${n.price}</div>
                  <StudioItem
                    key={i}
                    img={n.image}
                    name={n.name}
                    desc={n.description}
                    price={n.price}
                    fullItem={n}
                    color={n.color}
                    openImgModal={openImgModal}
                    setModalItem={setModalItem}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="right">
          <div className="right-one">
            {itemArrs[2].map((n, i) => {
              return (
                <div className="studio-item-cont"key={i}>
                  <div className="price-tag">${n.price}</div>
                  <StudioItem
                    key={i}
                    img={n.image}
                    name={n.name}
                    desc={n.description}
                    price={n.price}
                    fullItem={n}
                    color={n.color}
                    openImgModal={openImgModal}
                    setModalItem={setModalItem}
                  />
                </div>
              );
            })}
          </div>

          <div className="right-two">
            {itemArrs[3].map((n, i) => {
              return (
                <div className="studio-item-cont"key={i}>
                  <div className="price-tag">${n.price}</div>
                  <StudioItem
                    key={i}
                    img={n.image}
                    name={n.name}
                    desc={n.description}
                    price={n.price}
                    fullItem={n}
                    color={n.color}
                    openImgModal={openImgModal}
                    setModalItem={setModalItem}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Modal ref={modalRef} className={"account-modal"}>
        <AccountUpdate />
      </Modal>

      <Modal customClass="art-modal" ref={imgModalRef} className={"pic-modal"}>
        <div className="modal-shit">
          <h1>{modalItem ? modalItem.name : "fuck"}</h1>
          <img
            alt="modal-pic"
            className="modal-pic"
            src={modalItem.image}
          ></img>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
            deleniti culpa in, unde aliquam eaque quasi minima rerum quos a
            debitis non incidunt ducimus veritatis veniam ullam? Veritatis, est
            tempora.
          </p>
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
  );
};
