import { Suspense } from 'react';
import './App.css'
import { Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import Gallery from './pages/Gallery/Gallery';
import Contacts from './pages/Contacts/Contacts';
import AboutUs from './pages/AboutUs/AboutUs';
import Services from './pages/Services/Services';
// import NotFound from './pages/NotFound/NotFound';


function App() {
  return (
    <div>
  <Suspense fallback={<div>Loading...</div>}>
     <Header />   
      <HomePage />
      <AboutUs />
      <Gallery />
      <Contacts />
      <Services />
        {/* <NotFound /> */}
  </Suspense>      
    </div>

  )
}

export default App
