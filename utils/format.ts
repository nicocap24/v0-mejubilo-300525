export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat("es-CL").format(num)
}

export function parseCurrency(value: string): number {
  const cleanValue = value.replace(/[^\d]/g, "")
  return Number.parseInt(cleanValue) || 0
}

export function formatCurrencyInput(value: string): string {
  const numericValue = parseCurrency(value)
  if (numericValue === 0) return ""
  return formatNumber(numericValue)
}

export function formatDateInput(value: string): string {
  // Remove all non-numeric characters
  const numbers = value.replace(/\D/g, "")

  // Format as DD/MM/YYYY
  if (numbers.length <= 2) {
    return numbers
  } else if (numbers.length <= 4) {
    return `${numbers.slice(0, 2)}/${numbers.slice(2)}`
  } else {
    return `${numbers.slice(0, 2)}/${numbers.slice(2, 4)}/${numbers.slice(4, 8)}`
  }
}

export function calculateAge(birthDate: string): number {
  const today = new Date()
  const birth = new Date(birthDate)
  let age = today.getFullYear() - birth.getFullYear()
  const monthDiff = today.getMonth() - birth.getMonth()

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--
  }

  return age
}

export function isValidDate(dateString: string): boolean {
  const regex = /^\d{2}\/\d{2}\/\d{4}$/
  if (!regex.test(dateString)) return false

  const [day, month, year] = dateString.split("/").map(Number)
  const date = new Date(year, month - 1, day)

  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day &&
    year >= 1900 &&
    year <= new Date().getFullYear()
  )
}
