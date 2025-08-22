"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  User,
  GraduationCap,
  Award,
  CheckCircle,
  Calendar,
  FileText,
  Users,
  Shield,
  Heart,
  TrendingUp,
  Info,
} from "lucide-react"
import Link from "next/link"

export default function JubilaConNicoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div
        className="flex-1 bg-cover bg-center bg-no-repeat py-12"
        style={{
          backgroundImage: "url('/images/landscape-background.png')",
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/20"></div>

        <div className="relative z-10 container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Jubila con <span className="text-green-500">Nico</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Tu asesor especializado en pensiones con más de 10 años de experiencia
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Profile Card */}
            <div className="lg:col-span-1">
              <Card className="bg-white/95 backdrop-blur-sm sticky top-8">
                <CardContent className="p-6 text-center">
                  {/* Profile Image */}
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                    <img
                      src="/placeholder.svg?height=128&width=128"
                      alt="Nicolás - Asesor de Pensiones"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Nicolás</h2>
                  <p className="text-gray-600 mb-4">Asesor Especializado en Pensiones</p>

                  {/* Credentials */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-700">
                      <GraduationCap className="w-4 h-4 text-blue-500" />
                      <span>Ingeniero Comercial</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-700">
                      <Award className="w-4 h-4 text-green-500" />
                      <span>Universidad de Chile</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-700">
                      <TrendingUp className="w-4 h-4 text-orange-500" />
                      <span>+10 años de experiencia</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-700">
                      <Shield className="w-4 h-4 text-purple-500" />
                      <span>Certificado por la CMF</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => window.open("https://calendly.com/nico-me-jubilo/30min", "_blank")}
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Agendar Videollamada
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About Section */}
              <Card className="bg-white/95 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <User className="w-6 h-6 text-green-500" />
                    ¿Quién soy?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Soy Nicolás, Ingeniero Comercial de la Universidad de Chile con más de 10 años de experiencia
                    especializada en el sistema previsional chileno. Mi pasión es ayudar a las personas a entender y
                    optimizar sus pensiones para asegurar un retiro digno.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    A lo largo de mi carrera, he asesorado a cientos de personas en sus procesos de jubilación, siempre
                    con un enfoque transparente y personalizado. Estoy certificado por la CMF como agente de rentas
                    vitalicias, lo que me permite brindarte asesoría oficial y confiable.
                  </p>
                </CardContent>
              </Card>

              {/* Services Section */}
              <Card className="bg-white/95 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    ¿En qué te puedo ayudar?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                      <FileText className="w-5 h-5 text-blue-500 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Trámite de Pensión</h4>
                        <p className="text-sm text-gray-600">Gestión completa de tu proceso de jubilación</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                      <Users className="w-5 h-5 text-green-500 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Pensión de Vejez Normal</h4>
                        <p className="text-sm text-gray-600">Jubilación a los 65 años (hombres) / 60 años (mujeres)</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg">
                      <TrendingUp className="w-5 h-5 text-orange-500 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Jubilación Anticipada</h4>
                        <p className="text-sm text-gray-600">Retiro antes de la edad legal</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg">
                      <Heart className="w-5 h-5 text-purple-500 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Pensión de Sobrevivencia</h4>
                        <p className="text-sm text-gray-600">Beneficios para beneficiarios</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg">
                      <Shield className="w-5 h-5 text-red-500 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Pensión de Invalidez</h4>
                        <p className="text-sm text-gray-600">Protección por incapacidad laboral</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-indigo-50 rounded-lg">
                      <Award className="w-5 h-5 text-indigo-500 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Orientación Personalizada</h4>
                        <p className="text-sm text-gray-600">Análisis de las mejores alternativas según tu caso</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Renta Vitalicia Section */}
              <Card className="bg-white/95 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Info className="w-6 h-6 text-green-500" />
                    ¿Qué es una Renta Vitalicia?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Una Renta Vitalicia es un contrato de seguro que te garantiza una pensión mensual fija de por vida,
                    protegida contra la inflación. Es una de las modalidades de pensión más seguras del sistema chileno.
                  </p>

                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Beneficios principales:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Pensión garantizada de por vida
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Protección contra la inflación (UF)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Beneficios para sobrevivientes
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Respaldo de compañías de seguros
                      </li>
                    </ul>
                  </div>

                  <div className="text-center">
                    <Link href="/rentas-vitalicias">
                      <Button variant="outline" className="bg-white hover:bg-gray-50">
                        Conoce más sobre Rentas Vitalicias
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Certification Badge */}
              <Card className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
                <CardContent className="p-6 text-center">
                  <Shield className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Certificado por la CMF</h3>
                  <p className="text-green-100">
                    Agente autorizado para asesorar en Rentas Vitalicias según normativa de la Comisión para el Mercado
                    Financiero
                  </p>
                  <Badge className="mt-4 bg-white text-green-600 hover:bg-gray-100">Asesoría Oficial y Confiable</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
