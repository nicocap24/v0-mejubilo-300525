import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Get the Google Sheets API key and sheet ID from environment variables
    const GOOGLE_SHEETS_API_KEY = process.env.GOOGLE_SHEETS_API_KEY
    const SHEET_ID = process.env.GOOGLE_SHEET_ID

    if (!GOOGLE_SHEETS_API_KEY || !SHEET_ID) {
      return NextResponse.json({ error: "Missing Google Sheets API configuration" }, { status: 500 })
    }

    // Format the data for Google Sheets
    const values = [
      [
        new Date().toISOString(), // Timestamp
        data.nombre,
        data.saldoAFP,
        data.fechaNacimiento,
        data.rentaVitalicia,
        data.pgu,
        data.seguroSocial,
        data.total,
      ],
    ]

    // Google Sheets API endpoint
    const endpoint = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/A:H:append?valueInputOption=USER_ENTERED&key=${GOOGLE_SHEETS_API_KEY}`

    // Make the API request to Google Sheets
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        values,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error("Google Sheets API error:", errorData)
      return NextResponse.json({ error: "Failed to save data to Google Sheets" }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error saving data to Google Sheets:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
