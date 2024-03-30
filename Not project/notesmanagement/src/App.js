import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import NoteList from "./component/NoteList";
import AppNavbar from "./component/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.css";


function App() {
  return (
    <BrowserRouter>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<NoteList />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
