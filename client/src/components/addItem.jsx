import React, { useState, useEffect, useContext } from "react";
import API from "../utils/API";
import { MyContext } from "../Provider";

export const AddItem = (props) => {
  let [name, updateName] = useState();
  let [desc, updateDesc] = useState();
  let [price, updatePrice] = useState();
  let [filepath, changeFilepath] = useState(null);
  let [newFile, changeFile] = useState(null);
  let [color] = useState("white");

  let state = useContext(MyContext);

  useEffect(() => {
    if (!newFile) {
      changeFilepath(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(newFile);
    changeFilepath(objectUrl);
  }, [newFile]);

  const onSubmit = () => {
    let newIMG = new Image();
    newIMG.src = filepath;
    let aspect = newIMG.height / newIMG.width;

    const formData = new FormData();
    formData.append("myImage", newFile);
    formData.append("name", name);
    formData.append("description", desc);
    formData.append("price", price);
    formData.append("userId", state.user._id);
    formData.append("color", color);
    formData.append("aspect", aspect);

    const config = {
      headers: { "content-type": "multipart/form-data" },
    };

    API.newItem(formData, config).then((res) => {
      props.history.push("/store");
    });
  };

  return (
    <div className="add-item-cont">
      <div className="add-item-banner">Get your work out there</div>

      <div className="fileUploadStuff">
        <div className="img-cont">
          <div className="add-item-mat">
            <img
              alt={"pic preview"}
              className="imagePreview"
              src={filepath ? filepath : "/img/upload.png"}
            ></img>
          </div>
        </div>
        <label className="custom-btn" htmlFor="inputfield">
          choose a photo
        </label>
        <input
          id="inputfield"
          type="file"
          name="upfile"
          onChange={(e) => {
            changeFilepath(e.target.value);
            changeFile(e.target.files[0]);
          }}
        ></input>
      </div>

      <input
        onChange={(e) => updateName(e.target.value)}
        placeholder="Item name"
        name="itemName"
      ></input>
      <textarea
        onChange={(e) => updateDesc(e.target.value)}
        placeholder="Description"
        name="itemDesc"
      ></textarea>

      <input
        onChange={(e) => updatePrice(e.target.value)}
        placeholder="price"
        name="itemPrice"
      ></input>

      <div className="add-item-footer">
        <button className="custom-btn" onClick={() => onSubmit()}>
          add item
        </button>
      </div>
    </div>
  );
};
