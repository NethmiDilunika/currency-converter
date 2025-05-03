# CurrencyPro - Enterprise-Grade Currency Converter

An enterprise-level currency conversion Micro SaaS application built with React, TypeScript, and modern DevOps practices.

![Currency Converter Screenshot](https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)

## 🚀 Features

- Real-time currency conversion using external exchange rate API
- Support for 170+ global currencies
- Responsive design optimized for all devices
- Comprehensive CI/CD pipeline with GitHub Actions
- Enterprise-grade security practices
- Complete documentation following industry standards

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
- [Architecture](#architecture)
- [Development Process](#development-process)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [Security](#security)
- [License](#license)

## 🌟 Project Overview

CurrencyPro is a Micro SaaS application that provides currency conversion services using real-time exchange rates. This project was built as part of the Advanced DevOps Practices for Enterprise-Scale Micro SaaS Development course, demonstrating comprehensive DevOps workflows, security practices, and operational excellence.

### Core Features

- **Currency Conversion**: Convert between any of the 170+ supported currencies
- **Real-time Exchange Rates**: Access up-to-date exchange rates from reliable sources
- **Historical Data**: View historical exchange rate data for analysis
- **Developer API**: RESTful API for integration with other applications
- **Enterprise Security**: Comprehensive security measures including SAST/DAST

## 🏁 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/currency-converter.git
cd currency-converter
```

2. Install dependencies:

```bash
npm install
# or
yarn
```

### Running Locally

1. Start the development server:

```bash
npm run dev
# or
yarn dev
```

2. Open your browser and navigate to `http://localhost:5173`

## 🏛️ Architecture

This application follows a modern, component-based architecture using React and TypeScript. For more details, see the [Architecture Decision Records](./ADR.md).

### Technology Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **State Management**: React Query
- **Testing**: Vitest, React Testing Library
- **CI/CD**: GitHub Actions
- **Deployment**: Netlify/Vercel

## 🔄 Development Process

This project uses a robust Git workflow with Conventional Commits, automated changelog generation, and comprehensive CI/CD pipeline. For more information, see the [Technical Design Document](./TDD.md).

## 📚 Documentation

- [Product Requirements Document](./PRD.md)
- [Technical Design Document](./TDD.md)
- [Service Level Objectives](./SLO.md)
- [Operations Runbook](./RUNBOOK.md)
- [Architecture Decision Records](./ADR.md)
- [API Documentation](./API.md)
- [Security Documentation](./SECURITY.md)

## 🤝 Contributing

Please read our [Contributing Guidelines](./CONTRIBUTING.md) and [Code of Conduct](./CODE_OF_CONDUCT.md) before submitting a pull request.

## 🔒 Security

For security issues, please review our [Security Policy](./SECURITY.md).

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.