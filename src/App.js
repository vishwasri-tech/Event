import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import EventHero from './Components/Hero';
import WhatsHappening from './Components/WhatsHappening';
import RegisterSection from './Components/Register';
import WhyAttend from './Components/WhyAttend';
import ContactSection from './Components/Contact';
import RegisterPage1 from './Components/Register1'; // ✅ import new Register Page 1
import RegisterPage2 from './Components/Register2'; // ✅ optional: second registration step
import Stalls from './Components/Stalls';
import Sponsorship from './Components/Sponsorship';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* ✅ Main Landing Page */}
          <Route
            path="/"
            element={
              <>
                <EventHero />
                <WhatsHappening />
                <RegisterSection />
                <WhyAttend />
                <ContactSection />
              </>
            }
          />

          {/* ✅ Registration Page 1 */}
          <Route path="/register" element={<RegisterPage1 />} />

          {/* ✅ Optional: Registration Page 2 (if you want to navigate next step) */}
          <Route path="/register/competition" element={<RegisterPage2 />} />
            <Route path="/stalls" element={<Stalls/>} />
              <Route path="/sponsorship" element={<Sponsorship/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
