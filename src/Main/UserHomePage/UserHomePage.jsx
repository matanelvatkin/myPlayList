import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { userContext } from "../../App";

function UserHomePage() {
  const { user } = useContext(userContext);
  const navigate = useNavigate();
  return (
    <div>
      <p>wall came {user.fName + " " + user.lName}</p>
      <input
        type="button"
        value="search"
        onClick={() => navigate("./search")}
      />
    </div>
  );
}

export default UserHomePage;
