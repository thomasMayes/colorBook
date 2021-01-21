import React, { useContext, useState } from "react";
import { MyContext } from "../Provider";
import { UpdateName } from "./account.name";
import { UpdatePassword } from "./account.password";
import { UpdateEmail } from "./account.email";

export const AccountUpdate = () => {
  let [updateType, changeUpdateType] = useState("");
  const [updateMsg, setUpdateMsg] = useState("");
  let state = useContext(MyContext);

  return (
    <>
      <div className="account-settings-head">Account Settings</div>
      <div className="account-settings-body">
        <div className="account-info">
          name: {state.user.name}{" "}
          <span
            onClick={() => {
              changeUpdateType("");
              setUpdateMsg("");
              setTimeout(() => changeUpdateType("name"), 300);
            }}
          >
            edit name
          </span>
          <br />
          email: {state.user.email}{" "}
          <span
            onClick={() => {
              changeUpdateType("");
              setUpdateMsg("");
              setTimeout(() => changeUpdateType("email"), 300);
            }}
          >
            edit email
          </span>
          <br />
          password: *******{" "}
          <span
            onClick={() => {
              changeUpdateType("");
              setUpdateMsg("");
              setTimeout(() => changeUpdateType("password"), 300);
            }}
          >
            edit password
          </span>
        </div>
        <div className="account-change">
          {updateType === "name" ? (
            <UpdateName setUpdateMsg={setUpdateMsg} />
          ) : updateType === "email" ? (
            <UpdateEmail setUpdateMsg={setUpdateMsg} />
          ) : updateType === "password" ? (
            <UpdatePassword setUpdateMsg={setUpdateMsg} />
          ) : null}
        </div>

        {updateMsg && (
          <div className="update-msg" style={updateMsg.status === "success"? { background: "#9fe69694" }: { background: "#ff000047" }}>
            {updateMsg.message}
          </div>
        )}
      </div>
    </>
  );
};
