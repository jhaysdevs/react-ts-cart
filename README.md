# 🛒 React Shopping Cart

A modern, type-safe e-commerce application built with React 19, TypeScript, and Vite 7. Features a responsive shopping cart with real-time product data, persistent state management, and smooth animations. Demonstrates clean architecture patterns, React Context state management, and professional UI/UX design.

## 🚀 Tech Stack

### Core Technologies

- **React 19.1.1** - Modern UI library with hooks and functional components
- **TypeScript 5.9.2** - Type safety and enhanced developer experience
- **Vite 7.1.5** - Lightning-fast build tool and development server
- **React Router DOM 7.8.2** - Client-side routing and navigation

### UI & Styling

- **Bootstrap 5.3.8** - Responsive CSS framework for modern UI components
- **React Bootstrap 2.10.10** - Bootstrap components built for React
- **Sass 1.92.1** - CSS preprocessor for advanced styling and animations
- **React Masonry CSS 1.0.16** - Responsive grid layout for product display

### Development Tools

- **ESLint 9.35.0** - Code linting with TypeScript-aware rules
- **Prettier 3.6.2** - Code formatting with import sorting
- **Prettier Plugin Sort Imports 1.8.8** - Automatic import organization
- **pnpm** - Fast, disk space efficient package manager

## 📁 Project Structure

```
react-ts-cart/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── AnimatedCartItem.tsx    # Animated cart item with smooth transitions
│   │   ├── AnimatedStoreItem.tsx   # Animated product card with hover effects
│   │   ├── CartItem.tsx            # Individual cart item display
│   │   ├── Navbar.tsx              # Navigation header with cart icon
│   │   └── ShoppingCart.tsx        # Cart sidebar/modal component
│   ├── context/             # React Context for state management
│   │   ├── ProductsContext.tsx     # Product data from API
│   │   └── ShoppingCartContext.tsx # Cart state and operations
│   ├── hooks/               # Custom React hooks
│   │   ├── useLocalStorage.ts      # Local storage persistence
│   │   └── useProducts.ts          # API data fetching with pagination
│   ├── pages/               # Route components
│   │   ├── About.tsx        # About page with company information
│   │   ├── Cart.tsx         # Shopping cart page
│   │   ├── Checkout.tsx     # Multi-step checkout process
│   │   ├── CheckoutSuccess.tsx # Order confirmation page
│   │   ├── Home.tsx         # Landing page with featured products
│   │   ├── Privacy.tsx      # Privacy policy page
│   │   ├── ProductDetail.tsx # Individual product detail page
│   │   └── Store.tsx        # Product catalog with masonry grid
│   ├── styles/              # SCSS styling system
│   │   ├── pages/           # Page-specific styles
│   │   │   ├── About.scss           # About page styles with hero section and animations
│   │   │   ├── Cart.scss            # Shopping cart page styles and item animations
│   │   │   ├── Checkout.scss        # Checkout page styles with form validation and progress steps
│   │   │   ├── Home.scss            # Landing page styles with hero and feature sections
│   │   │   ├── Privacy.scss         # Privacy policy page styles and layout
│   │   │   ├── ProductDetail.scss   # Product detail page with image and info cards
│   │   │   └── Store.scss           # Product catalog styles with masonry grid
│   │   ├── keyframes.scss   # Animation keyframes
│   │   ├── main.scss        # Main stylesheet imports
│   │   ├── masonry.scss     # Masonry grid layout styles
│   │   ├── utilities.scss   # Utility classes and mixins
│   │   └── variables.scss   # SCSS variables and theming
│   ├── types/               # TypeScript type definitions
│   │   └── checkout.ts      # Checkout form data and validation types
│   ├── utilities/           # Helper functions
│   │   ├── formatCurrency.ts # Currency formatting utility
│   │   └── validation.ts    # Form validation utilities and formatters
│   ├── utils/               # Additional utility functions
│   ├── App.tsx              # Main application component
│   └── main.tsx             # Application entry point
├── .vscode/                 # VS Code workspace settings
│   └── settings.json        # Format on save and linting configuration
├── .prettierrc              # Code formatting configuration
├── eslint.config.cjs        # ESLint configuration
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite build configuration
└── package.json             # Dependencies and scripts
```

## ✨ Features

### Shopping Cart Functionality

- **Add/Remove Items** - Increase/decrease quantities or remove items completely
- **Persistent Storage** - Cart state persists across browser sessions using localStorage
- **Real-time Updates** - Cart quantity updates immediately in the navbar
- **Animated Interactions** - Smooth transitions and hover effects for cart items
- **Responsive Design** - Works seamlessly on desktop and mobile devices

### Product Catalog

- **Dynamic Product Data** - Fetches 1,400+ products from [JSONFakery API](https://jsonfakery.com/products) with real-time data
- **Product Images** - High-quality Unsplash images for each item
- **Price Display** - Formatted currency display with proper localization
- **Masonry Grid Layout** - Responsive product grid with React Masonry CSS
- **Animated Product Cards** - Smooth hover effects and transitions
- **Pagination Support** - Load more products with infinite scroll capability
- **Loading States** - Proper loading spinners and error handling with retry functionality
- **Error Recovery** - Graceful error handling with user-friendly retry options

### User Experience

- **Off-canvas Cart** - Slide-out cart panel for easy access
- **Navigation** - Clean navbar with cart icon and quantity indicator
- **Multiple Pages** - Home, Store, Cart, Checkout, Product Detail, About, and Privacy pages
- **Checkout Pipeline** - Complete multi-step checkout with validation and payment processing
- **Smooth Animations** - CSS keyframes and transitions for enhanced UX
- **Type Safety** - Full TypeScript coverage for better development experience
- **Code Quality** - ESLint and Prettier integration with format on save

## 🛒 Checkout Pipeline

The application features a comprehensive, multi-step checkout process designed for a professional e-commerce experience with robust validation and user-friendly interactions.

### Checkout Flow Overview

```
Cart Page → Checkout Page → Payment Processing → Success Page
    ↓            ↓              ↓                ↓
View Items → Fill Forms → Process Payment → Order Confirmation
```

### Multi-Step Checkout Process

#### **Step 1: Shipping Information**
- **Personal Details**: First name, last name, email, phone number
- **Delivery Address**: Street address, city, state, ZIP code, country
- **Options**: Save information for future purchases
- **Validation**: Real-time form validation with immediate feedback

#### **Step 2: Payment Information**
- **Card Details**: Cardholder name, card number, expiry date, CVV
- **Security**: Encrypted payment processing simulation
- **Validation**: Credit card validation using Luhn algorithm
- **Formatting**: Automatic formatting for card numbers, expiry dates, and phone numbers

#### **Step 3: Review & Confirm**
- **Order Summary**: Complete review of items, pricing, and delivery details
- **Payment Method**: Masked card information display
- **Special Instructions**: Optional delivery notes
- **Newsletter**: Optional subscription signup

### Validation & Security Features

#### **Form Validation**
- **Email Validation**: Regex-based email format checking
- **Phone Validation**: Multiple format support with automatic formatting
- **Credit Card Validation**: Luhn algorithm for card number verification
- **CVV Validation**: 3-4 digit security code validation
- **Expiry Date Validation**: MM/YY format with future date checking
- **ZIP Code Validation**: US format (12345 or 12345-6789)
- **Required Fields**: Comprehensive required field validation

#### **Input Formatting**
- **Card Numbers**: Automatic spacing (1234 5678 9012 3456)
- **Expiry Dates**: Automatic slash insertion (MM/YY)
- **Phone Numbers**: US format formatting (555) 123-4567
- **Real-time Feedback**: Immediate validation as user types

### Order Processing

#### **Payment Simulation**
- **Processing Time**: 2-second simulated payment processing
- **Success Rate**: 90% success rate for realistic testing
- **Error Handling**: Graceful failure handling with retry options
- **Loading States**: Professional loading spinners and progress indicators

#### **Order Management**
- **Order Numbers**: Unique timestamp-based order ID generation
- **Cart Clearing**: Automatic cart clearing upon successful payment
- **Order Summary**: Complete order details with pricing breakdown
- **Confirmation**: Detailed order confirmation with next steps

### Pricing & Calculations

#### **Dynamic Pricing**
- **Subtotal**: Sum of all cart items
- **Tax Calculation**: 8% tax rate applied to subtotal
- **Shipping**: Free shipping over $50, $9.99 otherwise
- **Gift Wrap**: Optional $5.99 gift wrapping service
- **Total**: Complete order total with all fees

#### **Order Summary Features**
- **Itemized Breakdown**: Detailed pricing for each component
- **Free Shipping Indicator**: Visual badge for qualifying orders
- **Real-time Updates**: Dynamic recalculation as options change
- **Currency Formatting**: Professional currency display

### User Experience Features

#### **Progress Tracking**
- **Visual Progress Bar**: Step-by-step progress indicator
- **Step Navigation**: Previous/Next buttons with validation
- **Completion States**: Visual feedback for completed steps
- **Responsive Design**: Mobile-optimized checkout experience

#### **Error Handling**
- **Field-level Validation**: Individual field error messages
- **Form-level Validation**: Complete form validation before submission
- **Payment Errors**: User-friendly payment failure messages
- **Retry Mechanisms**: Easy retry options for failed operations

#### **Accessibility**
- **Form Labels**: Proper labeling for screen readers
- **Error Announcements**: Accessible error message delivery
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Proper focus handling throughout the process

### Technical Implementation

#### **TypeScript Integration**
```typescript
interface CheckoutFormData {
  // Personal Information
  firstName: string
  lastName: string
  email: string
  phone: string
  
  // Shipping Address
  address: string
  city: string
  state: string
  zipCode: string
  country: string
  
  // Payment Information
  cardNumber: string
  expiryDate: string
  cvv: string
  cardholderName: string
  
  // Additional Options
  saveInfo: boolean
  newsletter: boolean
  giftWrap: boolean
  specialInstructions: string
}
```

#### **Validation Utilities**
- **Luhn Algorithm**: Credit card number validation
- **Regex Patterns**: Email, phone, and format validation
- **Date Validation**: Expiry date future validation
- **Format Functions**: Automatic input formatting utilities

#### **State Management**
- **Form State**: React state management for form data
- **Validation State**: Real-time validation error tracking
- **Loading States**: Processing and submission state management
- **Cart Integration**: Seamless integration with existing cart context

### Success Page Features

#### **Order Confirmation**
- **Success Animation**: Animated checkmark with bounce effect
- **Order Details**: Complete order summary with itemized breakdown
- **Order Number**: Unique order identifier for tracking
- **Next Steps**: Clear information about what happens next

#### **Post-Purchase Actions**
- **Continue Shopping**: Easy return to product catalog
- **Order Tracking**: Placeholder for order tracking functionality
- **Email Confirmation**: Information about email notifications
- **Support Contact**: Easy access to customer support

### Checkout Routes

The application includes dedicated routes for the complete checkout experience:

```typescript
// Main checkout flow routes
<Route path='/checkout' element={<Checkout />} />
<Route path='/checkout/success' element={<CheckoutSuccess />} />
```

**Route Flow:**
1. **`/cart`** - Shopping cart page with "Proceed to Checkout" button
2. **`/checkout`** - Multi-step checkout form with validation
3. **`/checkout/success`** - Order confirmation and success page

**Navigation Guards:**
- Checkout page redirects to cart if no items are present
- Success page redirects to home if accessed without order data
- Cart integration ensures seamless flow between pages

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

The project uses ESLint 9 with type-aware rules for production-grade code quality:

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

- ESLint 9 with modern flat config format
- TypeScript-aware linting with `@typescript-eslint/recommended-type-checked`
- React-specific rules with `eslint-plugin-react-hooks`
- Strict type checking for better code quality

### Prettier Configuration

Custom formatting rules with automatic import sorting:

```json
{
  "singleQuote": true,
  "trailingComma": "es5",
  "arrowParens": "always",
  "tabWidth": 2,
  "useTabs": false,
  "printWidth": 100,
  "bracketSpacing": true,
  "jsxSingleQuote": true,
  "quoteProps": "as-needed",
  "bracketSameLine": true,
  "semi": false,
  "plugins": ["prettier-plugin-sort-imports"],
  "sortingMethod": "alphabetical",
  "overrides": [
    {
      "files": ["*.htm", "*.html", "*.css", "*.less"],
      "options": {
        "singleQuote": false
      }
    }
  ]
}
```

**Features:**
- Automatic import sorting with alphabetical ordering
- Single quotes for JavaScript/TypeScript and SCSS
- Double quotes for HTML and CSS files
- Format on save integration with VS Code

## 🔌 API Data Structure

The application integrates with [JSONFakery](https://jsonfakery.com/products) to fetch realistic product data:

```typescript
// Product structure from JSONFakery API
export type Product = {
  id: string                    // UUID format
  name: string                  // Product name
  price: number                 // Product price
  image: string                 // Unsplash image URL
  description: string           // Product description
  manufacturer: string          // Brand/manufacturer
  product_category: {
    id: string                  // Category ID
    name: string                // Category name
    created_at: string          // Creation timestamp
    updated_at: string          // Last update timestamp
  }
  created_at: string            // Product creation timestamp
  updated_at: string            // Product last update timestamp
}
```

**Key Features:**

- **1,400+ Products** - Large dataset for realistic testing
- **High-Quality Images** - Unsplash integration for professional product photos
- **Diverse Categories** - Multiple product categories and manufacturers
- **Realistic Data** - Proper product names, descriptions, and pricing

## 🎯 Key Implementation Details

### State Management

- **React Context API** - Centralized cart and product state management
- **Custom Hooks** - `useShoppingCart()` and `useProductsContext()` for easy access
- **Local Storage** - Persistent cart data across sessions
- **API Integration** - Real-time product data from JSONFakery API with automatic retry
- **Data Transformation** - Seamless UUID to numeric ID conversion for cart compatibility

### Component Architecture

- **Functional Components** - Modern React patterns with hooks
- **TypeScript Interfaces** - Strict typing for all props and state
- **Bootstrap Integration** - Responsive UI components

### API Integration

- **JSONFakery API** - External product data source with 1,400+ realistic products
- **Error Handling** - Comprehensive error states with user-friendly retry mechanisms
- **Loading States** - Smooth loading experience with Bootstrap spinners
- **Data Mapping** - Automatic transformation between API format and component interfaces
- **ID Conversion** - Seamless handling of UUID strings to numeric IDs for cart operations

### Performance Optimizations

- **Vite 7 HMR** - Fast development with hot module replacement
- **SWC Compiler** - Fast TypeScript compilation with @vitejs/plugin-react-swc
- **Optimized Builds** - Production-ready bundle optimization
- **Context Optimization** - Efficient state management with minimal re-renders

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
