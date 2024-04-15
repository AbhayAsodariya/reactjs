import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoteList from "./component/NoteList";
import AppNavbar from "./component/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Profile from "./component/Profile";
import Slogin from "./component/Slogin";
import Flogin from "./component/Flogin";


function App() {
  return (
    <BrowserRouter>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<NoteList />} />
        <Route path="/student-login" element={<Slogin />} />
        <Route path="/faculty-login" element={<Flogin />} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
