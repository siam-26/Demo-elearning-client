import React from 'react'
import "./App.css";
import Navbar from './shared_pages/Navbar';
import Home from './pages/Homepage/Home/Home';
import FeaturesSection from './pages/Homepage/FeaturedSection/FeaturedSection';
import Footer from './shared_pages/Footer';
import CoursesSection from './pages/Homepage/CoursesSection/CoursesSection';


const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <FeaturesSection/>
      <CoursesSection/>
      <Footer/>
    </div>
  );
}

export default App

