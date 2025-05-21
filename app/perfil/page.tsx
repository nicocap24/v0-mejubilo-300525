"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { TrendingUp, User, Settings, Bell, Shield, CreditCard, FileText, Save, Edit } from "lucide-react"
// Importar el componente UnifiedFooter al principio del archivo
import UnifiedFooter from "@/components/unified-footer"

export default function PerfilPage() {
  // Estado para controlar el modo de edición
  const [editMode, setEditMode] = useState(false)

  // Datos de ejemplo del usuario
  const userData = {
    name: "Juan Pérez",
    email: "juan.perez@ejemplo.com",
    rut: "12.345.678-9",
    phone: "+56 9 1234 5678",
    birthdate: "15/05/1988",
    address: "Av. Providencia 1234, Santiago",
    afp: {
      name: "AFP Habitat",
      accountNumber: "123456789",
      fund: "A",
      balance: 24568912,
      lastUpdate: "15/04/2023",
      monthlyContribution: 250000,
      voluntaryContribution: 100000,
    },
    stats: {
      position: 342,
      percentile: 15,
      profit: 2.4,
      replacementRate: 42,
    },
  }

  // Al final del componente, justo antes del return final, añadir:
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Mi Perfil</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Columna izquierda - Información personal */}
          <div className="lg:col-span-1">
            <Card className="bg-white">
              <CardHeader className="pb-2 flex flex-row items-start justify-between">
                <div>
                  <CardTitle className="text-gray-800">Información Personal</CardTitle>
                  <CardDescription>Tus datos personales</CardDescription>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setEditMode(!editMode)}
                  className="text-gray-500 hover:text-orange-500"
                >
                  {editMode ? <Save className="h-5 w-5" /> : <Edit className="h-5 w-5" />}
                </Button>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col items-center">
                  <div className="relative w-24 h-24 mb-4">
                    <div className="w-24 h-24 rounded-full bg-sky-100 flex items-center justify-center">
                      <User className="h-12 w-12 text-sky-500" />
                    </div>
                    {editMode && (
                      <Button
                        size="sm"
                        variant="secondary"
                        className="absolute bottom-0 right-0 rounded-full h-8 w-8 p-0"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{userData.name}</h3>
                  <p className="text-gray-500">{userData.rut}</p>
                </div>

                <Separator />

                {editMode ? (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre completo</Label>
                      <Input id="name" defaultValue={userData.name} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Correo electrónico</Label>
                      <Input id="email" type="email" defaultValue={userData.email} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input id="phone" defaultValue={userData.phone} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="birthdate">Fecha de nacimiento</Label>
                      <Input id="birthdate" defaultValue={userData.birthdate} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Dirección</Label>
                      <Input id="address" defaultValue={userData.address} />
                    </div>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Guardar cambios</Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500">Correo electrónico</p>
                      <p className="font-medium">{userData.email}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Teléfono</p>
                      <p className="font-medium">{userData.phone}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Fecha de nacimiento</p>
                      <p className="font-medium">{userData.birthdate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Dirección</p>
                      <p className="font-medium">{userData.address}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Columna derecha - Información AFP y Configuración */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="afp">
              <TabsList className="grid grid-cols-3 mb-8 bg-sky-100">
                <TabsTrigger value="afp" className="data-[state=active]:bg-sky-500 data-[state=active]:text-white">
                  Datos AFP
                </TabsTrigger>
                <TabsTrigger value="stats" className="data-[state=active]:bg-sky-500 data-[state=active]:text-white">
                  Estadísticas
                </TabsTrigger>
                <TabsTrigger value="settings" className="data-[state=active]:bg-sky-500 data-[state=active]:text-white">
                  Configuración
                </TabsTrigger>
              </TabsList>

              {/* Pestaña de Datos AFP */}
              <TabsContent value="afp">
                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle className="text-gray-800">Información de AFP</CardTitle>
                    <CardDescription>Datos de tu cuenta de AFP</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-sm text-gray-500">AFP</p>
                        <p className="text-xl font-medium">{userData.afp.name}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Número de cuenta</p>
                        <p className="text-xl font-medium">{userData.afp.accountNumber}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Tipo de fondo</p>
                        <p className="text-xl font-medium">Fondo {userData.afp.fund}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Última actualización</p>
                        <p className="text-xl font-medium">{userData.afp.lastUpdate}</p>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <p className="text-sm text-gray-500 mb-2">Saldo actual</p>
                      <p className="text-3xl font-bold text-orange-500">${userData.afp.balance.toLocaleString()}</p>
                      <div className="flex items-center mt-2 text-green-600">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        <span className="text-sm">+{userData.stats.profit}% este mes</span>
                      </div>
                    </div>

                    <Separator />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-sm text-gray-500">Cotización mensual</p>
                        <p className="text-xl font-medium">${userData.afp.monthlyContribution.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Ahorro voluntario</p>
                        <p className="text-xl font-medium">${userData.afp.voluntaryContribution.toLocaleString()}</p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mt-4">
                      <Button className="bg-sky-500 hover:bg-sky-600 text-white">
                        <FileText className="mr-2 h-4 w-4" /> Ver cartola
                      </Button>
                      <Button variant="outline" className="text-orange-500 border-orange-500 hover:bg-orange-50">
                        <CreditCard className="mr-2 h-4 w-4" /> Actualizar datos AFP
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Pestaña de Estadísticas */}
              <TabsContent value="stats">
                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle className="text-gray-800">Mis Estadísticas</CardTitle>
                    <CardDescription>Rendimiento y comparativas</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-sky-50 p-6 rounded-lg">
                        <p className="text-sm text-gray-500">Posición en Leaderboard</p>
                        <p className="text-3xl font-bold text-orange-500">#{userData.stats.position}</p>
                        <p className="text-sm text-gray-600 mt-2">
                          Top {userData.stats.percentile}% de tu grupo etario
                        </p>
                      </div>
                      <div className="bg-sky-50 p-6 rounded-lg">
                        <p className="text-sm text-gray-500">Tasa de reemplazo proyectada</p>
                        <p className="text-3xl font-bold text-orange-500">{userData.stats.replacementRate}%</p>
                        <p className="text-sm text-gray-600 mt-2">De tu último sueldo</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h3 className="text-lg font-medium text-gray-800">Comparativa con usuarios similares</h3>

                      <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex justify-between mb-2">
                            <p className="font-medium">Saldo acumulado</p>
                            <p className="text-green-600">+12%</p>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "62%" }}></div>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">Tu saldo es 12% mayor que el promedio</p>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex justify-between mb-2">
                            <p className="font-medium">Rentabilidad anual</p>
                            <p className="text-amber-600">-3%</p>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-amber-600 h-2.5 rounded-full" style={{ width: "47%" }}></div>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">Tu rentabilidad es 3% menor que el promedio</p>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex justify-between mb-2">
                            <p className="font-medium">Ahorro voluntario</p>
                            <p className="text-green-600">+25%</p>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "75%" }}></div>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">
                            Tu ahorro voluntario es 25% mayor que el promedio
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Pestaña de Configuración */}
              <TabsContent value="settings">
                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle className="text-gray-800">Configuración de la cuenta</CardTitle>
                    <CardDescription>Gestiona tus preferencias y seguridad</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium flex items-center text-gray-800">
                        <Bell className="mr-2 h-5 w-5" /> Notificaciones
                      </h3>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Notificaciones por email</p>
                            <p className="text-sm text-gray-500">Recibe actualizaciones en tu correo</p>
                          </div>
                          <Switch defaultChecked />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Alertas de movimientos</p>
                            <p className="text-sm text-gray-500">Notificaciones cuando haya cambios en tu cuenta</p>
                          </div>
                          <Switch defaultChecked />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Boletín mensual</p>
                            <p className="text-sm text-gray-500">Resumen mensual de tu situación previsional</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium flex items-center text-gray-800">
                        <Shield className="mr-2 h-5 w-5" /> Seguridad
                      </h3>

                      <div className="space-y-4">
                        <Button variant="outline" className="w-full justify-start">
                          Cambiar contraseña
                        </Button>

                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Autenticación de dos factores</p>
                            <p className="text-sm text-gray-500">Mayor seguridad para tu cuenta</p>
                          </div>
                          <Switch />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Sesiones activas</p>
                            <p className="text-sm text-gray-500">Gestiona los dispositivos conectados</p>
                          </div>
                          <Button variant="ghost" size="sm">
                            Ver
                          </Button>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium flex items-center text-gray-800">
                        <Settings className="mr-2 h-5 w-5" /> Preferencias
                      </h3>

                      <div className="space-y-3">
                        <div className="space-y-2">
                          <Label htmlFor="language">Idioma</Label>
                          <Select defaultValue="es">
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona un idioma" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="es">Español</SelectItem>
                              <SelectItem value="en">English</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Modo oscuro</p>
                            <p className="text-sm text-gray-500">Cambia la apariencia de la aplicación</p>
                          </div>
                          <Switch />
                        </div>
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button variant="destructive" className="w-full">
                        Cerrar sesión en todos los dispositivos
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      <UnifiedFooter showCta={false} />
    </>
  )
}
