// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Nopage from "./pages/Nopage";
import GeneralDetails from "./pages/GeneralDetails";
import Guidelines from "./pages/Guidelines";
import FullstackRoadmap from "./pages/Fullstack";
import CybersecurityRoadmap from "./pages/Cybersecurity";
import DataAnalystRoadmap from "./pages/Dataanalyst";
import GameDevRoadmap from "./pages/Gamedeveloper";
import MachineLearningRoadmap from "./pages/Machinelearning";
import Aboutus from "./pages/Aboutus";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home/>}/>
          <Route path="/home" element = {<Home/>} />
          <Route path="/signin" element = {<Signin/>} />
          <Route path="/signup" element = {<Signup/>} />
          <Route path="/details" element = {<GeneralDetails/>} />
          <Route path="/guide" element = {<Guidelines/>} />
          <Route path="/fullstack" element={<FullstackRoadmap/>}/>
          <Route path="/cybersecurity" element={<CybersecurityRoadmap/>}/>
          <Route path="/dataanalyst" element={<DataAnalystRoadmap/>}/>
          <Route path="/gamedev" element={<GameDevRoadmap/>}/>
          <Route path="/machinelearning" element={<MachineLearningRoadmap/>}/>
          <Route path="/Aboutus" element={<Aboutus/>}/>
          <Route path="*" element = {<Nopage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}


