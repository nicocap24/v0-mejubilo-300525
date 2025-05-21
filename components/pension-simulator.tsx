"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, Calculator } from "lucide-react"

export default function PensionSimulator() {
  const [age, setAge] = useState(40)
  const [salary, setSalary] = useState(1000000)
  const [yearsContributing, setYearsContributing] = useState(15)
  const [currentSavings, setCurrentSavings] = useState(50000000)
  const [gender, setGender] = useState("male")
  const [showResults, setShowResults] = useState(false)

  // Resultados simulados
  const currentSystemPension = Math.round(currentSavings * 0.00433 + salary * 0.1 * 12 * (65 - age) * 0.00433)
  const reformSystemPension = Math.round(currentSystemPension * 1.15) // Simulación simple: 15% de aumento

  const handleCalculate = () => {
    setShowResults(true)
  }

  const handleReset = () => {
    setShowResults(false)
  }

  return (
    <div className="space-y-8">
      {!showResults ? (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <Label htmlFor="age">Edad actual</Label>
              <div className="flex items-center space-x-4">
                <Slider
                  id="age"
                  min={18}
                  max={64}
                  step={1}
                  value={[age]}
                  onValueChange={(value) => setAge(value[0])}
                  className="flex-1"
                />
                <span className="w-12 text-center font-medium">{age}</span>
              </div>
            </div>

            <div className="space-y-3">
              <Label htmlFor="gender">Género</Label>
              <Select value={gender} onValueChange={setGender}>
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

          <div className="space-y-3">
            <Label htmlFor="salary">Sueldo mensual actual</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
              <Input
                id="salary"
                type="number"
                value={salary}
                onChange={(e) => setSalary(Number(e.target.value))}
                className="pl-8"
              />
            </div>
          </div>

          <div className="space-y-3">
            <Label htmlFor="yearsContributing">Años cotizando</Label>
            <div className="flex items-center space-x-4">
              <Slider
                id="yearsContributing"
                min={0}
                max={47}
                step={1}
                value={[yearsContributing]}
                onValueChange={(value) => setYearsContributing(value[0])}
                className="flex-1"
              />
              <span className="w-12 text-center font-medium">{yearsContributing}</span>
            </div>
          </div>

          <div className="space-y-3">
            <Label htmlFor="currentSavings">Ahorro actual en AFP</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
              <Input
                id="currentSavings"
                type="number"
                value={currentSavings}
                onChange={(e) => setCurrentSavings(Number(e.target.value))}
                className="pl-8"
              />
            </div>
          </div>

          <Button onClick={handleCalculate} className="w-full bg-orange-500 hover:bg-orange-600 text-white">
            <Calculator className="mr-2 h-4 w-4" />
            Calcular
          </Button>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-sky-50">
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-4 text-gray-800">Sistema Actual</h3>
                <div className="text-3xl font-bold text-orange-500 mb-2">${currentSystemPension.toLocaleString()}</div>
                <p className="text-sm text-gray-600">Pensión mensual estimada</p>
                <p className="text-sm text-gray-600 mt-4">
                  Tasa de reemplazo: {Math.round((currentSystemPension / salary) * 100)}%
                </p>
              </CardContent>
            </Card>

            <Card className="bg-green-50">
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-4 text-gray-800">Con Reforma</h3>
                <div className="text-3xl font-bold text-orange-500 mb-2">${reformSystemPension.toLocaleString()}</div>
                <p className="text-sm text-gray-600">Pensión mensual estimada</p>
                <p className="text-sm text-gray-600 mt-4">
                  Tasa de reemplazo: {Math.round((reformSystemPension / salary) * 100)}%
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center mr-4">
                <ArrowRight className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-gray-800">Impacto de la Reforma</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Con la reforma propuesta, tu pensión mensual aumentaría en{" "}
              <span className="font-bold text-green-600">
                ${(reformSystemPension - currentSystemPension).toLocaleString()}
              </span>
              , lo que representa un incremento del <span className="font-bold text-green-600">15%</span>.
            </p>
            <p className="text-gray-700">
              Tu tasa de reemplazo pasaría de{" "}
              <span className="font-bold">{Math.round((currentSystemPension / salary) * 100)}%</span> a
              <span className="font-bold"> {Math.round((reformSystemPension / salary) * 100)}%</span> de tu último
              sueldo.
            </p>
          </div>

          <div className="text-sm text-gray-500 italic">
            <p>
              * Este es un cálculo simplificado basado en los datos proporcionados. Los resultados reales pueden variar
              dependiendo de múltiples factores como la rentabilidad de los fondos, cambios en la legislación, y tu
              trayectoria laboral futura.
            </p>
          </div>

          <Button
            onClick={handleReset}
            variant="outline"
            className="w-full border-orange-500 text-orange-500 hover:bg-orange-50"
          >
            Modificar datos
          </Button>
        </div>
      )}
    </div>
  )
}
