import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../shared/Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Job Opportunities', path: '/jobs' },
    { title: 'Resources', path: '/resources' },
    { title: 'Events', path: '/events' },
    { title: 'Contact', path: '/contact' },
  ];

  const activeClass = 'text-orange-600 font-semibold';
  const normalClass = 'text-gray-700 hover:text-orange-600 transition-colors duration-300';

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-white/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          <Logo className="h-12 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => (isActive ? activeClass : normalClass)}
              end={item.path === '/'}
            >
              {item.title}
            </NavLink>
          ))}
          <a 
            href="https://chat.whatsapp.com/LxA5xaAdlKp3nvZmIGxLcp" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Join Community
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden z-50" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full justify-center items-center space-y-8 py-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => 
                  `text-xl ${isActive ? activeClass : normalClass}`
                }
                onClick={closeMenu}
                end={item.path === '/'}
              >
                {item.title}
              </NavLink>
            ))}
            <a 
              href="https://chat.whatsapp.com/LxA5xaAdlKp3nvZmIGxLcp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary mt-4"
              onClick={closeMenu}
            >
              Join Community
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;