import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { acProducts, ACType, Brand, InverterType } from "./ac-selection-data"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Get available brands for a specific AC type
export function getAvailableBrands(acType: ACType): Brand[] {
  const availableBrands = acProducts
    .filter(product => product.type === acType)
    .map(product => product.brand)
  
  // Remove duplicates
  return [...new Set(availableBrands)];
}

// Get available inverter types for a specific AC type and brand
export function getAvailableInverterTypes(acType: ACType, brand: Brand): InverterType[] {
  const availableInverterTypes = acProducts
    .filter(product => product.type === acType && product.brand === brand)
    .map(product => product.inverter)
  
  // Remove duplicates
  return [...new Set(availableInverterTypes)];
}

// Get available tonnage options for a specific AC type, brand, and inverter type
export function getAvailableTonnages(acType: ACType, brand: Brand, inverter: InverterType): string[] {
  const availableTonnages = acProducts
    .filter(product => 
      product.type === acType && 
      product.brand === brand && 
      product.inverter === inverter
    )
    .map(product => product.tonnage)
  
  // Remove duplicates
  return [...new Set(availableTonnages)];
}

// Get available star ratings for a specific AC type, brand, inverter type, and tonnage
export function getAvailableStarRatings(acType: ACType, brand: Brand, inverter: InverterType, tonnage: string): string[] {
  const availableStarRatings = acProducts
    .filter(product => 
      product.type === acType && 
      product.brand === brand && 
      product.inverter === inverter && 
      product.tonnage === tonnage
    )
    .map(product => product.starRating)
  
  // Remove duplicates
  return [...new Set(availableStarRatings)];
}
