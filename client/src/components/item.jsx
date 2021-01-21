import React, { useContext } from "react";
import { MyContext } from "../Provider";
import { Modal } from "./Modal.jsx";
import { useHistory } from "react-router-dom";

export const Item = (props) => {
  let history = useHistory();
  let state = useContext(MyContext);
  const modalRef = React.useRef();

  const openModal = () => {
    modalRef.current.openModal();
  };

  return (
    <div>
      <Modal ref={modalRef} customClass="addToCartModal">
        <h4>Add item cart?</h4>
        <img
          className="add-img"
          width="100%"
          src={props.img}
          alt="Card img cap"
        />
        <h6>${props.price}</h6>
        <button
          className="custom-btn-three btn-3"
          onClick={() => {
            state.addItemToCart(props.fullItem);
            modalRef.current.closeModal();
          }}
        >add to cart
        </button>
      </Modal>

      <div className="customCard">
        <div className="shop-item-mat">
          <img
            width="100%"
            src={props.img}
            alt="Card pic cap"
            onClick={() => {
              props.setModalItem(props.fullItem);
              props.openModal();
            }}
          />
        </div>
        <div className="cardfoot">
          <button
            className="custom-btn-three btn-3"
            onClick={() => {
              state.setCurrentArtist(props.currentArtist);
              history.push("/artist");
            }}
          >artist
          </button>
          <h4> ${props.price}</h4>
          <button
            className="custom-btn-three btn-3"
            onClick={() => {
              openModal();
            }}
          >add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
