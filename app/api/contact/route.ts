import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL
    if (!webhookUrl) {
      console.error("GOOGLE_SHEETS_WEBHOOK_URL environment variable not configured")
      return NextResponse.json({ error: "Webhook URL not configured" }, { status: 500 })
    }

    // Construct the full URL with query parameter
    const fullUrl = `${webhookUrl}?endpoint=form`

    // Log the URL being used (for debugging)
    console.log("Webhook URL:", webhookUrl)
    console.log("Full URL with query:", fullUrl)
    console.log("Data being sent:", JSON.stringify(data, null, 2))

    // Send data to Google Sheets webhook with the required query parameter
    const response = await fetch(fullUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    // Log response details
    console.log("Response status:", response.status)
    console.log("Response headers:", Object.fromEntries(response.headers.entries()))

    const responseText = await response.text()
    console.log("Response body:", responseText)

    if (!response.ok) {
      console.error("Failed to send data to Google Sheets:", response.status, response.statusText)
      return NextResponse.json(
        {
          error: "Failed to submit form",
          details: `Status: ${response.status}, Response: ${responseText}`,
        },
        { status: 500 },
      )
    }

    return NextResponse.json({
      success: true,
      message: "Datos enviados correctamente",
    })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json(
      {
        error: "Error al procesar el formulario",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
