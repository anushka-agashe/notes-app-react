import React, { useContext, useState, useEffect, useRef } from "react";
import "./CreateGroupModal.css";
import { AppContextData } from "../../Context/AppContext.jsx";

const CreateGroupModal = ({ onClose }) => {
  const { addGroup } = useContext(AppContextData);

  const [groupName, setGroupName] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onClose]);

  const handleCreate = () => {
    if (!groupName.trim()) {
      alert("Please enter a group name !");
      return;
    }
    if (groupName.trim().split(/\s+/).length > 2) {
      alert("Group name must be at most 2 words!");
      return;
    }
    if (!selectedColor) {
      alert("Please select a color !");
      return;
    }


    console.log(groupName, selectedColor);

    addGroup(groupName, selectedColor);

    setGroupName("");
    setSelectedColor("");
  };

  const colors = [
    "#b38bfa",
    "#ff79f2",
    "#43e6fc",
    "#f19576",
    "#0047ff",
    "#6691ff",
  ];

  return (
    <div className="new-group-overlay">
      <div className="new-group" ref={modalRef}>
        <h3>Create New group</h3>
        <div className="groupModal">
          <div className="group-name">
            <label htmlFor="">Group Name</label>
            <input
              type="text"
              placeholder="Enter group name"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
            />
          </div>
          <div className="color-container">
            <h4>Choose Colour</h4>
            <div className="color-row">
              {colors.map((color, index) => (
                <div
                  key={index}
                  className="color"
                  style={{
                    backgroundColor: color,
                  }}
                  onClick={() => setSelectedColor(color)}
                ></div>
              ))}
            </div>
          </div>
        </div>
        <button id="create-btn" onClick={handleCreate}>
          Create
        </button>
      </div>
    </div>
  );
};

export default CreateGroupModal;
