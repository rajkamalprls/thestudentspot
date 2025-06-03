import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import JobOpportunities from './pages/JobOpportunities';
import Resources from './pages/Resources';
import Events from './pages/Events';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Service Pages
import CareerGuidance from './pages/services/CareerGuidance';
import ResumeBuilding from './pages/services/ResumeBuilding';
import Mentorship from './pages/services/Mentorship';

// New Login Page import
import LoginPage from './pages/LoginPage';

// Scroll to top wrapper component
function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/jobs" element={<JobOpportunities />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
          

            {/* Service Routes */}
            <Route path="/services/career-guidance" element={<CareerGuidance />} />
            <Route path="/services/resume-building" element={<ResumeBuilding />} />
            <Route path="/services/mentorship" element={<Mentorship />} />

            {/* Login Route */}
            <Route path="/login" element={<LoginPage />} />

            {/* Catch-all Not Found */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
