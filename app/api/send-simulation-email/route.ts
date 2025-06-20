import { type NextRequest, NextResponse } from "next/server"
import emailjs from "@emailjs/nodejs"

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

export async function POST(request: NextRequest) {
  try {
    const data: SimulationData = await request.json()

    const serviceId = process.env.EMAILJS_SERVICE_ID
    const templateId = process.env.EMAILJS_TEMPLATE_ID
    const publicKey = process.env.EMAILJS_PUBLIC_KEY
    const privateKey = process.env.EMAILJS_PRIVATE_KEY

    if (!serviceId || !templateId || !publicKey || !privateKey) {
      return NextResponse.json({ success: false, error: "Missing EmailJS credentials" }, { status: 500 })
    }

    // Calculate age from birth date
    const birthDate = new Date(data.fechaNacimiento)
    const today = new Date()
    const age = today.getFullYear() - birthDate.getFullYear()

    const templateParams = {
      to_name: data.nombre,
      to_email: data.email,
      user_name: data.nombre,
      user_age: age,
      saldo_afp: data.saldoAFP,
      fecha_nacimiento: data.fechaNacimiento,
      pension_afp: data.pensionAFP ? `$${data.pensionAFP.toLocaleString("es-CL")}` : "Calculando...",
      pgu: data.pgu ? `$${data.pgu.toLocaleString("es-CL")}` : "Calculando...",
      seguro_social: data.seguroSocial ? `$${data.seguroSocial.toLocaleString("es-CL")}` : "Calculando...",
      pension_total: data.pensionTotal ? `$${data.pensionTotal.toLocaleString("es-CL")}` : "Calculando...",
      simulation_date: new Date().toLocaleDateString("es-CL"),
    }

    // Send user email
    await emailjs.send(serviceId, templateId, templateParams, {
      publicKey,
      privateKey,
    })

    // Send admin notification if admin template exists
    const adminTemplateId = process.env.EMAILJS_ADMIN_TEMPLATE_ID
    if (adminTemplateId) {
      const adminParams = {
        admin_email: "admin@mejubilo.com",
        user_name: data.nombre,
        user_email: data.email,
        saldo_afp: data.saldoAFP,
        fecha_nacimiento: data.fechaNacimiento,
        simulation_date: new Date().toLocaleDateString("es-CL"),
      }

      await emailjs.send(serviceId, adminTemplateId, adminParams, {
        publicKey,
        privateKey,
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending simulation email:", error)
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 })
  }
}
