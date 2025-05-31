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
        Accept: "application/json",
        "User-Agent": "MeJubilo-App/1.0",
      },
      body: JSON.stringify(data),
      redirect: "follow", // Follow redirects automatically
    })

    // Log response details
    console.log("Response status:", response.status)
    console.log("Response URL:", response.url)
    console.log("Response headers:", Object.fromEntries(response.headers.entries()))

    let responseText = ""
    try {
      responseText = await response.text()
      console.log("Response body:", responseText)
    } catch (textError) {
      console.log("Could not read response text:", textError)
    }

    // Handle different response statuses
    if (response.status === 302) {
      console.log("Received redirect (302), but data may have been processed successfully")
      // For Google Apps Script web apps, a 302 might be normal
      return NextResponse.json({
        success: true,
        message: "Datos enviados correctamente",
        note: "Redirect received but likely processed successfully",
      })
    }

    if (!response.ok) {
      console.error("Failed to send data to Google Sheets:", response.status, response.statusText)
      return NextResponse.json(
        {
          error: "Failed to submit form",
          details: `Status: ${response.status}, Response: ${responseText}`,
          url: fullUrl,
        },
        { status: 500 },
      )
    }

    // Try to parse JSON response if possible
    let responseData = null
    try {
      if (responseText) {
        responseData = JSON.parse(responseText)
      }
    } catch (parseError) {
      console.log("Response is not JSON:", responseText)
    }

    return NextResponse.json({
      success: true,
      message: "Datos enviados correctamente",
      responseData,
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
