import { lazy, Suspense } from 'react';
import './App.css'
import { Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';


const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const Gallery = lazy(() => import('./pages/Gallery/Gallery'));
const Contacts = lazy(() => import('./pages/Contacts/Contacts'));
const AboutUs = lazy(() => import('./pages/AboutUs/AboutUs'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));
const Services = lazy(() => import('./pages/Services/Services'));


function App() {
  return (
  <Suspense fallback={<div>Loading...</div>}>
     <Header />   
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/gallery" element={<Gallery />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/services" element={<Services />} />
      <Route path="*" element={<NotFound />} />
    </Routes>   
  </Suspense>
  )
}

export default App
