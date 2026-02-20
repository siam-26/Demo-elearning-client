import React from 'react'
import "./App.css";
import Navbar from './shared_pages/Navbar';
import Home from './pages/Homepage/Home/Home';
import Footer from './shared_pages/Footer';
import { RouterProvider } from 'react-router';
import router from './Routes/Routes';


const App = () => {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App

