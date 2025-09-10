import { CheckoutFormData, CheckoutFormErrors } from '../types/checkout'

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Phone validation regex (supports various formats)
const PHONE_REGEX = /^[\+]?[1-9][\d]{0,15}$/

// Credit card number validation (Luhn algorithm)
const validateCardNumber = (cardNumber: string): boolean => {
  const cleaned = cardNumber.replace(/\s/g, '')
  if (!/^\d{13,19}$/.test(cleaned)) return false

  let sum = 0
  let isEven = false

  for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit = parseInt(cleaned[i])

    if (isEven) {
      digit *= 2
      if (digit > 9) {
        digit -= 9
      }
    }

    sum += digit
    isEven = !isEven
  }

  return sum % 10 === 0
}

// CVV validation
const validateCVV = (cvv: string): boolean => {
  return /^\d{3,4}$/.test(cvv)
}

// Expiry date validation
const validateExpiryDate = (expiryDate: string): boolean => {
  const regex = /^(0[1-9]|1[0-2])\/\d{2}$/
  if (!regex.test(expiryDate)) return false

  const [month, year] = expiryDate.split('/')
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear() % 100
  const currentMonth = currentDate.getMonth() + 1

  const expYear = parseInt(year)
  const expMonth = parseInt(month)

  if (expYear < currentYear) return false
  if (expYear === currentYear && expMonth < currentMonth) return false

  return true
}

// ZIP code validation (US format)
const validateZipCode = (zipCode: string): boolean => {
  return /^\d{5}(-\d{4})?$/.test(zipCode)
}

export const validateCheckoutForm = (data: CheckoutFormData): CheckoutFormErrors => {
  const errors: CheckoutFormErrors = {}

  // Required field validation
  if (!data.firstName.trim()) {
    errors.firstName = 'First name is required'
  } else if (data.firstName.trim().length < 2) {
    errors.firstName = 'First name must be at least 2 characters'
  }

  if (!data.lastName.trim()) {
    errors.lastName = 'Last name is required'
  } else if (data.lastName.trim().length < 2) {
    errors.lastName = 'Last name must be at least 2 characters'
  }

  if (!data.email.trim()) {
    errors.email = 'Email is required'
  } else if (!EMAIL_REGEX.test(data.email)) {
    errors.email = 'Please enter a valid email address'
  }

  if (!data.phone.trim()) {
    errors.phone = 'Phone number is required'
  } else if (!PHONE_REGEX.test(data.phone.replace(/[\s\-\(\)]/g, ''))) {
    errors.phone = 'Please enter a valid phone number'
  }

  if (!data.address.trim()) {
    errors.address = 'Address is required'
  } else if (data.address.trim().length < 5) {
    errors.address = 'Please enter a complete address'
  }

  if (!data.city.trim()) {
    errors.city = 'City is required'
  } else if (data.city.trim().length < 2) {
    errors.city = 'Please enter a valid city name'
  }

  if (!data.state.trim()) {
    errors.state = 'State is required'
  } else if (data.state.trim().length < 2) {
    errors.state = 'Please enter a valid state'
  }

  if (!data.zipCode.trim()) {
    errors.zipCode = 'ZIP code is required'
  } else if (!validateZipCode(data.zipCode)) {
    errors.zipCode = 'Please enter a valid ZIP code (12345 or 12345-6789)'
  }

  if (!data.country.trim()) {
    errors.country = 'Country is required'
  }

  if (!data.cardNumber.trim()) {
    errors.cardNumber = 'Card number is required'
  } else if (!validateCardNumber(data.cardNumber)) {
    errors.cardNumber = 'Please enter a valid card number'
  }

  if (!data.expiryDate.trim()) {
    errors.expiryDate = 'Expiry date is required'
  } else if (!validateExpiryDate(data.expiryDate)) {
    errors.expiryDate = 'Please enter a valid expiry date (MM/YY)'
  }

  if (!data.cvv.trim()) {
    errors.cvv = 'CVV is required'
  } else if (!validateCVV(data.cvv)) {
    errors.cvv = 'Please enter a valid CVV (3-4 digits)'
  }

  if (!data.cardholderName.trim()) {
    errors.cardholderName = 'Cardholder name is required'
  } else if (data.cardholderName.trim().length < 2) {
    errors.cardholderName = 'Please enter the full name on the card'
  }

  return errors
}

// Format card number with spaces
export const formatCardNumber = (value: string): string => {
  const cleaned = value.replace(/\s/g, '')
  const groups = cleaned.match(/.{1,4}/g) || []
  return groups.join(' ').substring(0, 19) // Max 16 digits + 3 spaces
}

// Format expiry date
export const formatExpiryDate = (value: string): string => {
  const cleaned = value.replace(/\D/g, '')
  if (cleaned.length >= 2) {
    return cleaned.substring(0, 2) + '/' + cleaned.substring(2, 4)
  }
  return cleaned
}

// Format phone number
export const formatPhoneNumber = (value: string): string => {
  const cleaned = value.replace(/\D/g, '')
  if (cleaned.length >= 6) {
    return `(${cleaned.substring(0, 3)}) ${cleaned.substring(3, 6)}-${cleaned.substring(6, 10)}`
  } else if (cleaned.length >= 3) {
    return `(${cleaned.substring(0, 3)}) ${cleaned.substring(3)}`
  }
  return cleaned
}
