import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Pages from first snippet
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard'; // Your dashboard component
import HomePage from './pages/HomePage'; // Your home component

// Pages from second snippet
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

// Scroll to top on route change
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
      {/* Header is always shown */}
      <Header />
      
      <Routes>
        {/* Routes from first snippet */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Routes from second snippet */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/jobs" element={<JobOpportunities />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />

        {/* Service Routes */}
        <Route path="/services/career-guidance" element={<CareerGuidance />} />
        <Route path="/services/resume-building" element={<ResumeBuilding />} />
        <Route path="/services/mentorship" element={<Mentorship />} />

        {/* Catch all */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
