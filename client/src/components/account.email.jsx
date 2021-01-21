import React, { useContext, useState } from 'react'
import { MyContext } from "../Provider";
import API from "../utils/API";


export const UpdateEmail = (props) => {
    let state = useContext(MyContext);
    const [newEmail, setNewEmail] = useState("");

    const runUpdateEmail = () => {
        API.updateEmail(newEmail).then((result) => {
          if (!result.data.success) {
            props.setUpdateMsg(result.data.msg);
          } else {
            props.setUpdateMsg(result.data.msg);
            state.updateUser(result.data.user);
            localStorage.setItem("jwtToken", result.data.token);
          }
        });
      };

    return (<div className="update-stuff">
    <div className="info-label">update email</div>
    <input
      onChange={(e) => setNewEmail(e.target.value)}
      type="text"
    />
    <button onClick={() => runUpdateEmail()}>Update email</button>
  </div>)
}