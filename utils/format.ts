export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("es-CL", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

export function formatCurrencyInput(value: string): string {
  const numericValue = value.replace(/[^\d]/g, "")
  if (!numericValue) return ""
  return formatCurrency(Number.parseInt(numericValue))
}

export function formatDateInput(value: string): string {
  const cleaned = value.replace(/\D/g, "")
  const match = cleaned.match(/^(\d{0,2})(\d{0,2})(\d{0,4})$/)
  if (!match) return value

  let formatted = ""
  if (match[1]) formatted += match[1]
  if (match[2]) formatted += "/" + match[2]
  if (match[3]) formatted += "/" + match[3]

  return formatted
}

export function parseCurrency(value: string): number {
  return Number.parseInt(value.replace(/[^\d]/g, "")) || 0
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
