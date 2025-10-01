import React from 'react';
import EventHero from './Components/Hero';
import WhatsHappening from './Components/WhatsHappening';
import RegisterSection from './Components/Register';

import './App.css';

function App() {
  return (
    <div className="App">
      <>
      <EventHero />
      <WhatsHappening />
      <RegisterSection />
      </>
    
    </div>
  );
}

export default App;
