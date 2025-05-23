# 🛒 React Shopping Cart

A modern shopping cart application built with React, TypeScript, and Vite. This project demonstrates a clean, type-safe implementation of a shopping cart with a focus on performance and developer experience.

## Tech Stack

- **React** - UI Library
- **TypeScript** - Type Safety
- **Vite** - Build Tool & Development Server
- **ESLint** - Code Quality

## Features

- Type-safe shopping cart implementation
- Fast development with Vite's HMR (Hot Module Replacement)
- Modern React patterns and best practices
- Strict TypeScript configuration for better code quality

## Development Setup

This project uses Vite for an optimized development experience. Two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## ESLint Configuration

For production-grade code quality, the project uses type-aware ESLint rules:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

The configuration includes:
- TypeScript-aware linting with `@typescript-eslint/recommended-type-checked`
- React-specific rules with `eslint-plugin-react`
- Strict type checking for better code quality

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Build for production: `npm run build`
