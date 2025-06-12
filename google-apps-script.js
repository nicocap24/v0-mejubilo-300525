// Configuración global
const SHEET_ID = "TU_ID_DE_HOJA_DE_CÁLCULO" // Reemplaza con tu ID de hoja de cálculo
const MAIN_SHEET_NAME = "Datos" // Nombre de la hoja principal
const EBOOK_SHEET_NAME = "Ebook" // Nombre de la hoja para datos de ebook

// Importaciones necesarias
const SpreadsheetApp = SpreadsheetApp
const ContentService = SpreadsheetApp.newContentService()
const GmailApp = GmailApp

/**
 * Punto de entrada para solicitudes web
 */
function doPost(e) {
  try {
    // Log de la solicitud recibida
    console.log("Solicitud recibida: " + JSON.stringify(e.parameter))
    console.log("Contenido POST: " + e.postData.contents)

    // Parsear los datos JSON
    const data = JSON.parse(e.postData.contents)
    console.log("Datos parseados: " + JSON.stringify(data))

    // Determinar qué endpoint usar basado en el parámetro de consulta
    const endpoint = e.parameter.endpoint || "form"
    console.log("Endpoint: " + endpoint)

    let result

    switch (endpoint) {
      case "form":
        result = processFormData(data)
        break
      case "ebook":
        result = processEbookData(data)
        break
      case "contacto":
        result = processContactData(data)
        break
      case "email":
        result = sendEmailNotification(data)
        break
      default:
        result = { error: "Endpoint desconocido" }
    }

    // Devolver respuesta
    return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON)
  } catch (error) {
    console.error("Error en doPost: " + error.toString())
    return ContentService.createTextOutput(
      JSON.stringify({
        error: error.toString(),
        stack: error.stack,
      }),
    ).setMimeType(ContentService.MimeType.JSON)
  }
}

/**
 * Procesa datos del formulario principal
 */
function processFormData(data) {
  try {
    console.log("Procesando datos de formulario: " + JSON.stringify(data))

    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(MAIN_SHEET_NAME)
    if (!sheet) throw new Error("Hoja no encontrada: " + MAIN_SHEET_NAME)

    // Obtener la última fila con datos
    const lastRow = Math.max(1, sheet.getLastRow())

    // Preparar los datos para insertar
    const rowData = [
      new Date(), // A: Timestamp
      data.TIPO || "", // B: Tipo de entrada
      data.AFP || "", // C: AFP
      data.FONDO || "", // D: Fondo
      data.SALDO || "", // E: Saldo
      data.FECHANACIMIENTO || "", // F: Fecha de nacimiento
      data.NOMBRE || "", // G: Nombre
      data.EMAIL || "", // H: Email
      data.SUSCRITO || "", // I: Suscrito
      data.PARTEPROCESO || "", // J: Parte del proceso
      data.METODOPREFERIDO || "", // K: Método preferido
      data.DISPONIBILIDAD || "", // L: Disponibilidad
    ]

    // Insertar datos en la hoja
    sheet.getRange(lastRow + 1, 1, 1, rowData.length).setValues([rowData])

    console.log("Datos guardados exitosamente en la fila " + (lastRow + 1))
    console.log("Datos guardados: " + JSON.stringify(rowData))

    return {
      success: true,
      message: "Datos guardados correctamente",
      row: lastRow + 1,
    }
  } catch (error) {
    console.error("Error en processFormData: " + error.toString())
    return {
      error: error.toString(),
      stack: error.stack,
    }
  }
}

/**
 * Procesa datos específicos de contacto para jubilación
 */
function processContactData(data) {
  try {
    console.log("Procesando datos de contacto: " + JSON.stringify(data))

    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(MAIN_SHEET_NAME)
    if (!sheet) throw new Error("Hoja no encontrada: " + MAIN_SHEET_NAME)

    // Obtener la última fila con datos
    const lastRow = Math.max(1, sheet.getLastRow())

    // Preparar los datos para insertar
    const rowData = [
      new Date(), // A: Timestamp
      data.TIPO || "CONTACTO_JUBILACION", // B: Tipo de entrada
      "", // C: AFP
      "", // D: Fondo
      "", // E: Saldo
      "", // F: Fecha de nacimiento
      "", // G: Nombre
      "", // H: Email
      "", // I: Suscrito
      data.PARTEPROCESO || "", // J: Parte del proceso
      data.METODOPREFERIDO || "", // K: Método preferido
      data.DISPONIBILIDAD || "", // L: Disponibilidad
    ]

    // Insertar datos en la hoja
    sheet.getRange(lastRow + 1, 1, 1, rowData.length).setValues([rowData])

    console.log("Datos de contacto guardados exitosamente en la fila " + (lastRow + 1))
    console.log("Datos guardados: " + JSON.stringify(rowData))

    return {
      success: true,
      message: "Datos de contacto guardados correctamente",
      row: lastRow + 1,
    }
  } catch (error) {
    console.error("Error en processContactData: " + error.toString())
    return {
      error: error.toString(),
      stack: error.stack,
    }
  }
}

/**
 * Procesa datos de interés en ebook
 */
function processEbookData(data) {
  try {
    console.log("Procesando datos de ebook: " + JSON.stringify(data))

    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(EBOOK_SHEET_NAME)
    if (!sheet) throw new Error("Hoja no encontrada: " + EBOOK_SHEET_NAME)

    // Obtener la última fila con datos
    const lastRow = Math.max(1, sheet.getLastRow())

    // Preparar los datos para insertar
    const rowData = [
      new Date(), // A: Timestamp
      data.NOMBRE || "", // B: Nombre
      data.EMAIL || "", // C: Email
      data.PRODUCTO || "", // D: Producto
      data.ESTADO || "", // E: Estado
    ]

    // Insertar datos en la hoja
    sheet.getRange(lastRow + 1, 1, 1, rowData.length).setValues([rowData])

    console.log("Datos de ebook guardados exitosamente en la fila " + (lastRow + 1))

    return {
      success: true,
      message: "Datos de ebook guardados correctamente",
      row: lastRow + 1,
    }
  } catch (error) {
    console.error("Error en processEbookData: " + error.toString())
    return {
      error: error.toString(),
      stack: error.stack,
    }
  }
}

/**
 * Envía notificación por email
 */
function sendEmailNotification(data) {
  try {
    console.log("Enviando notificación por email: " + JSON.stringify(data))

    const destinatario = data.DESTINATARIO || "hinicocapital@gmail.com"
    const asunto = data.ASUNTO || "Notificación de Me Jubilo"
    const mensaje = data.MENSAJE || "Nueva notificación recibida"

    // Enviar email
    GmailApp.sendEmail(destinatario, asunto, mensaje)

    console.log("Email enviado exitosamente a " + destinatario)

    return {
      success: true,
      message: "Email enviado correctamente",
      recipient: destinatario,
    }
  } catch (error) {
    console.error("Error en sendEmailNotification: " + error.toString())
    return {
      error: error.toString(),
      stack: error.stack,
    }
  }
}

/**
 * Función para pruebas
 */
function testScript() {
  const testData = {
    TIPO: "CONTACTO_JUBILACION",
    PARTEPROCESO: "Ya tengo el Certificado de Saldo de la AFP.",
    METODOPREFERIDO: "Videollamada",
    DISPONIBILIDAD: "Lunes 10:00 - 11:00",
  }

  const result = processContactData(testData)
  console.log(JSON.stringify(result))
}
