import React, { useContext, useState } from 'react'
import { MyContext } from "../Provider";
import API from "../utils/API";


export const UpdateName = (props) => {
    let state = useContext(MyContext);
    const [newName, setNewName] = useState("");

    const runUpdateName = () => {
        API.updateName(newName).then((result) => {
          if (!result.data.success) {
            props.setUpdateMsg(result.data.msg);
          } else {
            props.setUpdateMsg(result.data.msg);
            state.updateUser(result.data.user);
            localStorage.setItem("jwtToken", result.data.token);
          }
        });
      };



    return (
        <div className="update-stuff">
              <div className="info-label">update name</div>
              <input type="text" onChange={(e) => setNewName(e.target.value)} />
              <button onClick={() => runUpdateName()}>Update Name</button>
            </div>
    );
};
