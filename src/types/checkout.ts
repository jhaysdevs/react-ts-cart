export interface CheckoutFormData {
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

export interface CheckoutFormErrors {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  address?: string
  city?: string
  state?: string
  zipCode?: string
  country?: string
  cardNumber?: string
  expiryDate?: string
  cvv?: string
  cardholderName?: string
  general?: string
}

export interface OrderSummary {
  subtotal: number
  tax: number
  shipping: number
  giftWrap: number
  total: number
  itemCount: number
}

export interface CheckoutStep {
  id: string
  title: string
  description: string
  completed: boolean
  active: boolean
}
