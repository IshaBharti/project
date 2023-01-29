import React from "react";
import "./App.css";
// import router from "./route"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import SignUp from "./features/component/SignUp";
import Login from "./features/component/Login";
import ProtectiveRoute from "../src/utils/Protectiveropute"
import { useHistory } from "react-router-dom";




function App(props) {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectiveRoute Component={SignUp} />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
