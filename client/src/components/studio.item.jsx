import React from "react";

export const StudioItem = (props) => {
  return (
    <div className="studioItem">
      <img
        src={props.img}
        alt="pic of stuff cap"
        onClick={() => {
          props.setModalItem(props.fullItem);
          props.openImgModal();
        }}
      />
    </div>
  );
};
