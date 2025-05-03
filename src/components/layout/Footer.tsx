import React from 'react';
import { Github, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">CurrencyPro</h3>
            <p className="text-gray-300">
              An enterprise-grade currency conversion tool with real-time exchange rates.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/about" 
                  className="text-gray-300 hover:text-accent-400 transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-accent-400 transition-colors duration-300"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-accent-400 transition-colors duration-300"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <a 
              href="https://github.com/yourusername/currency-converter" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-gray-300 hover:text-accent-400 transition-colors duration-300"
            >
              <Github size={20} />
              <span>GitHub Repository</span>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400">
          <p className="flex items-center justify-center">
            <span>© {currentYear} CurrencyPro. Made with</span>
            <Heart className="mx-1 text-red-500" size={16} />
            <span>All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;