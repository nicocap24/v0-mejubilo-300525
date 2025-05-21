import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import StatsCounter from "@/components/stats-counter"
import StatsChart from "@/components/stats-chart"

export default function StatsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2 text-gray-800">Estadísticas de la plataforma</h1>
      <p className="text-gray-500 mb-8">Datos actualizados en tiempo real sobre el impacto de nuestra plataforma</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <StatsCounter
          title="Fondos administrados"
          value={125000000000}
          prefix="$"
          suffix=" CLP"
          formatter={(value) => `${(value / 1000000000).toFixed(0)} mil millones`}
          className="bg-white"
          valueClassName="text-orange-500"
        />
        <StatsCounter
          title="Comisiones ahorradas"
          value={750000000}
          prefix="$"
          suffix=" CLP"
          formatter={(value) => `${(value / 1000000).toFixed(1)} millones`}
          className="bg-white"
          valueClassName="text-orange-500"
        />
        <StatsCounter
          title="Mejora promedio en pensiones"
          value={15.7}
          suffix="%"
          className="bg-white"
          valueClassName="text-orange-500"
        />
      </div>

      <Tabs defaultValue="general" className="mt-8">
        <TabsList className="grid grid-cols-3 mb-8 bg-sky-100">
          <TabsTrigger value="general" className="data-[state=active]:bg-sky-500 data-[state=active]:text-white">
            Estadísticas generales
          </TabsTrigger>
          <TabsTrigger value="afp" className="data-[state=active]:bg-sky-500 data-[state=active]:text-white">
            Por AFP
          </TabsTrigger>
          <TabsTrigger value="demographic" className="data-[state=active]:bg-sky-500 data-[state=active]:text-white">
            Demográficas
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-gray-800">Usuarios registrados</CardTitle>
                <CardDescription>Crecimiento mensual de usuarios en la plataforma</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <StatsChart type="bar" />
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-gray-800">Fondos administrados</CardTitle>
                <CardDescription>Evolución del total de fondos administrados (en miles de millones)</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <StatsChart type="line" />
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-gray-800">Distribución por AFP</CardTitle>
                <CardDescription>Porcentaje de usuarios por cada AFP</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <StatsChart type="pie" />
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-gray-800">Mejora en pensiones</CardTitle>
                <CardDescription>Porcentaje de mejora en pensiones por mes</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <StatsChart type="line" />
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 bg-white">
            <CardHeader>
              <CardTitle className="text-gray-800">Datos adicionales</CardTitle>
              <CardDescription>Estadísticas relevantes sobre el uso de la plataforma</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-gray-500">Usuarios activos</p>
                  <p className="text-2xl font-bold text-gray-800">24,568</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-gray-500">Documentos procesados</p>
                  <p className="text-2xl font-bold text-gray-800">142,897</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-gray-500">Recomendaciones generadas</p>
                  <p className="text-2xl font-bold text-gray-800">87,345</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-gray-500">Cambios de AFP realizados</p>
                  <p className="text-2xl font-bold text-gray-800">3,421</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="afp">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-gray-800">Distribución de usuarios por AFP</CardTitle>
                <CardDescription>Número de usuarios en cada AFP</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <StatsChart type="bar" />
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-gray-800">Rentabilidad promedio por AFP</CardTitle>
                <CardDescription>Rentabilidad anual promedio de cada AFP</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <StatsChart type="bar" />
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-gray-800">Comisiones por AFP</CardTitle>
                <CardDescription>Comparativa de comisiones cobradas por cada AFP</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <StatsChart type="bar" />
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-gray-800">Satisfacción por AFP</CardTitle>
                <CardDescription>Nivel de satisfacción de usuarios por AFP</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <StatsChart type="bar" />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="demographic">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-gray-800">Distribución por edad</CardTitle>
                <CardDescription>Número de usuarios por rango de edad</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <StatsChart type="bar" />
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-gray-800">Distribución por género</CardTitle>
                <CardDescription>Porcentaje de usuarios por género</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <StatsChart type="pie" />
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-gray-800">Distribución por región</CardTitle>
                <CardDescription>Número de usuarios por región de Chile</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <StatsChart type="bar" />
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-gray-800">Distribución por rango salarial</CardTitle>
                <CardDescription>Número de usuarios por rango de salario</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <StatsChart type="bar" />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
