import React, { useContext } from "react";
import { AppContextData } from "../../Context/AppContext";
import NoteCard from "../NoteCard/NoteCard";
import "../NotesList/NotesList.css"
const NotesList = () => {
  const { currentGroupId, notes } = useContext(AppContextData);

  if (!currentGroupId) return null;

  const groupNotes = notes[currentGroupId] || [];

  return (
    <div className="notesList">
      {groupNotes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NotesList;
