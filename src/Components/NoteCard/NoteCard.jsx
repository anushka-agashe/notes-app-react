import React from "react";
import "../NoteCard/NoteCard.css";

const NoteCard = ({ note }) => {
  return (
    <>
      <div className="noteCard">
        <p>{note.text}</p>
        <div className="noteFooter">
          <span>{note.date}</span>
          <span>.</span>
          <span>{note.time.toUpperCase()}</span>
        </div>
      </div>
    </>
  );
};

export default NoteCard;
