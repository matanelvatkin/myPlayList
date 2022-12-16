import React from "react";
import "./ProfileSidebar.css";

function ProfileSidebar(props) {
  const goToPlayList = () => {};
  const goToSearch = () => {};
  return (
    <div className="profileOpen ">
      <ul>
        <li>
          <input type="button" value="my playlist" onClick={goToPlayList} />
        </li>
        <li>
          <input type="button" value="search song" onClick={goToSearch} />
        </li>
      </ul>
    </div>
  );
}

export default ProfileSidebar;
