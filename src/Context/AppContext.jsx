import React, { createContext, useEffect, useState } from "react";

export const AppContextData = createContext();

export const AppContext = ({ children }) => {
  const [groups, setGroups] = useState([]);
  const [notes, setNotes] = useState({});
  const [currentGroupId, setCurrentGroupId] = useState(null);

  // Get data from localStorage on loading
  useEffect(() => {
    const storedGroups = JSON.parse(localStorage.getItem("groups")) || [];
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || {};

    setGroups(storedGroups);
    setNotes(storedNotes);
  }, []);

  // Save data to localStorage on Group change
  useEffect(() => {
    localStorage.setItem("groups", JSON.stringify(groups));
  }, [groups]);

  // Save data to localStorage when notes change
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // Add a new group
  const addGroup = (name, color) => {
    const exists = groups.some(
      (group) => group.name.trim().toLowerCase() === name.trim().toLowerCase()
    );

    if (exists) {
      alert("Group already exists !!");
      return;
    }

    const id = Date.now().toString();

    const newGroup = { id, name, color };

    setGroups((prev) => [...prev, newGroup]);

    setNotes((prev) => ({
      ...prev,
      [id]: [],
    }));
  };

  // Creating empty notes for new group
  const addNotes = (groupId, text) => {
    const now = new Date();

    const date = now.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

    const time = now.toLocaleTimeString("en-IN", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

    const newNote = {
      id: Date.now().toString(),
      text,
      date,
      time,
    };

    setNotes((prev) => ({
      ...prev,
      [groupId]: [...(prev[groupId] || []), newNote],
    }));
  };

  // Change active group
  const selectGroup = (id) => {
    setCurrentGroupId(id);
  };

  return (
    <AppContextData.Provider
      value={{ groups, notes, currentGroupId, addGroup, addNotes, selectGroup }}
    >
      {children}
    </AppContextData.Provider>
  );
};

export default AppContext;
