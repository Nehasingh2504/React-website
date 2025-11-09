import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './my_components/Header'
import ServicesPage from './my_components/ServicesPage'
import AboutPage from './my_components/AboutPage'
import Home from './my_components/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from './my_components/Contact'

function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
