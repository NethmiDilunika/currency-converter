import React from 'react';
import { Shield, Zap, Code, Globe } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">About CurrencyPro</h1>
        <p className="text-lg text-gray-600">
          A powerful, enterprise-grade currency conversion service built with modern DevOps practices.
        </p>
      </section>

      <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Our Mission</h2>
        <p className="text-gray-700 mb-4">
          CurrencyPro was built to demonstrate advanced DevOps practices while providing valuable functionality. 
          Our currency converter provides real-time exchange rates for global currencies, helping users make informed decisions.
        </p>
        <p className="text-gray-700">
          This application implements enterprise-grade development workflows, security practices, and operational excellence 
          as part of the Advanced DevOps Practices for Enterprise-Scale Micro SaaS Development course.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Key Features</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:scale-105 duration-300">
            <div className="flex items-center mb-4">
              <Globe className="text-primary-500 mr-3" size={24} />
              <h3 className="text-xl font-semibold text-gray-800">Global Coverage</h3>
            </div>
            <p className="text-gray-700">
              Support for 170+ global currencies with real-time and historical exchange rates.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:scale-105 duration-300">
            <div className="flex items-center mb-4">
              <Zap className="text-primary-500 mr-3" size={24} />
              <h3 className="text-xl font-semibold text-gray-800">Real-time Data</h3>
            </div>
            <p className="text-gray-700">
              Up-to-date exchange rates sourced from reliable financial data providers.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:scale-105 duration-300">
            <div className="flex items-center mb-4">
              <Code className="text-primary-500 mr-3" size={24} />
              <h3 className="text-xl font-semibold text-gray-800">Developer API</h3>
            </div>
            <p className="text-gray-700">
              RESTful API with comprehensive documentation for integration into other applications.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:scale-105 duration-300">
            <div className="flex items-center mb-4">
              <Shield className="text-primary-500 mr-3" size={24} />
              <h3 className="text-xl font-semibold text-gray-800">Enterprise Security</h3>
            </div>
            <p className="text-gray-700">
              Built with security-first approach including SAST/DAST implementation and comprehensive threat modeling.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Technology Stack</h2>
        <p className="text-gray-700 mb-4">
          This application is built using modern web technologies and follows enterprise-grade DevOps practices:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>React with TypeScript for a robust frontend</li>
          <li>Tailwind CSS for responsive and beautiful UI</li>
          <li>CI/CD pipelines with GitHub Actions</li>
          <li>Comprehensive testing suite with Vitest</li>
          <li>Conventional Commits for standardized version control</li>
          <li>Infrastructure as Code for cloud resources</li>
          <li>Observability and monitoring setup</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutPage;