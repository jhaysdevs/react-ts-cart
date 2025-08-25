# 🛒 React Shopping Cart

A modern, type-safe shopping cart application built with React, TypeScript, and Vite. This project demonstrates clean architecture patterns, state management with React Context, and a responsive UI using Bootstrap components.

## 🚀 Tech Stack

### Core Technologies

- **React 18.3.1** - Modern UI library with hooks and functional components
- **TypeScript 5.8.3** - Type safety and enhanced developer experience
- **Vite 5.4.19** - Lightning-fast build tool and development server
- **React Router DOM 6.30.1** - Client-side routing and navigation

### UI & Styling

- **Bootstrap 5.3.6** - Responsive CSS framework for modern UI components
- **React Bootstrap 2.10.10** - Bootstrap components built for React
- **Node Sass 9.0.0** - CSS preprocessor for advanced styling

### Development Tools

- **ESLint 8.57.1** - Code linting and quality enforcement
- **Prettier** - Code formatting with custom configuration
- **pnpm** - Fast, disk space efficient package manager

## 📁 Project Structure

```
react-ts-cart/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── CartItem.tsx     # Individual cart item display
│   │   ├── Navbar.tsx       # Navigation header with cart icon
│   │   ├── ShoppingCart.tsx # Cart sidebar/modal component
│   │   └── StoreItem.tsx    # Product display component
│   ├── context/             # React Context for state management
│   │   └── ShoppingCartContext.tsx # Cart state and operations
│   ├── data/                # Static data and assets
│   │   └── items.json       # Product catalog data
│   ├── hooks/               # Custom React hooks
│   │   └── useLocalStorage.ts # Local storage persistence
│   ├── pages/               # Route components
│   │   ├── About.tsx        # About page
│   │   ├── Home.tsx         # Landing page
│   │   ├── Privacy.tsx      # Privacy policy page
│   │   └── Store.tsx        # Product catalog page
│   ├── utilities/           # Helper functions
│   │   └── formatCurrency.ts # Currency formatting utility
│   ├── App.tsx              # Main application component
│   └── main.tsx             # Application entry point
├── public/
│   └── images/products/     # Product images
├── .prettierrc.json         # Code formatting configuration
├── .eslintrc.cjs           # ESLint configuration
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite build configuration
└── package.json            # Dependencies and scripts
```

## ✨ Features

### Shopping Cart Functionality

- **Add/Remove Items** - Increase/decrease quantities or remove items completely
- **Persistent Storage** - Cart state persists across browser sessions using localStorage
- **Real-time Updates** - Cart quantity updates immediately in the navbar
- **Responsive Design** - Works seamlessly on desktop and mobile devices

### Product Catalog

- **8 Sample Products** - Including electronics, furniture, accessories, and more
- **Product Images** - High-quality product photos for each item
- **Price Display** - Formatted currency display with proper localization
- **Grid Layout** - Responsive product grid using Bootstrap components

### User Experience

- **Off-canvas Cart** - Slide-out cart panel for easy access
- **Navigation** - Clean navbar with cart icon and quantity indicator
- **Multiple Pages** - Home, Store, About, and Privacy pages
- **Type Safety** - Full TypeScript coverage for better development experience

## 🛠️ Development Setup

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation & Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd react-ts-cart
   ```

2. **Install dependencies**

   ```bash
   pnpm i
   ```

3. **Start development server**

   ```bash
   pnpm dev
   ```

4. **Build for production**
   ```bash
   pnpm build
   ```

### Available Scripts

| Command        | Description                       |
| -------------- | --------------------------------- |
| `pnpm dev`     | Start development server with HMR |
| `pnpm build`   | Build for production              |
| `pnpm preview` | Preview production build locally  |
| `pnpm lint`    | Run ESLint for code quality       |
| `pnpm format`  | Format code with Prettier         |

## 🔧 Configuration

### ESLint Configuration

The project uses type-aware ESLint rules for production-grade code quality:

```js
export default {
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

**Features:**

- TypeScript-aware linting with `@typescript-eslint/recommended-type-checked`
- React-specific rules with `eslint-plugin-react`
- Strict type checking for better code quality

### Prettier Configuration

Custom formatting rules for consistent code style:

```json
{
  "singleQuote": true,
  "trailingComma": "es5",
  "arrowParens": "always",
  "tabWidth": 2,
  "printWidth": 100,
  "jsxSingleQuote": true,
  "semi": false
}
```

## 🎯 Key Implementation Details

### State Management

- **React Context API** - Centralized cart state management
- **Custom Hooks** - `useShoppingCart()` for easy cart access
- **Local Storage** - Persistent cart data across sessions

### Component Architecture

- **Functional Components** - Modern React patterns with hooks
- **TypeScript Interfaces** - Strict typing for all props and state
- **Bootstrap Integration** - Responsive UI components

### Performance Optimizations

- **Vite HMR** - Fast development with hot module replacement
- **SWC Compiler** - Fast TypeScript compilation
- **Optimized Builds** - Production-ready bundle optimization

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run `pnpm lint` and `pnpm format`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
