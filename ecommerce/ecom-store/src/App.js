import React, { createContext, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import "./Style.css";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "./RegisterPage.jsx";
import LoginPage from "./LoginPage.jsx";
import Wishlist from "./Wishlist.js";
import Shop from "./Shop.jsx";
import Singleproduct from "./Singleproduct.jsx";

export const control = createContext();
export const user = createContext();

function App() {
  const [isLoggedIn,setLoggedIn] = useState(false)
  const [LoginUser,setLoginUser] = useState("Guest")
  return (
    <div>
      <control.Provider value={{isLoggedIn,setLoggedIn}}>
        <user.Provider value={{LoginUser,setLoginUser}}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/wishlist" element={<Wishlist />}></Route>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/single-product/:productId" element={<Singleproduct />} />
            </Routes>
          </BrowserRouter>
        </user.Provider>
      </control.Provider>
    </div>
  );
}

export default App;
