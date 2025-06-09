import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import ThemeToggle from './ThemeToggle';
import AnimatedButton from './AnimatedButton';
import logo from '../assets/logo.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'À Propos', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-fazag-bg-dark/95 backdrop-blur-md shadow-md' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="flex items-center justify-center w-32 h-32 group-hover:scale-105 transition-transform duration-300">
              <img src={logo} alt="FAZAG Logo" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-fazag-dark-blue dark:text-fazag-light-grey hover:text-fazag-green-500 dark:hover:text-fazag-green-400 font-medium transition-colors duration-200 relative group ${
                  location.pathname === link.path ? 'text-fazag-green-500 dark:text-fazag-green-400' : ''
                }`}
              >
                {link.name}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-fazag-green-500 dark:bg-fazag-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
            <AnimatedButton variant="primary" size="sm">
              Contactez-nous
            </AnimatedButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-3 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-fazag-dark-blue dark:text-fazag-light-grey hover:text-fazag-green-500 dark:hover:text-fazag-green-400 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <nav className="py-4 space-y-4 bg-white dark:bg-fazag-bg-dark rounded-b-lg shadow-lg">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-2 text-fazag-dark-blue dark:text-fazag-light-grey hover:text-fazag-green-500 dark:hover:text-fazag-green-400 font-medium transition-all duration-200 transform translate-x-0 ${
                  isMenuOpen ? 'animate-slide-in-left' : ''
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <AnimatedButton variant="primary" size="sm" className="w-full">
                Contactez-nous
              </AnimatedButton>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;