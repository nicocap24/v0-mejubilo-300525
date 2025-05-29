"use server"

export async function saveToGoogleSheets(data: {
  nombre: string
  saldoAFP: string
  fechaNacimiento: string
  rentaVitalicia: number
  pgu: number
  seguroSocial: number
  total: number
}) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || ""}/api/save-to-sheets`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error("Error saving to Google Sheets:", errorData)
      return { success: false, error: "Failed to save data" }
    }

    return { success: true }
  } catch (error) {
    console.error("Error in saveToGoogleSheets:", error)
    return { success: false, error: "Internal server error" }
  }
}
