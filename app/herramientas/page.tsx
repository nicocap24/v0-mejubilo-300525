import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LineChart, Calculator, TrendingUp } from "lucide-react"
import FeedbackThumbs from "@/components/feedback-thumbs"
// Importar el componente UnifiedFooter al principio del archivo
import UnifiedFooter from "@/components/unified-footer"

export default function HerramientasPage() {
  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-2 text-gray-800">Herramientas</h1>
        <p className="text-gray-600 mb-8">
          Utiliza nuestras herramientas para entender mejor tu situación previsional y planificar tu futuro.
        </p>

        <Tabs defaultValue="como-voy" className="mt-8">
          <TabsList className="grid grid-cols-3 mb-8 bg-sky-100">
            <TabsTrigger value="como-voy" className="data-[state=active]:bg-sky-500 data-[state=active]:text-white">
              ¿Cómo voy con mi jubilación?
            </TabsTrigger>
            <TabsTrigger
              value="grafico-fondos"
              className="data-[state=active]:bg-sky-500 data-[state=active]:text-white"
            >
              Gráfico fondos AFP
            </TabsTrigger>
            <TabsTrigger
              value="simulador-reforma"
              className="data-[state=active]:bg-sky-500 data-[state=active]:text-white"
            >
              Simulador reforma
            </TabsTrigger>
          </TabsList>

          {/* Herramienta: ¿Cómo voy con mi jubilación? */}
          <TabsContent value="como-voy">
            <Card className="bg-white">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-gray-800">¿Cómo voy con mi jubilación?</CardTitle>
                    <CardDescription>
                      Evalúa tu situación actual y descubre qué tan preparado estás para tu jubilación
                    </CardDescription>
                  </div>
                  <FeedbackThumbs sectionId="como-voy-jubilacion" sectionName="Cómo voy con mi jubilación" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-6 bg-sky-50 rounded-lg">
                    <h3 className="text-lg font-medium mb-4 flex items-center text-gray-800">
                      <TrendingUp className="mr-2 h-5 w-5 text-sky-500" />
                      Evaluación rápida
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Responde estas preguntas para obtener una evaluación rápida de tu situación previsional actual.
                    </p>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="age">¿Cuál es tu edad actual?</Label>
                        <div className="flex items-center space-x-4">
                          <Slider id="age" min={18} max={80} step={1} defaultValue={[35]} className="flex-1" />
                          <span className="w-12 text-center font-medium">35</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="salary">¿Cuál es tu sueldo mensual?</Label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                          <Input id="salary" type="number" defaultValue={800000} className="pl-8" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="afp-balance">¿Cuál es tu saldo actual en la AFP?</Label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                          <Input id="afp-balance" type="number" defaultValue={25000000} className="pl-8" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="afp-type">¿En qué tipo de fondo estás?</Label>
                        <Select defaultValue="A">
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona tu fondo" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="A">Fondo A</SelectItem>
                            <SelectItem value="B">Fondo B</SelectItem>
                            <SelectItem value="C">Fondo C</SelectItem>
                            <SelectItem value="D">Fondo D</SelectItem>
                            <SelectItem value="E">Fondo E</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="years-contributing">¿Cuántos años has cotizado?</Label>
                        <div className="flex items-center space-x-4">
                          <Slider
                            id="years-contributing"
                            min={0}
                            max={45}
                            step={1}
                            defaultValue={[10]}
                            className="flex-1"
                          />
                          <span className="w-12 text-center font-medium">10</span>
                        </div>
                      </div>

                      <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                        Evaluar mi situación
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-gray-50 rounded-lg">
                      <h3 className="text-lg font-medium mb-4 text-gray-800">Resultados detallados</h3>
                      <p className="text-gray-500 mb-4">
                        Conecta tu cuenta AFP para obtener un análisis detallado y personalizado de tu situación
                        previsional.
                      </p>
                      <Button variant="outline" className="w-full border-orange-500 text-orange-500 hover:bg-orange-50">
                        Conectar AFP
                      </Button>
                    </div>

                    <div className="p-6 bg-gray-50 rounded-lg">
                      <h3 className="text-lg font-medium mb-4 text-gray-800">Recomendaciones personalizadas</h3>
                      <p className="text-gray-500 mb-4">
                        Recibe consejos específicos para mejorar tu situación y maximizar tu pensión futura.
                      </p>
                      <Button variant="outline" className="w-full border-orange-500 text-orange-500 hover:bg-orange-50">
                        Ver recomendaciones
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Herramienta: Gráfico fondos AFP */}
          <TabsContent value="grafico-fondos">
            <Card className="bg-white">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-gray-800">Gráfico fondos AFP</CardTitle>
                    <CardDescription>Compara el rendimiento histórico de los diferentes fondos de AFP</CardDescription>
                  </div>
                  <FeedbackThumbs sectionId="grafico-fondos-afp" sectionName="Gráfico fondos AFP" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-6 bg-sky-50 rounded-lg">
                    <h3 className="text-lg font-medium mb-4 flex items-center text-gray-800">
                      <LineChart className="mr-2 h-5 w-5 text-sky-500" />
                      Rendimiento histórico
                    </h3>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="afp-select">Selecciona una AFP</Label>
                        <Select defaultValue="todas">
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona una AFP" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="todas">Todas las AFPs</SelectItem>
                            <SelectItem value="habitat">AFP Habitat</SelectItem>
                            <SelectItem value="provida">AFP ProVida</SelectItem>
                            <SelectItem value="capital">AFP Capital</SelectItem>
                            <SelectItem value="cuprum">AFP Cuprum</SelectItem>
                            <SelectItem value="modelo">AFP Modelo</SelectItem>
                            <SelectItem value="planvital">AFP PlanVital</SelectItem>
                            <SelectItem value="uno">AFP Uno</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="time-period">Período de tiempo</Label>
                        <Select defaultValue="5-years">
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona un período" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-year">Último año</SelectItem>
                            <SelectItem value="3-years">Últimos 3 años</SelectItem>
                            <SelectItem value="5-years">Últimos 5 años</SelectItem>
                            <SelectItem value="10-years">Últimos 10 años</SelectItem>
                            <SelectItem value="max">Desde el inicio</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label>Fondos a mostrar</Label>
                        <div className="flex flex-wrap gap-2">
                          <Button variant="outline" className="bg-sky-100 border-sky-300 text-sky-700">
                            Fondo A
                          </Button>
                          <Button variant="outline" className="bg-green-100 border-green-300 text-green-700">
                            Fondo B
                          </Button>
                          <Button variant="outline" className="bg-yellow-100 border-yellow-300 text-yellow-700">
                            Fondo C
                          </Button>
                          <Button variant="outline" className="bg-orange-100 border-orange-300 text-orange-700">
                            Fondo D
                          </Button>
                          <Button variant="outline" className="bg-red-100 border-red-300 text-red-700">
                            Fondo E
                          </Button>
                        </div>
                      </div>

                      <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Generar gráfico</Button>
                    </div>
                  </div>

                  <div className="h-80 bg-gray-50 rounded-lg flex items-center justify-center">
                    <div className="text-center p-6">
                      <LineChart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-500">
                        Selecciona los parámetros y haz clic en "Generar gráfico" para visualizar el rendimiento
                        histórico
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-gray-50 rounded-lg">
                      <h3 className="text-lg font-medium mb-4 text-gray-800">Comparativa de rentabilidad</h3>
                      <p className="text-gray-500 mb-4">
                        Compara la rentabilidad de los diferentes fondos y AFPs en distintos períodos de tiempo.
                      </p>
                      <Button variant="outline" className="w-full border-orange-500 text-orange-500 hover:bg-orange-50">
                        Ver comparativa
                      </Button>
                    </div>

                    <div className="p-6 bg-gray-50 rounded-lg">
                      <h3 className="text-lg font-medium mb-4 text-gray-800">Análisis de riesgo</h3>
                      <p className="text-gray-500 mb-4">
                        Evalúa el nivel de riesgo de cada fondo y cómo se relaciona con su rentabilidad.
                      </p>
                      <Button variant="outline" className="w-full border-orange-500 text-orange-500 hover:bg-orange-50">
                        Ver análisis
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Herramienta: Simulador reforma */}
          <TabsContent value="simulador-reforma">
            <Card className="bg-white">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-gray-800">Simulador de Reforma Previsional</CardTitle>
                    <CardDescription>
                      Calcula cómo te afectarían los cambios propuestos en la reforma previsional
                    </CardDescription>
                  </div>
                  <FeedbackThumbs sectionId="simulador-reforma" sectionName="Simulador de Reforma Previsional" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-6 bg-sky-50 rounded-lg">
                    <h3 className="text-lg font-medium mb-4 flex items-center text-gray-800">
                      <Calculator className="mr-2 h-5 w-5 text-sky-500" />
                      Datos personales
                    </h3>

                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="age">Edad actual</Label>
                          <div className="flex items-center space-x-4">
                            <Slider id="age" min={18} max={64} step={1} defaultValue={[40]} className="flex-1" />
                            <span className="w-12 text-center font-medium">40</span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="gender">Género</Label>
                          <Select defaultValue="male">
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona tu género" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="male">Hombre</SelectItem>
                              <SelectItem value="female">Mujer</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="salary">Sueldo mensual actual</Label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                          <Input id="salary" type="number" defaultValue={1000000} className="pl-8" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="years-contributing">Años cotizando</Label>
                        <div className="flex items-center space-x-4">
                          <Slider
                            id="years-contributing"
                            min={0}
                            max={47}
                            step={1}
                            defaultValue={[15]}
                            className="flex-1"
                          />
                          <span className="w-12 text-center font-medium">15</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="current-savings">Ahorro actual en AFP</Label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                          <Input id="current-savings" type="number" defaultValue={50000000} className="pl-8" />
                        </div>
                      </div>

                      <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Calcular</Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-gray-50 rounded-lg">
                      <h3 className="text-lg font-medium mb-4 text-gray-800">Sistema Actual</h3>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-orange-500 mb-2">$485.000</div>
                        <p className="text-sm text-gray-600">Pensión mensual estimada</p>
                        <p className="text-sm text-gray-600 mt-4">Tasa de reemplazo: 42%</p>
                      </div>
                    </div>

                    <div className="p-6 bg-green-50 rounded-lg">
                      <h3 className="text-lg font-medium mb-4 text-gray-800">Con Reforma</h3>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-orange-500 mb-2">$557.750</div>
                        <p className="text-sm text-gray-600">Pensión mensual estimada</p>
                        <p className="text-sm text-gray-600 mt-4">Tasa de reemplazo: 48%</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-blue-50 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center mr-4">
                        <TrendingUp className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-medium text-gray-800">Impacto de la Reforma</h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Con la reforma propuesta, tu pensión mensual aumentaría en{" "}
                      <span className="font-bold text-green-600">$72.750</span>, lo que representa un incremento del{" "}
                      <span className="font-bold text-green-600">15%</span>.
                    </p>
                    <p className="text-gray-700">
                      Tu tasa de reemplazo pasaría de <span className="font-bold">42%</span> a
                      <span className="font-bold"> 48%</span> de tu último sueldo.
                    </p>
                  </div>

                  <div className="text-sm text-gray-500 italic">
                    <p>
                      * Este es un cálculo simplificado basado en los datos proporcionados. Los resultados reales pueden
                      variar dependiendo de múltiples factores como la rentabilidad de los fondos, cambios en la
                      legislación, y tu trayectoria laboral futura.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      <UnifiedFooter
        ctaTitle="¿Necesitas ayuda con tus herramientas?"
        ctaDescription="Nuestros expertos pueden guiarte en el uso de estas herramientas para maximizar tu pensión."
        ctaButtonText="Contactar a un experto"
        ctaButtonLink="/contacto"
      />
    </>
  )
}
