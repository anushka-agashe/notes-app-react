import React, { useContext, useState } from "react";
import "../NoteEditor/NoteEditor.css";
import BlueVector from "../../assets/BlueVector.png";
import GrayVector from "../../assets/GrayVector.png";
import { AppContextData } from "../../Context/AppContext";

const NoteEditor = () => {
  const [input, setInput] = useState("");

  const { addNotes, currentGroupId } = useContext(AppContextData);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const hasInput = input.trim().length > 0;

  const handleSave = () => {
    if (!hasInput || !currentGroupId) return;

    addNotes(currentGroupId, input.trim());
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSave();
    }
  };

  return (
    <>
      <div className="noteEditor">
        <div className="innerNoteEditor">
          <input
            type="text"
            placeholder="Enter your text here..........."
            value={input}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <img
            id="Btn"
            src={hasInput ? BlueVector : GrayVector}
            alt=""
            onClick={handleSave}
            style={{ cursor: hasInput ? "pointer" : "not-allowed" }}
          />
        </div>
      </div>
    </>
  );
};

export default NoteEditor;
