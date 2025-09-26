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
│   │   ├── useIntersectionObserver.ts # Intersection Observer for scroll animations
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
│   │   ├── components/      # Component-specific styles
│   │   │   └── Navbar.scss          # Navigation component styles
│   │   ├── mixins/          # SCSS mixins and functions
│   │   │   └── animations.scss      # Enterprise-level animation mixins
│   │   ├── pages/           # Page-specific styles
│   │   │   ├── About.scss           # About page styles with hero section and animations
│   │   │   ├── Cart.scss            # Shopping cart page styles and item animations
│   │   │   ├── Checkout.scss        # Checkout page styles with form validation and progress steps
│   │   │   ├── Home.scss            # Landing page styles with hero and feature sections
│   │   │   ├── Privacy.scss         # Privacy policy page styles and layout
│   │   │   ├── ProductDetail.scss   # Product detail page with image and info cards
│   │   │   └── Store.scss           # Product catalog styles with masonry grid
│   │   ├── easings.scss      # Comprehensive easing bezier curves library
│   │   ├── keyframes.scss    # Animation keyframes and @keyframes definitions
│   │   ├── main.scss         # Main stylesheet with import orchestration
│   │   ├── masonry.scss      # Masonry grid layout styles
│   │   ├── utilities.scss    # Utility classes and helper mixins
│   │   └── variables.scss    # SCSS variables, colors, and theming
│   ├── types/               # TypeScript type definitions
│   │   └── checkout.ts      # Checkout form data and validation types
│   ├── utilities/           # Helper functions
│   │   ├── formatCurrency.ts # Currency formatting utility
│   │   └── validation.ts    # Form validation utilities and formatters
│   ├── utils/               # Additional utility functions
│   ├── theme.ts             # Theme management system
│   ├── vite-env.d.ts        # Vite environment type definitions
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
  id: string // UUID format
  name: string // Product name
  price: number // Product price
  image: string // Unsplash image URL
  description: string // Product description
  manufacturer: string // Brand/manufacturer
  product_category: {
    id: string // Category ID
    name: string // Category name
    created_at: string // Creation timestamp
    updated_at: string // Last update timestamp
  }
  created_at: string // Product creation timestamp
  updated_at: string // Product last update timestamp
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

## 🎨 Animation System & Easing Functions

The application features a comprehensive animation system with enterprise-level easing functions and mixins for creating smooth, professional animations throughout the user interface.

### Easing Functions Overview

The project includes a complete library of easing bezier curves organized into categories for different animation needs:

#### **Basic Easing Curves**

```scss
// Ease in curves - slow start, fast finish
$ease-in-quad: cubic-bezier(0.55, 0.085, 0.68, 0.53);
$ease-in-cubic: cubic-bezier(0.55, 0.055, 0.675, 0.19);
$ease-in-quart: cubic-bezier(0.895, 0.03, 0.685, 0.22);
$ease-in-quint: cubic-bezier(0.755, 0.05, 0.855, 0.06);
$ease-in-sine: cubic-bezier(0.47, 0, 0.745, 0.715);
$ease-in-expo: cubic-bezier(0.95, 0.05, 0.795, 0.035);
$ease-in-circ: cubic-bezier(0.6, 0.04, 0.98, 0.34);
$ease-in-back: cubic-bezier(0.6, -0.28, 0.735, 0.045);

// Ease out curves - fast start, slow finish
$ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);
$ease-out-cubic: cubic-bezier(0.215, 0.61, 0.355, 1);
$ease-out-quart: cubic-bezier(0.165, 0.84, 0.44, 1);
$ease-out-quint: cubic-bezier(0.23, 1, 0.32, 1);
$ease-out-sine: cubic-bezier(0.39, 0.575, 0.565, 1);
$ease-out-expo: cubic-bezier(0.19, 1, 0.22, 1);
$ease-out-circ: cubic-bezier(0.075, 0.82, 0.165, 1);
$ease-out-back: cubic-bezier(0.175, 0.885, 0.32, 1.275);

// Ease in out curves - slow start and finish, fast middle
$ease-in-out-quad: cubic-bezier(0.455, 0.03, 0.515, 0.955);
$ease-in-out-cubic: cubic-bezier(0.645, 0.045, 0.355, 1);
$ease-in-out-quart: cubic-bezier(0.77, 0, 0.175, 1);
$ease-in-out-quint: cubic-bezier(0.86, 0, 0.07, 1);
$ease-in-out-sine: cubic-bezier(0.445, 0.05, 0.55, 0.95);
$ease-in-out-expo: cubic-bezier(1, 0, 0, 1);
$ease-in-out-circ: cubic-bezier(0.785, 0.135, 0.15, 0.86);
$ease-in-out-back: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

#### **Material Design Easing**

```scss
// Google Material Design easing curves
$ease-material-standard: cubic-bezier(0.4, 0, 0.2, 1); // Standard Material motion
$ease-material-decelerate: cubic-bezier(0, 0, 0.2, 1); // Decelerating motion
$ease-material-accelerate: cubic-bezier(0.4, 0, 1, 1); // Accelerating motion
$ease-material-sharp: cubic-bezier(0.4, 0, 0.6, 1); // Sharp transitions
```

#### **Specialized Easing**

```scss
// Bounce easing - playful, bouncy animations
$ease-bounce-in: cubic-bezier(0.68, -0.55, 0.265, 1.55);
$ease-bounce-out: cubic-bezier(0.68, -0.55, 0.265, 1.55);
$ease-bounce-in-out: cubic-bezier(0.68, -0.55, 0.265, 1.55);

// Elastic easing - spring-like, elastic motion
$ease-elastic-in: cubic-bezier(0.68, -0.6, 0.32, 1.6);
$ease-elastic-out: cubic-bezier(0.68, -0.6, 0.32, 1.6);
$ease-elastic-in-out: cubic-bezier(0.68, -0.6, 0.32, 1.6);

// Spring easing - natural, physics-based motion
$ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275);
$ease-spring-bouncy: cubic-bezier(0.68, -0.55, 0.265, 1.55);
$ease-spring-smooth: cubic-bezier(0.25, 0.46, 0.45, 0.94);
```

#### **UI/UX Specific Easing**

```scss
// Optimized for different UI interactions
$ease-ui-smooth: cubic-bezier(0.25, 0.46, 0.45, 0.94); // Smooth, professional
$ease-ui-snappy: cubic-bezier(0.4, 0, 0.2, 1); // Quick, responsive
$ease-ui-bouncy: cubic-bezier(0.68, -0.55, 0.265, 1.55); // Playful, engaging
$ease-ui-elastic: cubic-bezier(0.68, -0.6, 0.32, 1.6); // Elastic, dynamic

// Micro-interactions
$ease-micro-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
$ease-micro-smooth: cubic-bezier(0.25, 0.46, 0.45, 0.94);
$ease-micro-snappy: cubic-bezier(0.4, 0, 0.2, 1);
$ease-micro-elastic: cubic-bezier(0.68, -0.6, 0.32, 1.6);
```

#### **Performance & Accessibility**

```scss
// Performance optimized easing
$ease-performance: cubic-bezier(0.25, 0.46, 0.45, 0.94);
$ease-performance-fast: cubic-bezier(0.4, 0, 0.2, 1);
$ease-performance-smooth: cubic-bezier(0.25, 0.46, 0.45, 0.94);

// Accessibility friendly easing
$ease-reduced-motion: cubic-bezier(0.25, 0.46, 0.45, 0.94);
$ease-motion-safe: cubic-bezier(0.25, 0.46, 0.45, 0.94);
```

### Animation Mixins

The project includes enterprise-level animation mixins located in `src/styles/mixins/animations.scss`:

#### **Core Animation Mixins**

```scss
// Basic animation mixin - accepts any CSS property and easing
@mixin animate($property, $easing: $ease-out-cubic, $duration: 0.3s) {
  transition: $property $duration $easing;
}

// Multiple properties animation
@mixin animate-multiple($properties, $easing: $ease-out-cubic, $duration: 0.3s) {
  $transitions: ();
  @each $property in $properties {
    $transitions: append($transitions, $property $duration $easing, comma);
  }
  transition: $transitions;
}

// All properties animation
@mixin animate-all($easing: $ease-out-cubic, $duration: 0.3s) {
  transition: all $duration $easing;
}
```

#### **Speed Variants**

```scss
// Fast animations (0.2s)
@mixin animate-fast($property, $easing: $ease-out-cubic);
@mixin animate-multiple-fast($properties, $easing: $ease-out-cubic);
@mixin animate-all-fast($easing: $ease-out-cubic);

// Slow animations (0.5s)
@mixin animate-slow($property, $easing: $ease-out-cubic);
@mixin animate-multiple-slow($properties, $easing: $ease-out-cubic);
@mixin animate-all-slow($easing: $ease-out-cubic);

// Custom duration
@mixin animate-custom($property, $easing: $ease-out-cubic, $duration: 0.3s);
```

#### **State-Specific Mixins**

```scss
// Hover animations
@mixin animate-hover($property, $easing: $ease-out-cubic, $duration: 0.3s);

// Focus animations
@mixin animate-focus($property, $easing: $ease-out-cubic, $duration: 0.3s);

// Active state animations
@mixin animate-active($property, $easing: $ease-out-cubic, $duration: 0.3s);
```

#### **Property-Specific Mixins**

```scss
// Transform animations
@mixin animate-transform($easing: $ease-out-cubic, $duration: 0.3s);

// Opacity animations
@mixin animate-opacity($easing: $ease-out-cubic, $duration: 0.3s);

// Color animations
@mixin animate-color($easing: $ease-out-cubic, $duration: 0.3s);

// Background animations
@mixin animate-background($easing: $ease-out-cubic, $duration: 0.3s);

// Border animations
@mixin animate-border($easing: $ease-out-cubic, $duration: 0.3s);

// Shadow animations
@mixin animate-shadow($easing: $ease-out-cubic, $duration: 0.3s);

// Layout animations
@mixin animate-width($easing: $ease-out-cubic, $duration: 0.3s);
@mixin animate-height($easing: $ease-out-cubic, $duration: 0.3s);
@mixin animate-position($easing: $ease-out-cubic, $duration: 0.3s);
```

#### **Performance & Accessibility Mixins**

```scss
// GPU-accelerated animations
@mixin animate-gpu($property, $easing: $ease-out-cubic, $duration: 0.3s) {
  @include animate($property, $easing, $duration);
  transform: translateZ(0); // Force GPU acceleration
  backface-visibility: hidden;
}

// Reduced motion support
@mixin animate-reduced-motion($property, $easing: $ease-reduced-motion, $duration: 0.3s) {
  @media (prefers-reduced-motion: no-preference) {
    @include animate($property, $easing, $duration);
  }
}

// Motion-safe animations
@mixin animate-motion-safe($property, $easing: $ease-motion-safe, $duration: 0.3s) {
  @media (prefers-reduced-motion: no-preference) {
    @include animate($property, $easing, $duration);
  }

  @media (prefers-reduced-motion: reduce) {
    @include animate($property, $ease-reduced-motion, 0.1s);
  }
}
```

### Usage Examples

#### **Basic Animation Usage**

```scss
// Simple property animation
.my-element {
  @include animate(transform, $ease-spring-bouncy);
  @include animate(opacity, $ease-material-standard, 0.5s);
}

// Multiple properties
.my-element {
  @include animate-multiple((transform, opacity), $ease-ui-smooth);
}

// All properties
.my-element {
  @include animate-all($ease-out-cubic);
}
```

#### **Advanced Animation Usage**

```scss
// Hover effects
.button {
  @include animate-hover(transform, $ease-spring-bouncy);

  &:hover {
    transform: translateY(-2px) scale(1.05);
  }
}

// Focus states
.input {
  @include animate-focus(border-color, $ease-material-standard);

  &:focus {
    border-color: $primary-color;
  }
}

// Performance optimized
.animated-card {
  @include animate-gpu(transform, $ease-spring-bouncy);

  &:hover {
    transform: translateY(-5px) rotateX(5deg);
  }
}

// Accessibility friendly
.accessible-element {
  @include animate-motion-safe(transform, $ease-ui-smooth);
}
```

#### **Real-World Implementation Examples**

```scss
// Shopping cart item animations
.cart-item {
  @include animate-multiple((transform, opacity), $ease-spring-smooth);
  @include animate-motion-safe(transform, $ease-ui-smooth);

  &.removing {
    transform: translateX(100%) scale(0.8);
    opacity: 0;
  }
}

// Product card hover effects
.product-card {
  @include animate-gpu(transform, $ease-spring-bouncy);
  @include animate-shadow($ease-ui-smooth);

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }
}

// Navigation animations
.nav-link {
  @include animate-color($ease-material-standard);
  @include animate-border($ease-ui-smooth);

  &:hover {
    color: $primary-color;
    border-bottom-color: $primary-color;
  }
}

// Loading states
.loading-spinner {
  @include animate-transform($ease-spring-smooth);
  animation: spin 1s linear infinite;
}
```

### File Structure

```
src/
├── styles/
│   ├── easings.scss              # All easing bezier curves
│   ├── mixins/
│   │   └── animations.scss       # Animation mixins
│   └── main.scss                 # Imports all styles
```

### Best Practices

1. **Choose Appropriate Easing**: Use `$ease-material-standard` for UI elements, `$ease-spring-bouncy` for playful interactions
2. **Performance**: Use `@mixin animate-gpu()` for transform animations to leverage GPU acceleration
3. **Accessibility**: Always use `@mixin animate-motion-safe()` for user-facing animations
4. **Duration**: Keep animations between 0.2s-0.5s for optimal user experience
5. **Consistency**: Use the same easing curves for similar interactions throughout the application

## 🎨 SCSS Architecture & File Organization

The project features a comprehensive SCSS architecture designed for enterprise-level applications with proper separation of concerns and maintainable code organization.

### SCSS File Structure & Responsibilities

#### **Core SCSS Files**

**`src/styles/main.scss`** - Central import orchestrator

```scss
// Import order is critical for proper dependency resolution
@import 'variables'; // Colors, breakpoints, transitions
@import 'easings'; // Easing bezier curves library
@import 'keyframes'; // Animation keyframes
@import 'mixins/animations'; // Animation mixins (before utilities)
@import 'utilities'; // Utility classes
@import 'masonry'; // Grid layout styles
```

**`src/styles/variables.scss`** - Design system foundation

```scss
// Color palette
$primary-color: #007bff;
$success-color: #28a745;
$danger-color: #dc3545;

// Transitions
$transition-fast: all 0.2s ease-out;
$transition-slow: all 0.3s ease-out;

// Breakpoints
$breakpoint-sm: 768px;
$breakpoint-md: 992px;
```

**`src/styles/easings.scss`** - Comprehensive easing library

```scss
// Basic easing curves
$ease-in-quad: cubic-bezier(0.55, 0.085, 0.68, 0.53);
$ease-out-cubic: cubic-bezier(0.215, 0.61, 0.355, 1);

// Material Design easing
$ease-material-standard: cubic-bezier(0.4, 0, 0.2, 1);

// UI/UX specific easing
$ease-ui-smooth: cubic-bezier(0.25, 0.46, 0.45, 0.94);
$ease-spring-bouncy: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

#### **Animation System Files**

**`src/styles/mixins/animations.scss`** - Enterprise animation mixins

```scss
// Core animation mixins
@mixin animate($property, $easing: $ease-out-cubic, $duration: 0.3s) {
  transition: $property $duration $easing;
}

@mixin animate-all($easing: $ease-out-cubic, $duration: 0.3s) {
  transition: all $duration $easing;
}

// Speed variants
@mixin animate-fast($property, $easing: $ease-out-cubic) {
  @include animate($property, $easing, 0.2s);
}

@mixin animate-slow($property, $easing: $ease-out-cubic) {
  @include animate($property, $easing, 0.5s);
}

// Property-specific mixins
@mixin animate-transform($easing: $ease-out-cubic, $duration: 0.3s) {
  @include animate(transform, $easing, $duration);
}

@mixin animate-opacity($easing: $ease-out-cubic, $duration: 0.3s) {
  @include animate(opacity, $easing, $duration);
}

// Performance optimized
@mixin animate-gpu($property, $easing: $ease-out-cubic, $duration: 0.3s) {
  @include animate($property, $easing, $duration);
  transform: translateZ(0);
  backface-visibility: hidden;
}

// Accessibility friendly
@mixin animate-motion-safe($property, $easing: $ease-motion-safe, $duration: 0.3s) {
  @media (prefers-reduced-motion: no-preference) {
    @include animate($property, $easing, $duration);
  }

  @media (prefers-reduced-motion: reduce) {
    @include animate($property, $ease-reduced-motion, 0.1s);
  }
}
```

**`src/styles/keyframes.scss`** - Animation keyframes

```scss
// Fade animations
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

// Slide animations
@keyframes slideInFromLeft {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

// Bounce animations
@keyframes bounceIn {
  0% {
    transform: scale(0.3);
    opacity: 0;
  }
  50% {
    transform: scale(1.05);
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
```

#### **Utility & Layout Files**

**`src/styles/utilities.scss`** - Utility classes and helpers

```scss
// Transition utilities
.transition {
  @include animate-all-slow();
}

.transition-fast {
  transition: $transition-fast;
}

// Animation utilities
.bounce-in {
  animation: bounceIn 0.8s ease-out;
}

.fade-in {
  animation: fadeIn 0.6s ease-out;
}

// Text utilities
.text-gradient {
  background: linear-gradient(45deg, $yellow, #ffed4e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

**`src/styles/masonry.scss`** - Grid layout system

```scss
.masonry-grid {
  display: flex;
  margin-left: -15px;
  width: auto;
}

.masonry-column {
  padding-left: 15px;
  background-clip: padding-box;
}

.masonry-item {
  animation: slideInFromLeft 0.2s ease-out both;
}
```

#### **Page-Specific Styles**

**`src/styles/pages/Store.scss`** - Product catalog styling

```scss
.store-page {
  min-height: 100vh;
  background: linear-gradient(135deg, $gradient-light-gray 0%, $gradient-gray 100%);
}

.store-item-card {
  border: 1px solid $border-color;
  border-radius: 12px;
  box-shadow: 0 2px 8px $shadow-light;
  @include animate-all-slow();

  &:hover {
    box-shadow: 0 8px 25px $shadow-medium;
    transform: translateY(-5px);
  }
}

.product-image-container {
  height: 200px;
  width: 100%;
  overflow: hidden;
  cursor: pointer;
  position: relative;

  .image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba($dark-color, 0.7);
    @include animate-slow(opacity);

    .overlay-content {
      @include animate-slow(transform);
    }
  }
}
```

**`src/styles/pages/Home.scss`** - Landing page styling

```scss
.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 100px 0;
  color: white;
}

.hero-btn {
  padding: 12px 30px;
  font-weight: 600;
  border-radius: 50px;
  @include animate-all-slow();

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }
}

.feature-card {
  @include animate-all-slow();
  border-radius: 15px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: $shadow-lg;
  }
}
```

### SCSS Usage Patterns & Best Practices

#### **1. Animation Implementation**

```scss
// ✅ Good: Using mixins for consistent animations
.product-card {
  @include animate-gpu(transform, $ease-spring-bouncy);
  @include animate-shadow($ease-ui-smooth);

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }
}

// ❌ Avoid: Hardcoded transitions
.product-card {
  transition: transform 0.3s ease; // Inconsistent with design system
}
```

#### **2. Variable Usage**

```scss
// ✅ Good: Using design system variables
.button {
  background-color: $primary-color;
  border-radius: $border-radius;
  box-shadow: $shadow-md;

  &:hover {
    background-color: $primary-hover;
    box-shadow: $shadow-lg;
  }
}

// ❌ Avoid: Hardcoded values
.button {
  background-color: #007bff; // Should use $primary-color
  border-radius: 4px; // Should use $border-radius
}
```

#### **3. Responsive Design**

```scss
// ✅ Good: Using breakpoint variables
.hero-title {
  font-size: 3.5rem;

  @media (max-width: $breakpoint-sm) {
    font-size: 2.5rem;
  }
}

// ❌ Avoid: Hardcoded breakpoints
.hero-title {
  font-size: 3.5rem;

  @media (max-width: 768px) {
    // Should use $breakpoint-sm
    font-size: 2.5rem;
  }
}
```

#### **4. Performance Optimization**

```scss
// ✅ Good: GPU-accelerated animations
.animated-element {
  @include animate-gpu(transform, $ease-spring-bouncy);
  will-change: transform;
}

// ✅ Good: Accessibility-friendly animations
.accessible-element {
  @include animate-motion-safe(transform, $ease-ui-smooth);
}
```

### SCSS Import Order & Dependencies

The SCSS import order in `main.scss` is critical for proper compilation:

```scss
// 1. Variables first (no dependencies)
@import 'variables';

// 2. Easing curves (used by variables)
@import 'easings';

// 3. Keyframes (standalone)
@import 'keyframes';

// 4. Mixins (used by utilities and pages)
@import 'mixins/animations';

// 5. Utilities (uses mixins and variables)
@import 'utilities';

// 6. Layout systems
@import 'masonry';

// 7. Page-specific styles (use all above)
@import 'pages/Home';
@import 'pages/Store';
// ... other pages
```

### SCSS Development Workflow

1. **Add new variables** to `variables.scss`
2. **Create mixins** in `mixins/animations.scss`
3. **Define keyframes** in `keyframes.scss`
4. **Use utilities** from `utilities.scss`
5. **Implement page styles** in respective `pages/*.scss` files
6. **Import new files** in `main.scss` in correct order

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
