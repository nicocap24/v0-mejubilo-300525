import { NextResponse } from "next/server"

// En una implementación real, esto se conectaría a una base de datos
// como MongoDB, PostgreSQL, etc.
const feedbackDatabase: any[] = []

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { sectionId, sectionName, feedbackType, timestamp } = body

    // Validar datos requeridos
    if (!sectionId || !sectionName || !feedbackType || !timestamp) {
      return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 })
    }

    // Crear registro de feedback
    const feedbackRecord = {
      id: `feedback_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
      sectionId,
      sectionName,
      feedbackType,
      timestamp,
      userAgent: request.headers.get("user-agent") || "Unknown",
      // En una implementación real, podrías incluir más datos como:
      // userId: si el usuario está autenticado
      // sessionId: para seguimiento anónimo
      // ipAddress: para análisis geográfico (con las debidas consideraciones de privacidad)
    }

    // Guardar en nuestra "base de datos" simulada
    feedbackDatabase.push(feedbackRecord)

    console.log("Feedback recibido:", feedbackRecord)
    console.log("Total de feedback almacenado:", feedbackDatabase.length)

    return NextResponse.json({
      success: true,
      message: "Feedback registrado correctamente",
      feedbackId: feedbackRecord.id,
    })
  } catch (error) {
    console.error("Error al procesar feedback:", error)
    return NextResponse.json({ error: "Error al procesar la solicitud" }, { status: 500 })
  }
}

// Para propósitos de demostración, añadimos un endpoint GET para ver los feedbacks
export async function GET() {
  return NextResponse.json({
    success: true,
    data: feedbackDatabase,
  })
}
