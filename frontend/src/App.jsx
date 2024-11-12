// src/App.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import Aboutus from './pages/Aboutus';
import Nopage from "./pages/Nopage";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import GeneralDetails from "./pages/GeneralDetails";
import Guidelines from "./pages/Guidelines";
import PredefinedRoadmap from "./pages/PredefinedRoadmap";
import CustomizedRoadmap from "./pages/CustomizedRoadmap";
import GeneratedAnswer from "./pages/GeneratedAnswer";
import Dashboard from './pages/Dashboard';
import ProfilePage from './pages/ProfilePage';


const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element = {<Signin/>} />
        <Route path="/signup" element = {<Signup/>} />
        <Route path="/details" element = {<GeneralDetails/>} />
        <Route path="/guide" element = {<Guidelines/>} />
        <Route path="/predefinedroadmap" element = {<PredefinedRoadmap/>} />
        <Route path="/customizedroadmap" element = {<CustomizedRoadmap/>} />
        <Route path="/generated-answer" element = {<GeneratedAnswer/>} />
        <Route path="/aboutus" element={<Aboutus/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/profilepage' element={<ProfilePage/>}/>
        <Route path="*" element = {<Nopage/>} />
      </Routes>
    </Router>
  );
};

export default App;
