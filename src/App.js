import React from "react";
import {Routes,Route} from "react-router-dom";
import { Home } from "./UI/screens/Home";
import { Login } from "./UI/screens/Login";
import { Register } from "./UI/screens/Register";

export default function App() {
    return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
      </Routes>
    )
  }