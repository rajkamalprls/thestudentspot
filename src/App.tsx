import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Events from './pages/Events';
import JobOpportunities from './pages/JobOpportunities';
import Login from './pages/Login';
import Resources from './pages/Resources';
import NotFound from './pages/NotFound';

// Service Pages
import CareerGuidance from './pages/services/CareerGuidance';
import ResumeBuilding from './pages/services/ResumeBuilding';
import Mentorship from './pages/services/Mentorship';

// Scroll-to-top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/events" element={<Events />} />
            <Route path="/jobs" element={<JobOpportunities />} />
            <Route path="/login" element={<Login />} />
            <Route path="/resources" element={<Resources />} />

            {/* Service Routes */}
            <Route path="/services/career-guidance" element={<CareerGuidance />} />
            <Route path="/services/resume-building" element={<ResumeBuilding />} />
            <Route path="/services/mentorship" element={<Mentorship />} />

            {/* Catch-all for 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
