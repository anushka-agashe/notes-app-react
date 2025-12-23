import React, { useContext, useEffect } from "react";
import GroupHeader from "../../Components/GroupHeader/GroupHeader";
import NotesList from "../../Components/NotesList/NotesList";
import NoteEditor from "../../Components/NoteEditor/NoteEditor";
import { useNavigate, useParams } from "react-router-dom";
import { AppContextData } from "../../Context/AppContext";

const NotesPage = () => {
  const { id } = useParams();
  const { groups, selectGroup } = useContext(AppContextData);
  const currentGroup = groups.find((group) => group.id === id);

  useEffect(() => {
    if (id) selectGroup(id);
  }, [id]);

  if (!currentGroup) return null;

  return (
    <div className="notesPage">
      <GroupHeader group={currentGroup} showBack />
      <NotesList />
      <NoteEditor />
    </div>
  );
};

export default NotesPage;
