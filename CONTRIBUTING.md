# Contributing to CurrencyPro

Thank you for your interest in contributing to CurrencyPro! This document provides guidelines and instructions for contributing to this project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Testing Guidelines](#testing-guidelines)
- [Style Guidelines](#style-guidelines)
- [Documentation](#documentation)
- [Issue Reporting](#issue-reporting)

## Code of Conduct

This project adheres to the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [maintainer@example.com].

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

### Setup

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```sh
   git clone https://github.com/YOUR-USERNAME/currency-converter.git
   cd currency-converter
   ```
3. Add the original repository as an upstream remote:
   ```sh
   git remote add upstream https://github.com/original-owner/currency-converter.git
   ```
4. Install dependencies:
   ```sh
   npm install
   ```
5. Setup pre-commit hooks:
   ```sh
   npm run prepare
   ```

## Development Workflow

1. Create a new branch from `develop`:
   ```sh
   git checkout develop
   git pull upstream develop
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and ensure they adhere to our coding standards:
   ```sh
   npm run lint
   npm run test
   ```

3. Push your branch to your fork:
   ```sh
   git push -u origin feature/your-feature-name
   ```

4. Create a pull request from your branch to the original repository's `develop` branch.

## Commit Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification. This leads to more readable messages that are easy to follow when looking through the project history.

### Commit Message Format

Each commit message consists of a **header**, a **body**, and a **footer**:

```
<type>(<scope>): <subject>

<body>

<footer>
```

Examples:

```
feat(converter): add support for historical exchange rates

This adds the ability to view exchange rates from past dates.

Closes #123
```

```
fix(api): handle rate limit errors gracefully

Implements proper error handling when the API rate limit is exceeded.

Fixes #456
```

### Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, etc.)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **chore**: Changes to the build process or auxiliary tools and libraries

### Using Commitizen

This project is configured to use [Commitizen](https://github.com/commitizen/cz-cli) to help format commit messages.

```sh
npm run commit
```

## Pull Request Process

1. Ensure your code follows the style guidelines of this project.
2. Update the README.md with details of changes to the interface, if applicable.
3. The PR should work on all supported Node.js versions.
4. Include tests for any new functionality.
5. Update documentation as needed.
6. The PR must pass all CI checks before it will be reviewed.
7. At least one maintainer must approve your PR before it can be merged.

## Testing Guidelines

- Write tests for all new features and bug fixes.
- Ensure all tests pass before submitting a PR.
- Aim for high test coverage, especially for critical code paths.

```sh
npm run test        # Run tests
npm run test:watch  # Run tests in watch mode
npm run test:coverage # Run tests with coverage report
```

## Style Guidelines

We use ESLint and Prettier to maintain code quality:

```sh
npm run lint     # Check code style
npm run format   # Format code
```

### TypeScript Standards

- Use `interface` for object types unless you specifically need `type` features.
- Prefer explicit types over implicit ones.
- Use React function components with explicit return types.

## Documentation

- Document all public functions, classes, and components.
- Update relevant documentation when making changes.
- Use JSDoc-style comments for code documentation.

## Issue Reporting

Before creating a new issue, please:

1. Check the existing issues to avoid duplicates.
2. Use the provided issue templates.
3. Include as much information as possible (OS, browser version, etc.).
4. Include steps to reproduce the issue.
5. Include screenshots if applicable.

---

Thank you for contributing to CurrencyPro!