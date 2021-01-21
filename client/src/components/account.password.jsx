import React, { useContext, useState } from 'react'
import { MyContext } from "../Provider";
import API from "../utils/API";


export const UpdatePassword = (props) => {
    let state = useContext(MyContext);
    const [newPass, setNewPass] = useState("");
  const [currentPass, setCurrentPass] = useState("");


    const runUpdatePassword = () => {
        API.updatePassword(currentPass, newPass)
          .then((result) => {
            if (!result.data.success) {
              setNewPass("");
              setCurrentPass("");
              props.setUpdateMsg(result.data.msg);
            } else {
              props.setUpdateMsg(result.data.msg);
              setNewPass("");
              setCurrentPass("");
              state.updateUser(result.data.user);
              localStorage.setItem("jwtToken", result.data.token);
            }
          })
          .catch((error) => {
            console.log(error);
            if (error.response.status === 401) {
              setNewPass("");
              setCurrentPass("");
    
              props.setUpdateMsg({
                message: "UNAUTHORIZED: current password is invalid",
                status: "error",
              });
            }
          });
      };

    return( <div className="update-stuff">
    <div className="info-label">update password</div>
    <input
      value={currentPass}
      placeholder="current password"
      onChange={(e) => setCurrentPass(e.target.value)}
    />
    <input
      value={newPass}
      placeholder="new password"
      type="text"
      onChange={(e) => setNewPass(e.target.value)}
    />
    <button onClick={() => runUpdatePassword()}>
      Update password
    </button>
  </div>)
}