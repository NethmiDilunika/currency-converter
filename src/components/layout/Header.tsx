import React from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-primary-500 text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-xl font-bold transition-transform duration-300 hover:scale-105"
            aria-label="Currency Converter Home"
          >
            <DollarSign className="text-accent-400" size={28} />
            <span>CurrencyPro</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link 
              to="/" 
              className="hover:text-accent-400 transition-colors duration-300"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="hover:text-accent-400 transition-colors duration-300"
            >
              About
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 space-y-3 animate-fadeIn">
            <Link 
              to="/" 
              className="block py-2 hover:text-accent-400 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block py-2 hover:text-accent-400 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;