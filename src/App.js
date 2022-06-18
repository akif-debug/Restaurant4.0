import React from 'react'
import Navbar from './components/Home/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import Hero from './components/Home/Hero/Hero';
import HomeMenu from './components/Home/HomeMenu/HomeMenu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Testi from './components/Home/Testi/Testi';
import Blogs from './components/Home/Blogs/Blogs';
import Aud from './components/Home/Music/Music';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Hero />
        <HomeMenu/>
        <Testi/>
        <Blogs/>
        {/* <Aud/> */}
        <Routes>
          <Route path='home' element='<Hero/>'></Route>
        </Routes>
      </Router>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/>{/* <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> */}
    </>
  );
}

export default App;
