import React from "react";
import "./App.css";
// import Routes from "./route"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,   Route, Routes,Link } from 'react-router-dom';
import SignUp from "./features/auth/SignUp";
import Dashboard from "./features/component/Dashboard"
import ProtectiveRoute from "../src/utils/Protectiveropute"



function App(props) {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectiveRoute  Component={SignUp }  /> } />
        <Route Path='/home' Component={Dashboard}></Route>
        
      </Routes>
      </BrowserRouter>
   
    </>
  );
}

export default App;
