import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL
    if (!webhookUrl) {
      console.error("GOOGLE_SHEETS_WEBHOOK_URL environment variable not configured")
      return NextResponse.json({ error: "Webhook URL not configured" }, { status: 500 })
    }

    // Send data to Google Sheets webhook with the required query parameter
    const response = await fetch(`${webhookUrl}?endpoint=form`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      console.error("Failed to send data to Google Sheets:", response.status, response.statusText)
      return NextResponse.json({ error: "Failed to submit form" }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      message: "Datos enviados correctamente",
    })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ error: "Error al procesar el formulario" }, { status: 500 })
  }
}
