import React from "react";
import bgImg from "../../assets/image-removebg-preview 1.png";
import vector from "../../assets/Vector.png";
import "../RightPanel/RightPanel.css"

const RightPanel = () => {
  return (
    <div className="panel-container">
      <img id="heroImg" src={bgImg} alt="" />
      <div className="content">
        <h3>Pocket Notes</h3>
        <p>Send and receive messages without keeping your phone online.</p>
        <p>Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
      </div>
      <div className="encryption">
        <img id="encrptImg" src={vector} alt="" />
        <span>end-to-end encrypted</span>
      </div>
    </div>
  );
};

export default RightPanel;
