import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Update FECHA to full ISO format
    data.FECHA = new Date().toISOString()

    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL
    if (!webhookUrl) {
      console.error("GOOGLE_SHEETS_WEBHOOK_URL environment variable not configured")
      return NextResponse.json({ error: "Webhook URL not configured" }, { status: 500 })
    }

    // Para CONTACTO_GENERAL, enviar directamente el email sin usar webhook separado
    if (data.TIPO === "CONTACTO_GENERAL") {
      console.log("=== CONTACTO_GENERAL - ENVIANDO DIRECTAMENTE ===")
      console.log("Data:", JSON.stringify(data, null, 2))

      // Usar el endpoint 'contacto' que ya maneja emails automáticamente
      const fullUrl = `${webhookUrl}?endpoint=contacto`

      console.log("URL completa:", fullUrl)

      const response = await fetch(fullUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "User-Agent": "MeJubilo-App/1.0",
        },
        body: JSON.stringify(data),
        redirect: "follow",
      })

      console.log("Response status:", response.status)
      const responseText = await response.text()
      console.log("Response body:", responseText)

      // Para Google Apps Script, un 302 es normal
      if (response.status === 302 || response.status === 200) {
        return NextResponse.json({
          success: true,
          message: "Mensaje enviado correctamente",
          debug: {
            sentData: data,
            responseStatus: response.status,
            responseText: responseText,
          },
        })
      }

      if (!response.ok) {
        console.error("Failed to send contact data:", response.status, response.statusText)
        return NextResponse.json(
          {
            error: "Failed to submit contact form",
            details: `Status: ${response.status}, Response: ${responseText}`,
          },
          { status: 500 },
        )
      }

      return NextResponse.json({
        success: true,
        message: "Mensaje enviado correctamente",
      })
    }

    // Para otros tipos, usar la lógica original
    let endpoint = "form" // default endpoint

    if (data.TIPO === "EBOOK_INTERES") {
      endpoint = "ebook"
    } else if (data.TIPO === "CONTACTO_JUBILACION") {
      endpoint = "contacto"
    } else if (data.TIPO === "CHARLA_EMPRESARIAL") {
      endpoint = "charla"
    }

    const fullUrl = `${webhookUrl}?endpoint=${endpoint}`

    console.log("=== CONTACT API DEBUG ===")
    console.log("Webhook URL:", webhookUrl)
    console.log("Full URL with query:", fullUrl)
    console.log("Data being sent:", JSON.stringify(data, null, 2))
    console.log("Data type:", data.TIPO)
    console.log("Endpoint:", endpoint)

    const response = await fetch(fullUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent": "MeJubilo-App/1.0",
      },
      body: JSON.stringify(data),
      redirect: "follow",
    })

    console.log("=== RESPONSE DEBUG ===")
    console.log("Response status:", response.status)
    console.log("Response URL:", response.url)

    let responseText = ""
    try {
      responseText = await response.text()
      console.log("Response body:", responseText)
    } catch (textError) {
      console.log("Could not read response text:", textError)
    }

    if (response.status === 302) {
      console.log("Received redirect (302), but data may have been processed successfully")
      return NextResponse.json({
        success: true,
        message: "Datos enviados correctamente",
        note: "Redirect received but likely processed successfully",
        debug: {
          sentData: data,
          responseStatus: response.status,
          responseText: responseText,
        },
      })
    }

    if (!response.ok) {
      console.error("Failed to send data to Google Sheets:", response.status, response.statusText)
      return NextResponse.json(
        {
          error: "Failed to submit form",
          details: `Status: ${response.status}, Response: ${responseText}`,
          url: fullUrl,
          sentData: data,
        },
        { status: 500 },
      )
    }

    return NextResponse.json({
      success: true,
      message: "Datos enviados correctamente",
      debug: {
        sentData: data,
        responseStatus: response.status,
        responseText: responseText,
      },
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
