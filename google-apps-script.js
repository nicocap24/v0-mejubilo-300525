// Configuración global
const SHEET_ID = "TU_ID_DE_HOJA_DE_CÁLCULO" // ⚠️ IMPORTANTE: Reemplaza con tu ID real de hoja de cálculo
const MAIN_SHEET_NAME = "Datos" // Nombre de la hoja principal
const EBOOK_SHEET_NAME = "Ebook" // Nombre de la hoja para datos de ebook
const CHARLA_SHEET_NAME = "Charlas" // Nombre de la hoja para charlas empresariales

// Importaciones necesarias
const SpreadsheetApp = SpreadsheetApp
const ContentService = ContentService
const GmailApp = GmailApp

/**
 * Punto de entrada para solicitudes web
 */
function doPost(e) {
  try {
    // Log de la solicitud recibida
    console.log("🔄 Solicitud recibida: " + JSON.stringify(e.parameter))
    console.log("🔄 Contenido POST: " + e.postData.contents)

    // Parsear los datos JSON
    const data = JSON.parse(e.postData.contents)
    console.log("📋 Datos parseados: " + JSON.stringify(data))

    // Determinar qué endpoint usar basado en el parámetro de consulta
    const endpoint = e.parameter.endpoint || "form"
    console.log("🎯 Endpoint: " + endpoint)

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
      case "charla":
        result = processCharlaData(data)
        break
      default:
        result = { error: "Endpoint desconocido" }
    }

    console.log("✅ Resultado final: " + JSON.stringify(result))

    // Devolver respuesta
    return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON)
  } catch (error) {
    console.error("❌ Error en doPost: " + error.toString())
    console.error("❌ Stack trace: " + error.stack)
    return ContentService.createTextOutput(
      JSON.stringify({
        error: error.toString(),
        stack: error.stack,
      }),
    ).setMimeType(ContentService.MimeType.JSON)
  }
}

/**
 * Procesa datos específicos de contacto - MEJORADO PARA CONTACTO GENERAL
 */
function processContactData(data) {
  try {
    console.log("🔄 === PROCESANDO DATOS DE CONTACTO ===")
    console.log("📋 Data recibida: " + JSON.stringify(data))

    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(MAIN_SHEET_NAME)
    if (!sheet) throw new Error("Hoja no encontrada: " + MAIN_SHEET_NAME)

    // Obtener la última fila con datos
    const lastRow = Math.max(1, sheet.getLastRow())
    console.log("📊 Última fila: " + lastRow)

    // Preparar los datos para insertar
    const rowData = [
      new Date(), // A: Timestamp
      data.TIPO || "CONTACTO_GENERAL", // B: Tipo de entrada
      "", // C: AFP
      "", // D: Fondo
      "", // E: Saldo
      "", // F: Fecha de nacimiento
      data.NOMBRE || "", // G: Nombre
      data.EMAIL || "", // H: Email
      "", // I: Suscrito
      data.PARTEPROCESO || "", // J: Parte del proceso
      data.METODOPREFERIDO || "", // K: Método preferido
      data.DISPONIBILIDAD || "", // L: Disponibilidad
      data.MENSAJE || "", // M: Mensaje
    ]

    console.log("📝 Datos a insertar: " + JSON.stringify(rowData))

    // Insertar datos en la hoja
    sheet.getRange(lastRow + 1, 1, 1, rowData.length).setValues([rowData])
    console.log("✅ Datos guardados en fila " + (lastRow + 1))

    // ENVIAR EMAIL INMEDIATAMENTE - SIN CONDICIONES
    console.log("📧 === INICIANDO ENVÍO DE EMAIL ===")

    const destinatario = "hinicocapital@gmail.com" // EMAIL FIJO
    const asunto = "💬 NUEVO MENSAJE DE CONTACTO - Me Jubilo"

    const mensaje = `🔔 NUEVO MENSAJE DE CONTACTO RECIBIDO

👤 Nombre: ${data.NOMBRE || "No especificado"}
📧 Email: ${data.EMAIL || "No especificado"}
💬 Mensaje: ${data.MENSAJE || "Sin mensaje"}
📅 Tipo: ${data.TIPO || "CONTACTO_GENERAL"}
🕐 Fecha: ${new Date().toLocaleString("es-CL")}

Por favor, responde al usuario lo antes posible.

---
Enviado automáticamente desde Me Jubilo (mejubilo.com)
Sistema de notificaciones v2.0`

    console.log("📧 Destinatario: " + destinatario)
    console.log("📧 Asunto: " + asunto)
    console.log("📧 Mensaje: " + mensaje)

    try {
      // ENVIAR EMAIL DIRECTAMENTE
      console.log("📧 Enviando email...")
      GmailApp.sendEmail(destinatario, asunto, mensaje)
      console.log("✅ EMAIL ENVIADO EXITOSAMENTE a " + destinatario)

      return {
        success: true,
        message: "Datos guardados y email enviado correctamente",
        row: lastRow + 1,
        emailSent: true,
        emailTo: destinatario,
      }
    } catch (emailError) {
      console.error("❌ ERROR ENVIANDO EMAIL: " + emailError.toString())
      console.error("❌ Email stack: " + emailError.stack)

      return {
        success: true,
        message: "Datos guardados pero error enviando email",
        row: lastRow + 1,
        emailSent: false,
        emailError: emailError.toString(),
      }
    }
  } catch (error) {
    console.error("❌ Error en processContactData: " + error.toString())
    console.error("❌ Stack trace: " + error.stack)
    return {
      error: error.toString(),
      stack: error.stack,
    }
  }
}

/**
 * Procesa datos de charlas empresariales Y ENVÍA EMAIL INMEDIATAMENTE
 */
function processCharlaData(data) {
  try {
    console.log("🔄 Procesando datos de charla empresarial: " + JSON.stringify(data))

    // PASO 1: Guardar en Google Sheets
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(CHARLA_SHEET_NAME)
    if (!sheet) throw new Error("Hoja no encontrada: " + CHARLA_SHEET_NAME)

    // Obtener la última fila con datos
    const lastRow = Math.max(1, sheet.getLastRow())

    // Preparar los datos para insertar
    const rowData = [
      new Date(), // A: Timestamp
      data.TIPO || "CHARLA_EMPRESARIAL", // B: Tipo de entrada
      data.NOMBRE_EMPRESA || "", // C: Nombre de la empresa
      data.NOMBRE_ENCARGADO || "", // D: Nombre del encargado
      data.EMAIL_ENCARGADO || "", // E: Email del encargado
      data.MENSAJE || "", // F: Mensaje
    ]

    // Insertar datos en la hoja
    sheet.getRange(lastRow + 1, 1, 1, rowData.length).setValues([rowData])
    console.log("✅ Datos de charla guardados exitosamente en la fila " + (lastRow + 1))

    // PASO 2: ENVIAR EMAIL INMEDIATAMENTE
    console.log("📧 Enviando email de notificación...")

    const destinatario = "hinicocapital@gmail.com"
    const asunto = "🏢 Nueva solicitud de charla empresarial - Me Jubilo"

    const mensaje = `Nueva solicitud de charla empresarial recibida:

🏢 Empresa: ${data.NOMBRE_EMPRESA || "No especificado"}
👤 Encargado: ${data.NOMBRE_ENCARGADO || "No especificado"}
📧 Email: ${data.EMAIL_ENCARGADO || "No especificado"}
💬 Mensaje: ${data.MENSAJE || "Sin mensaje"}
🕐 Fecha: ${new Date().toLocaleString("es-CL")}

Por favor, contacta a la empresa para coordinar la charla.

---
Enviado desde Me Jubilo (mejubilo.com)`

    try {
      // ENVIAR EMAIL DIRECTAMENTE AQUÍ
      GmailApp.sendEmail(destinatario, asunto, mensaje)
      console.log("✅ Email enviado exitosamente a " + destinatario)
    } catch (emailError) {
      console.error("❌ Error enviando email: " + emailError.toString())
      // No fallar la operación principal si el email falla
    }

    return {
      success: true,
      message: "Datos de charla guardados correctamente y email enviado",
      row: lastRow + 1,
    }
  } catch (error) {
    console.error("❌ Error en processCharlaData: " + error.toString())
    return {
      error: error.toString(),
      stack: error.stack,
    }
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
 * 🧪 FUNCIÓN DE PRUEBA PARA CONTACTO GENERAL - MEJORADA
 */
function testContactoGeneral() {
  console.log("🧪 === INICIANDO PRUEBA DE CONTACTO GENERAL ===")

  const testData = {
    TIPO: "CONTACTO_GENERAL",
    NOMBRE: "Juan Pérez TEST",
    EMAIL: "juan@test.com",
    MENSAJE: "Hola, tengo una consulta sobre mi pensión - ESTO ES UNA PRUEBA MEJORADA",
  }

  console.log("🧪 Datos de prueba: " + JSON.stringify(testData))

  const result = processContactData(testData)
  console.log("🧪 Resultado del test: " + JSON.stringify(result))

  return result
}

/**
 * 🧪 FUNCIÓN DE PRUEBA SOLO PARA EMAIL - MEJORADA
 */
function testSoloEmail() {
  try {
    console.log("🧪 === PROBANDO ENVÍO DIRECTO DE EMAIL ===")

    const destinatario = "hinicocapital@gmail.com"
    const asunto = "🧪 PRUEBA DIRECTA - Email desde Google Apps Script"
    const mensaje = `🔔 ESTA ES UNA PRUEBA DIRECTA DE EMAIL

📅 Fecha: ${new Date().toLocaleString("es-CL")}
🕐 Timestamp: ${new Date().toISOString()}

Si recibes este email, significa que:
✅ Google Apps Script puede enviar emails
✅ La configuración de Gmail está correcta
✅ El sistema de notificaciones funciona

---
Prueba automática desde Me Jubilo
Sistema de notificaciones v2.0`

    console.log("📧 Enviando a: " + destinatario)
    console.log("📧 Asunto: " + asunto)

    GmailApp.sendEmail(destinatario, asunto, mensaje)
    console.log("✅ EMAIL DE PRUEBA ENVIADO EXITOSAMENTE")

    return {
      success: true,
      message: "Email de prueba enviado exitosamente",
      timestamp: new Date().toISOString(),
      recipient: destinatario,
    }
  } catch (error) {
    console.error("❌ Error en prueba de email: " + error.toString())
    console.error("❌ Stack trace: " + error.stack)
    return {
      error: error.toString(),
      stack: error.stack,
      timestamp: new Date().toISOString(),
    }
  }
}
