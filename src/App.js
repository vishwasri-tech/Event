import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import EventHero from "./Components/Hero";
import WhatsHappening from "./Components/WhatsHappening";
import RegisterSection from "./Components/Register";
import WhyAttend from "./Components/WhyAttend";
import ContactSection from "./Components/Contact";
import RegisterPage1 from "./Components/Register1";
import RegisterPage2 from "./Components/Register2";
import Stalls from "./Components/Stalls";
import Sponsorship from "./Components/Sponsorship";
import BuyTickets from "./Components/Tickets";
import RegistrationSuccess from "./Components/Success";
import RegistrationCard from "./Components/CompleteRegistration";
import RegistrationSuccess1 from "./Components/Registrationsuccess";
import RefundPolicy from "./Components/Refund";
import SuccessPage from "./Components/SuccessPage";

import "./App.css";
import PrivacyPolicy from "./Components/Privacy";
import TermsConditions from "./Components/Terms";
import TicketForm from "./Components/TicketForm";
import RegistrationDisplay from "./Components/RegistrationDisplay";
import Footer from "./Components/Footer";
import AboutEvent from "./Components/About";
import PaymentPage from "./Components/PaymentPage";
import TicketCard from "./Components/TicketCard";
import TicketBuy from "./Components/BuyTickets";
import TicketForm1 from "./Components/TicketForm1";

function App() {
  return (
    <Router basename="/Event-frontend">
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
                <AboutEvent />
                <ContactSection />

                <Footer />
              </>
            }
          />

          {/* ✅ Registration Page 1 */}
          <Route path="/register" element={<RegisterPage1 />} />

          {/* ✅ Optional: Registration Page 2 (if you want to navigate next step) */}
          <Route path="/register/competition" element={<RegisterPage2 />} />
          <Route path="/stalls" element={<Stalls />} />
          <Route path="/sponsorship" element={<Sponsorship />} />
          <Route path="/tickets" element={<BuyTickets />} />
          <Route path="/completeregistration" element={<RegistrationCard />} />
          <Route path="/success" element={<RegistrationSuccess />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route
            path="/registrationsuccess"
            element={<RegistrationSuccess1 />}
          />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/ticketform" element={<TicketForm />} />
          <Route
            path="/registrationdisplay"
            element={<RegistrationDisplay />}
          />
          <Route path="/paymentpage" element={<PaymentPage />} />
          <Route path="/successpage" element={<SuccessPage />} />
          <Route path="/ticketcard" element={<TicketCard />} />
          <Route path="/TicketBuy" element={<TicketBuy />} />
          <Route path="/ticketform1" element={<TicketForm1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
