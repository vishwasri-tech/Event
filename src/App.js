import React from 'react';
import EventHero from './Components/Hero';
import WhatsHappening from './Components/WhatsHappening';
import RegisterSection from './Components/Register';
import WhyAttend from './Components/WhyAttend';

import './App.css';
import ContactSection from './Components/Contact';


function App() {
  return (
    <div className="App">
      <>
      <EventHero />
      <WhatsHappening />
      <RegisterSection />
      <WhyAttend/>
      <ContactSection/>
      </>
    
    </div>
  );
}

export default App;
