interface SimulationData {
  nombre: string
  email: string
  saldoAFP: string
  fechaNacimiento: string
  pensionAFP?: number
  pgu?: number
  seguroSocial?: number
  pensionTotal?: number
}

export const sendSimulationEmail = async (data: SimulationData) => {
  try {
    const response = await fetch("/api/send-simulation-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    const result = await response.json()

    if (result.success) {
      console.log("Email de simulación enviado exitosamente")
      return { success: true }
    } else {
      console.error("Error al enviar email:", result.error)
      return { success: false, error: result.error }
    }
  } catch (error) {
    console.error("Error al enviar email de simulación:", error)
    return { success: false, error }
  }
}

// Remove the admin notification function since it's now handled in the API route
export const sendAdminNotificationEmail = sendSimulationEmail
