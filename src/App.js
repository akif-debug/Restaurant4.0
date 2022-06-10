import React from 'react'
import Navbar from './components/Home/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import Hero from './components/Home/Hero/Hero';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Hero />
        <Routes>
          <Route path='home' element='<Hero/>'></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
