import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUpRight, Download, FileText, PieChart, TrendingUp } from "lucide-react"
import AfpConnectionForm from "@/components/afp-connection-form"
import PensionChart from "@/components/pension-chart"
// Importar el componente UnifiedFooter al principio del archivo
import UnifiedFooter from "@/components/unified-footer"

export default function DashboardPage() {
  // This would normally be fetched from an API
  const userConnected = false

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Mi Dashboard</h1>

        {!userConnected ? (
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-gray-800">Conecta tu cuenta AFP</CardTitle>
              <CardDescription>
                Para acceder a todas las funcionalidades, conecta tu cuenta AFP de forma segura
              </CardDescription>
            </CardHeader>
            <CardContent>
              <AfpConnectionForm />
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-gray-800">Saldo actual</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-orange-500">$24.568.912</div>
                <div className="flex items-center mt-2 text-green-600">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  <span className="text-sm">+2.4% este mes</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-gray-800">Posición en ranking</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-orange-500">#342</div>
                <div className="flex items-center mt-2 text-green-600">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  <span className="text-sm">Top 15% de tu grupo etario</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-gray-800">Proyección de pensión</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-orange-500">$485.000</div>
                <div className="flex items-center mt-2 text-amber-600">
                  <span className="text-sm">42% de tu último sueldo</span>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        <Tabs defaultValue="overview" className="mt-8">
          <TabsList className="grid grid-cols-4 mb-8 bg-sky-100">
            <TabsTrigger value="overview" className="data-[state=active]:bg-sky-500 data-[state=active]:text-white">
              Resumen
            </TabsTrigger>
            <TabsTrigger value="projection" className="data-[state=active]:bg-sky-500 data-[state=active]:text-white">
              Proyección
            </TabsTrigger>
            <TabsTrigger value="documents" className="data-[state=active]:bg-sky-500 data-[state=active]:text-white">
              Documentos
            </TabsTrigger>
            <TabsTrigger
              value="recommendations"
              className="data-[state=active]:bg-sky-500 data-[state=active]:text-white"
            >
              Recomendaciones
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-gray-800">Evolución de tu saldo</CardTitle>
                </CardHeader>
                <CardContent className="h-80">
                  <PensionChart />
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-gray-800">Distribución de fondos</CardTitle>
                </CardHeader>
                <CardContent className="h-80">
                  <div className="flex items-center justify-center h-full">
                    <PieChart className="w-48 h-48 text-sky-500 opacity-20" />
                  </div>
                  <div className="text-center mt-4">
                    <p className="text-gray-500">Conecta tu cuenta AFP para ver la distribución de tus fondos</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="projection">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-gray-800">Proyección de tu pensión</CardTitle>
                <CardDescription>Basado en tus datos actuales y diferentes escenarios</CardDescription>
              </CardHeader>
              <CardContent className="h-96">
                <div className="flex items-center justify-center h-full">
                  <TrendingUp className="w-48 h-48 text-sky-500 opacity-20" />
                </div>
                <div className="text-center mt-4">
                  <p className="text-gray-500">Conecta tu cuenta AFP para ver proyecciones personalizadas</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="documents">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-gray-800">Documentos disponibles</CardTitle>
                <CardDescription>Accede a tus documentos AFP procesados automáticamente</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center">
                      <FileText className="w-6 h-6 mr-4 text-sky-500" />
                      <div>
                        <p className="font-medium text-gray-800">Cartola cuatrimestral</p>
                        <p className="text-sm text-gray-500">Enero - Abril 2023</p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-orange-500 border-orange-500 hover:bg-orange-50"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Descargar
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center">
                      <FileText className="w-6 h-6 mr-4 text-sky-500" />
                      <div>
                        <p className="font-medium text-gray-800">Certificado de afiliación</p>
                        <p className="text-sm text-gray-500">Mayo 2023</p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-orange-500 border-orange-500 hover:bg-orange-50"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Descargar
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center">
                      <FileText className="w-6 h-6 mr-4 text-sky-500" />
                      <div>
                        <p className="font-medium text-gray-800">Histórico de cotizaciones</p>
                        <p className="text-sm text-gray-500">2018 - 2023</p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-orange-500 border-orange-500 hover:bg-orange-50"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Descargar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="recommendations">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-gray-800">Recomendaciones personalizadas</CardTitle>
                <CardDescription>Basadas en tu perfil y situación previsional actual</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg bg-green-50">
                    <h3 className="font-bold text-lg mb-2 text-gray-800">Aumenta tu ahorro voluntario</h3>
                    <p className="mb-4 text-gray-600">
                      Incrementar tu ahorro voluntario en un 5% de tu sueldo podría mejorar tu pensión final en hasta un
                      20%.
                    </p>
                    <Button variant="outline" className="text-orange-500 border-orange-500 hover:bg-orange-50">
                      <ArrowUpRight className="w-4 h-4 mr-2" />
                      Ver simulación
                    </Button>
                  </div>
                  <div className="p-4 border rounded-lg bg-green-50">
                    <h3 className="font-bold text-lg mb-2 text-gray-800">Considera cambiar de multifondo</h3>
                    <p className="mb-4 text-gray-600">
                      Tu perfil de riesgo y edad sugieren que podrías obtener mejores rendimientos en el Fondo B.
                    </p>
                    <Button variant="outline" className="text-orange-500 border-orange-500 hover:bg-orange-50">
                      <ArrowUpRight className="w-4 h-4 mr-2" />
                      Comparar fondos
                    </Button>
                  </div>
                  <div className="p-4 border rounded-lg bg-green-50">
                    <h3 className="font-bold text-lg mb-2 text-gray-800">Revisa las comisiones de tu AFP</h3>
                    <p className="mb-4 text-gray-600">
                      Podrías ahorrar hasta $120.000 anuales cambiando a una AFP con menores comisiones.
                    </p>
                    <Button variant="outline" className="text-orange-500 border-orange-500 hover:bg-orange-50">
                      <ArrowUpRight className="w-4 h-4 mr-2" />
                      Comparar AFPs
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      <UnifiedFooter showCta={false} />
    </>
  )
}
