export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("es-CL", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

export function parseCurrency(value: string): number {
  const cleanValue = value.replace(/[^\d]/g, "")
  return Number.parseInt(cleanValue) || 0
}

export function formatCurrencyInput(value: string): string {
  const numericValue = parseCurrency(value)
  return formatCurrency(numericValue)
}

export function formatDateInput(value: string): string {
  // Remove all non-numeric characters
  const cleaned = value.replace(/\D/g, "")

  // Apply DD/MM/YYYY format
  if (cleaned.length >= 8) {
    return `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}/${cleaned.slice(4, 8)}`
  } else if (cleaned.length >= 4) {
    return `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}/${cleaned.slice(4)}`
  } else if (cleaned.length >= 2) {
    return `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`
  }

  return cleaned
}

export function calculateAge(birthDate: string): number {
  const [day, month, year] = birthDate.split("/").map(Number)
  const birth = new Date(year, month - 1, day)
  const today = new Date()
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
    date.getDate() === day &&
    date.getMonth() === month - 1 &&
    date.getFullYear() === year &&
    year >= 1900 &&
    year <= new Date().getFullYear()
  )
}
