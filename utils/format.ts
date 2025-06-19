export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    minimumFractionDigits: 0,
  }).format(amount)
}

export const formatDate = (date: Date | string) => {
  const d = typeof date === "string" ? new Date(date) : date
  return d.toLocaleDateString("es-CL")
}

export const formatSaldo = (value: string) => {
  const numericValue = value.replace(/\D/g, "")
  if (!numericValue) return ""
  const formattedValue = Number(numericValue).toLocaleString("es-CL")
  return `$${formattedValue}`
}
