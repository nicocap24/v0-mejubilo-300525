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

    // Determine which endpoint to use based on data type
    let endpoint = "form" // default endpoint

    if (data.TIPO === "EBOOK_INTERES") {
      endpoint = "ebook" // specific endpoint for ebook interest
    } else if (data.TIPO === "CONTACTO_JUBILACION") {
      endpoint = "contacto" // specific endpoint for retirement contact
    } else if (data.TIPO === "CHARLA_EMPRESARIAL") {
      endpoint = "charla" // specific endpoint for business talks
    }

    // Construct the full URL with query parameter
    const fullUrl = `${webhookUrl}?endpoint=${endpoint}`

    // Enhanced logging for debugging
    console.log("=== CONTACT API DEBUG ===")
    console.log("Webhook URL:", webhookUrl)
    console.log("Full URL with query:", fullUrl)
    console.log("Data being sent:", JSON.stringify(data, null, 2))
    console.log("Data type:", data.TIPO)
    console.log("Endpoint:", endpoint)

    // Log specific fields for CHARLA_EMPRESARIAL
    if (data.TIPO === "CHARLA_EMPRESARIAL") {
      console.log("=== CHARLA_EMPRESARIAL FIELDS ===")
      console.log("NOMBRE_EMPRESA:", data.NOMBRE_EMPRESA)
      console.log("NOMBRE_ENCARGADO:", data.NOMBRE_ENCARGADO)
      console.log("EMAIL_ENCARGADO:", data.EMAIL_ENCARGADO)
      console.log("MENSAJE:", data.MENSAJE)
    }

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
    console.log("=== RESPONSE DEBUG ===")
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

    // Try to parse JSON response if possible
    let responseData = null
    try {
      if (responseText) {
        responseData = JSON.parse(responseText)
      }
    } catch (parseError) {
      console.log("Response is not JSON:", responseText)
    }

    // If this is a retirement contact with email flag, send notification email
    if (data.TIPO === "CONTACTO_JUBILACION" && data.ENVIAR_EMAIL === "SI") {
      try {
        // Send email notification using the new column names
        const emailData = {
          TIPO: "EMAIL_NOTIFICACION",
          DESTINATARIO: data.EMAIL_DESTINO || "hinicocapital@gmail.com",
          ASUNTO: "Nueva solicitud de jubilación - Me Jubilo",
          MENSAJE: `
Nueva solicitud de jubilación recibida:

📋 Parte del proceso: ${data.PARTEPROCESO}
📞 Método preferido: ${data.METODOPREFERIDO}
📅 Disponibilidad: ${data.DISPONIBILIDAD}
🕐 Fecha: ${new Date(data.FECHA).toLocaleString("es-CL")}
🌐 Origen: ${data.ORIGEN}

Por favor, contacta al usuario para coordinar la reunión.
          `,
          FECHA: data.FECHA,
        }

        // Send email through the same webhook with email endpoint
        const emailUrl = `${webhookUrl}?endpoint=email`
        console.log("=== EMAIL NOTIFICATION ===")
        console.log("Email URL:", emailUrl)
        console.log("Email data:", JSON.stringify(emailData, null, 2))

        const emailResponse = await fetch(emailUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "User-Agent": "MeJubilo-App/1.0",
          },
          body: JSON.stringify(emailData),
          redirect: "follow",
        })

        console.log("Email notification response status:", emailResponse.status)
        const emailResponseText = await emailResponse.text()
        console.log("Email notification response body:", emailResponseText)
      } catch (emailError) {
        console.error("Failed to send email notification:", emailError)
        // Don't fail the main request if email fails
      }
    }

    // If this is a business talk request with email flag, send notification email
    if (data.TIPO === "CHARLA_EMPRESARIAL" && data.ENVIAR_EMAIL === "SI") {
      try {
        // Send email notification for business talk request
        const emailData = {
          TIPO: "EMAIL_NOTIFICACION",
          DESTINATARIO: data.EMAIL_DESTINO || "hinicocapital@gmail.com",
          ASUNTO: "Nueva solicitud de charla empresarial - Me Jubilo",
          MENSAJE: `
Nueva solicitud de charla empresarial recibida:

🏢 Empresa: ${data.NOMBRE_EMPRESA}
👤 Encargado: ${data.NOMBRE_ENCARGADO}
📧 Email: ${data.EMAIL_ENCARGADO}
💬 Mensaje: ${data.MENSAJE}
🕐 Fecha: ${new Date(data.FECHA).toLocaleString("es-CL")}

Por favor, contacta a la empresa para coordinar la charla.
          `,
          FECHA: data.FECHA,
        }

        // Send email through the same webhook with email endpoint
        const emailUrl = `${webhookUrl}?endpoint=email`
        console.log("=== EMAIL NOTIFICATION CHARLA ===")
        console.log("Email URL:", emailUrl)
        console.log("Email data:", JSON.stringify(emailData, null, 2))

        const emailResponse = await fetch(emailUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "User-Agent": "MeJubilo-App/1.0",
          },
          body: JSON.stringify(emailData),
          redirect: "follow",
        })

        console.log("Email notification response status:", emailResponse.status)
        const emailResponseText = await emailResponse.text()
        console.log("Email notification response body:", emailResponseText)
      } catch (emailError) {
        console.error("Failed to send email notification:", emailError)
        // Don't fail the main request if email fails
      }
    }

    return NextResponse.json({
      success: true,
      message: "Datos enviados correctamente",
      responseData,
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
