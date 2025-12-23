import React, { useContext } from "react";
import { AppContextData } from "../../Context/AppContext";
import "../GroupHeader/GroupHeader.css";
import arrow from "../../assets/Arrow.png";
import { useNavigate } from "react-router-dom";

const GroupHeader = ({ group, showBack }) => {
  const navigate = useNavigate();

  if (!group) return null;

  const initials = group.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
  return (
    <>
      <div className="groupHeader">
        {showBack && (
          <img src={arrow} id="backBtn" onClick={() => navigate("/")} />
        )}

        <div className="groupIcon" style={{ backgroundColor: group.color }}>
          {initials}
        </div>
        <h3>{group.name}</h3>
      </div>
    </>
  );
};

export default GroupHeader;
