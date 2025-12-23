import { useState } from "react";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import NotesPage from "./Pages/NotesPage/NotesPage.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/group/:id" element={<NotesPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
