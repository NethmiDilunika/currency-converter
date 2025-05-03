import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center px-4">
      <AlertTriangle className="text-warning-500 mb-4" size={64} />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
      <p className="text-xl text-gray-600 mb-8 max-w-md">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link 
        to="/" 
        className="inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors duration-300"
      >
        Return to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;