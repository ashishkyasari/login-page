import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Route, Router, Routes } from 'react-router-dom';
import About from './components/About';
import Login from './components/Login';
import Contact from './components/Contact';
import Registration from './components/Registration';
import Docinput from './components/Docinput';


function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/Registration" element={<Registration/>}/>
          <Route exact path="/Docinput" element={<Docinput/>}/>
        </Routes>
    </>
  );
}

export default App;
