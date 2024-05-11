
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Landing from './landing/Landing';
import Feature from './feature/Feature';
import Footer from './footer/Footer';

function page() {
  return (
    <div className="pt-[10vh]">
      <Navbar />
      <Landing />
      <Feature />
      <Footer />
      
    </div>
  )}



export default page;
