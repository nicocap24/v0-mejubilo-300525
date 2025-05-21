"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, X, Building, Users, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import UnifiedFooter from "@/components/unified-footer"

interface PlanFeature {
  name: string
  gratis: boolean
  pro: boolean
  plus: boolean
}

type PlanModalidad = "individual" | "familiar" | "enterprise"

export default function PreciosClientPage() {
  const [modalidad, setModalidad] = useState<PlanModalidad>("individual")

  // Precios según modalidad
  const precios = {
    individual: {
      gratis: 0,
      pro: 5000,
      proRegular: 10000,
      plus: 20000,
    },
    familiar: {
      gratis: 0,
      pro: 8000,
      proRegular: 16000,
      plus: 35000,
    },
    enterprise: {
      gratis: 0,
      pro: 0, // Precio a convenir
      proRegular: 0, // Precio a convenir
      plus: 0, // Precio a convenir
    },
  }

  const features: PlanFeature[] = [
    {
      name: "Simulador de reforma previsional",
      gratis: true,
      pro: true,
      plus: true,
    },
    {
      name: "Acceso a tu perfil con situación previsional",
      gratis: false,
      pro: true,
      plus: true,
    },
    {
      name: "Conexión con tu AFP",
      gratis: false,
      pro: true,
      plus: true,
    },
    {
      name: "Acceso completo al leaderboard",
      gratis: false,
      pro: true,
      plus: true,
    },
    {
      name: "Notificaciones y alertas semanales",
      gratis: false,
      pro: true,
      plus: true,
    },
    {
      name: "Análisis detallado de jubilación anticipada",
      gratis: false,
      pro: false,
      plus: true,
    },
    {
      name: "Planificación de Excedentes de Libre Disposición",
      gratis: false,
      pro: false,
      plus: true,
    },
    {
      name: "Asesoría previsional trimestral",
      gratis: false,
      pro: false,
      plus: true,
    },
  ]

  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">Planes y Precios</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Elige el plan que mejor se adapte a tus necesidades y comienza a optimizar tu futuro previsional hoy mismo
            </p>

            <div className="flex justify-center mb-8">
              <Tabs
                defaultValue="individual"
                value={modalidad}
                onValueChange={(value) => setModalidad(value as PlanModalidad)}
                className="w-full max-w-md"
              >
                <TabsList className="grid grid-cols-3 w-full">
                  <TabsTrigger value="individual" className="flex items-center justify-center">
                    <User className="h-4 w-4 mr-2" />
                    Individual
                  </TabsTrigger>
                  <TabsTrigger value="familiar" className="flex items-center justify-center">
                    <Users className="h-4 w-4 mr-2" />
                    Familiar
                  </TabsTrigger>
                  <TabsTrigger value="enterprise" className="flex items-center justify-center">
                    <Building className="h-4 w-4 mr-2" />
                    Empresas
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            {modalidad === "enterprise" && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8 max-w-3xl mx-auto">
                <h3 className="font-bold text-gray-800 mb-2">Plan Empresarial</h3>
                <p className="text-gray-600">
                  Ideal para empresas con más de 100 empleados. Ofrecemos soluciones personalizadas según las
                  necesidades específicas de su organización.
                </p>
                <Button asChild className="mt-4 bg-sky-500 hover:bg-sky-600 text-white">
                  <Link href="/contacto">Agendar reunión por videollamada</Link>
                </Button>
              </div>
            )}

            {modalidad === "familiar" && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8 max-w-3xl mx-auto">
                <h3 className="font-bold text-gray-800 mb-2">Plan Familiar</h3>
                <p className="text-gray-600">
                  Ideal para familias. Incluye hasta 5 miembros con acceso a todas las funcionalidades del plan
                  seleccionado.
                </p>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Plan Gratis */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 flex flex-col">
              <div className="p-6 bg-gray-50 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Gratis</h2>
                <p className="text-gray-600 mb-4">Funcionalidades básicas para comenzar</p>
                <div className="text-3xl font-bold text-gray-800">
                  $0 <span className="text-base font-normal text-gray-600">/ mes</span>
                </div>
              </div>
              <div className="p-6 flex-grow">
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      {feature.gratis ? (
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      ) : (
                        <X className="h-5 w-5 text-gray-300 mr-2 shrink-0 mt-0.5" />
                      )}
                      <span className={feature.gratis ? "text-gray-700" : "text-gray-400"}>{feature.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 border-t border-gray-200">
                <Button asChild className="w-full bg-gray-500 hover:bg-gray-600 text-white">
                  <Link href="/register">Registrarse</Link>
                </Button>
              </div>
            </div>

            {/* Plan Pro */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden border-2 border-orange-500 flex flex-col relative">
              <div className="absolute top-0 right-0 mt-4 mr-4">
                <Badge className="bg-orange-500 text-white">Popular</Badge>
              </div>
              <div className="p-6 bg-orange-50 border-b border-orange-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Pro</h2>
                <p className="text-gray-600 mb-4">Funcionalidades avanzadas para optimizar</p>
                <div className="flex items-center">
                  {modalidad === "enterprise" ? (
                    <div className="text-xl font-bold text-gray-800">Precio a convenir</div>
                  ) : (
                    <>
                      <div className="text-3xl font-bold text-gray-800">
                        ${precios[modalidad].pro.toLocaleString()}{" "}
                        <span className="text-base font-normal text-gray-600">/ mes</span>
                      </div>
                      <div className="ml-2 text-sm bg-green-100 text-green-800 px-2 py-1 rounded">50% descuento</div>
                    </>
                  )}
                </div>
                {modalidad !== "enterprise" && (
                  <>
                    <p className="text-xs text-gray-500 mt-2">*Precio especial para los primeros 100 usuarios</p>
                    <p className="text-xs text-gray-500">
                      Precio regular: ${precios[modalidad].proRegular.toLocaleString()}/mes
                    </p>
                  </>
                )}
              </div>
              <div className="p-6 flex-grow">
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      {feature.pro ? (
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      ) : (
                        <X className="h-5 w-5 text-gray-300 mr-2 shrink-0 mt-0.5" />
                      )}
                      <span className={feature.pro ? "text-gray-700" : "text-gray-400"}>{feature.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 border-t border-orange-200">
                {modalidad === "enterprise" ? (
                  <Button asChild className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    <Link href="/contacto">Contactar para cotizar</Link>
                  </Button>
                ) : (
                  <Button asChild className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    <Link href={`/register?plan=pro&modalidad=${modalidad}`}>Elegir Plan Pro</Link>
                  </Button>
                )}
              </div>
            </div>

            {/* Plan Plus */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 flex flex-col relative">
              <div className="absolute top-0 right-0 mt-4 mr-4">
                <Badge className="bg-sky-500 text-white">Próximamente</Badge>
              </div>
              <div className="p-6 bg-sky-50 border-b border-sky-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Plus</h2>
                <p className="text-gray-600 mb-4">Experiencia premium con asesoría</p>
                {modalidad === "enterprise" ? (
                  <div className="text-xl font-bold text-gray-800">Precio a convenir</div>
                ) : (
                  <div className="text-3xl font-bold text-gray-800">
                    ${precios[modalidad].plus.toLocaleString()}{" "}
                    <span className="text-base font-normal text-gray-600">/ mes</span>
                  </div>
                )}
              </div>
              <div className="p-6 flex-grow">
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      {feature.plus ? (
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      ) : (
                        <X className="h-5 w-5 text-gray-300 mr-2 shrink-0 mt-0.5" />
                      )}
                      <span className={feature.plus ? "text-gray-700" : "text-gray-400"}>{feature.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 border-t border-gray-200">
                <Button disabled className="w-full bg-sky-400 text-white cursor-not-allowed opacity-70">
                  Próximamente
                </Button>
                <p className="text-xs text-center text-gray-500 mt-2">
                  Estamos trabajando en este plan. ¡Muy pronto disponible!
                </p>
              </div>
            </div>
          </div>

          {/* Preguntas frecuentes sobre los planes */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Preguntas frecuentes sobre nuestros planes</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2 text-gray-800">¿Puedo cambiar de plan en cualquier momento?</h3>
                <p className="text-gray-600">
                  Sí, puedes actualizar o cambiar tu plan en cualquier momento. Si actualizas a un plan superior, el
                  cambio se aplicará inmediatamente. Si cambias a un plan inferior, el cambio se aplicará al finalizar
                  tu ciclo de facturación actual.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2 text-gray-800">¿Cómo funciona el descuento del Plan Pro?</h3>
                <p className="text-gray-600">
                  El descuento del 50% en el Plan Pro está disponible solo para los primeros 100 usuarios que se
                  suscriban. Una vez alcanzado este límite, el precio será de $10.000 mensuales. Si te suscribes durante
                  el período de promoción, mantendrás el precio reducido mientras mantengas tu suscripción activa.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2 text-gray-800">¿Qué métodos de pago aceptan?</h3>
                <p className="text-gray-600">
                  Aceptamos tarjetas de crédito y débito (Visa, Mastercard, American Express), transferencias bancarias
                  y WebPay. Todos los pagos se procesan de forma segura a través de nuestros proveedores de pago
                  certificados.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2 text-gray-800">
                  ¿En qué consiste la asesoría previsional del Plan Plus?
                </h3>
                <p className="text-gray-600">
                  Los suscriptores del Plan Plus tienen derecho a una sesión trimestral de 30 minutos con uno de
                  nuestros asesores previsionales certificados. Durante esta sesión, podrás recibir orientación
                  personalizada sobre estrategias para mejorar tu pensión, optimizar tus inversiones y resolver dudas
                  específicas sobre tu situación previsional.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2 text-gray-800">¿Puedo cancelar mi suscripción?</h3>
                <p className="text-gray-600">
                  Puedes cancelar tu suscripción en cualquier momento desde tu perfil. No hay períodos de permanencia
                  obligatorios ni penalizaciones por cancelación. Si cancelas, seguirás teniendo acceso a las
                  funcionalidades de tu plan hasta el final del período facturado.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2 text-gray-800">¿Qué incluyen las diferentes modalidades?</h3>
                <p className="text-gray-600">
                  <strong>Individual:</strong> Acceso para una sola persona a todas las funcionalidades del plan
                  seleccionado.
                  <br />
                  <strong>Familiar:</strong> Acceso para hasta 5 miembros de la familia, ideal para gestionar las
                  pensiones de toda la familia desde una sola cuenta.
                  <br />
                  <strong>Empresarial:</strong> Solución personalizada para empresas con más de 100 empleados, con
                  funcionalidades adicionales como panel de administración, reportes consolidados y capacitaciones para
                  los empleados.
                </p>
              </div>
            </div>
          </div>

          {/* Comparativa de planes */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-4 text-left text-gray-800 font-bold border border-gray-200">Característica</th>
                  <th className="p-4 text-center text-gray-800 font-bold border border-gray-200">Gratis</th>
                  <th className="p-4 text-center text-orange-600 font-bold border border-gray-200">Pro</th>
                  <th className="p-4 text-center text-sky-600 font-bold border border-gray-200">Plus</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border border-gray-200 bg-white text-gray-800">
                    Simulador de reforma previsional
                  </td>
                  <td className="p-4 border border-gray-200 bg-white text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="p-4 border border-gray-200 bg-white text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="p-4 border border-gray-200 bg-white text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-200 bg-gray-50 text-gray-800">
                    Acceso a tu perfil con situación previsional
                  </td>
                  <td className="p-4 border border-gray-200 bg-gray-50 text-center">
                    <X className="h-5 w-5 text-gray-300 mx-auto" />
                  </td>
                  <td className="p-4 border border-gray-200 bg-gray-50 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="p-4 border border-gray-200 bg-gray-50 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-200 bg-white text-gray-800">Conexión con tu AFP</td>
                  <td className="p-4 border border-gray-200 bg-white text-center">
                    <X className="h-5 w-5 text-gray-300 mx-auto" />
                  </td>
                  <td className="p-4 border border-gray-200 bg-white text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="p-4 border border-gray-200 bg-white text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-200 bg-gray-50 text-gray-800">
                    Notificaciones y alertas semanales
                  </td>
                  <td className="p-4 border border-gray-200 bg-gray-50 text-center">
                    <X className="h-5 w-5 text-gray-300 mx-auto" />
                  </td>
                  <td className="p-4 border border-gray-200 bg-gray-50 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="p-4 border border-gray-200 bg-gray-50 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-200 bg-white text-gray-800">
                    Análisis detallado de jubilación anticipada
                  </td>
                  <td className="p-4 border border-gray-200 bg-white text-center">
                    <X className="h-5 w-5 text-gray-300 mx-auto" />
                  </td>
                  <td className="p-4 border border-gray-200 bg-white text-center">
                    <X className="h-5 w-5 text-gray-300 mx-auto" />
                  </td>
                  <td className="p-4 border border-gray-200 bg-white text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-200 bg-gray-50 text-gray-800">Precio mensual</td>
                  <td className="p-4 border border-gray-200 bg-gray-50 text-center font-bold">$0</td>
                  <td className="p-4 border border-gray-200 bg-gray-50 text-center font-bold">
                    {modalidad === "enterprise" ? (
                      "A convenir"
                    ) : (
                      <>
                        ${precios[modalidad].pro.toLocaleString()}{" "}
                        <span className="text-xs text-green-600 font-normal">50% descuento</span>
                      </>
                    )}
                  </td>
                  <td className="p-4 border border-gray-200 bg-gray-50 text-center font-bold">
                    {modalidad === "enterprise" ? "A convenir" : `$${precios[modalidad].plus.toLocaleString()}`}
                    <div className="text-xs text-sky-600 font-normal">Próximamente</div>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-200 bg-white text-gray-800">Modalidad</td>
                  <td className="p-4 border border-gray-200 bg-white text-center" colSpan={3}>
                    {modalidad === "individual" && "Individual (1 usuario)"}
                    {modalidad === "familiar" && "Familiar (hasta 5 usuarios)"}
                    {modalidad === "enterprise" && "Empresarial (más de 100 empleados)"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <UnifiedFooter
        ctaTitle="¿Necesitas ayuda para elegir?"
        ctaDescription="Nuestro equipo está disponible para resolver tus dudas y ayudarte a elegir el plan que mejor se adapte a tus necesidades."
        ctaButtonText="Contáctanos"
        ctaButtonLink="/contacto"
      />
    </>
  )
}
