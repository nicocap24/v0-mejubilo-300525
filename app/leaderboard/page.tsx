import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Medal } from "lucide-react"
import Link from "next/link"
// Importar el componente UnifiedFooter al principio del archivo
import UnifiedFooter from "@/components/unified-footer"

export default function LeaderboardPage() {
  // Datos de ejemplo para el leaderboard
  const leaderboardData = [
    {
      id: 1,
      username: "InversionistaTop",
      balance: 125680000,
      age: 42,
      fund: "A",
      profit: 15.7,
    },
    {
      id: 2,
      username: "PensionFutura",
      balance: 98450000,
      age: 38,
      fund: "A",
      profit: 12.3,
    },
    {
      id: 3,
      username: "AhorroInteligente",
      balance: 87320000,
      age: 45,
      fund: "B",
      profit: 10.8,
    },
    {
      id: 4,
      username: "JubilaciónSegura",
      balance: 76540000,
      age: 39,
      fund: "A",
      profit: 9.5,
    },
    {
      id: 5,
      username: "FuturoEstable",
      balance: 65890000,
      age: 41,
      fund: "B",
      profit: 8.2,
    },
    {
      id: 6,
      username: "InversorAFP",
      balance: 58760000,
      age: 36,
      fund: "A",
      profit: 7.9,
    },
    {
      id: 7,
      username: "PensionOptima",
      balance: 52340000,
      age: 44,
      fund: "C",
      profit: 6.5,
    },
    {
      id: 8,
      username: "AhorroMaximo",
      balance: 48920000,
      age: 37,
      fund: "B",
      profit: 5.8,
    },
    {
      id: 9,
      username: "RetiroDorado",
      balance: 43780000,
      age: 48,
      fund: "C",
      profit: 4.9,
    },
    {
      id: 10,
      username: "FondosFuturos",
      balance: 39650000,
      age: 35,
      fund: "A",
      profit: 4.2,
    },
  ]

  // Datos del usuario actual (ejemplo)
  const currentUser = {
    id: 342,
    username: "TuUsuario",
    balance: 18450000,
    age: 33,
    fund: "B",
    profit: 2.4,
  }

  // Al final del componente, justo antes del return final, añadir:
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Leaderboard</h1>
            <p className="text-gray-500 mt-2">Los usuarios con mejor desempeño en sus fondos de pensiones</p>
          </div>
          <Button asChild className="mt-4 md:mt-0 bg-orange-500 hover:bg-orange-600 text-white">
            <Link href="/dashboard">Ver mi posición</Link>
          </Button>
        </div>

        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-gray-800">Ranking General</CardTitle>
            <CardDescription>Los usuarios con mejor desempeño en la plataforma</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Encabezados de la tabla */}
            <div className="hidden md:flex border-b border-gray-200 pb-2 mb-4 font-medium text-gray-600">
              <div className="w-16 text-center">#</div>
              <div className="flex-1">Usuario</div>
              <div className="w-32 text-right">Saldo AFP</div>
              <div className="w-20 text-center">Edad</div>
              <div className="w-20 text-center">Fondo</div>
              <div className="w-32 text-right">Ganancia</div>
            </div>

            {/* Filas del leaderboard */}
            <div className="space-y-4">
              {leaderboardData.map((user, index) => (
                <div
                  key={user.id}
                  className={`flex flex-col md:flex-row md:items-center p-4 rounded-lg ${
                    index === 0 ? "bg-amber-50" : "bg-gray-50"
                  }`}
                >
                  {/* Posición */}
                  <div className="flex items-center mb-2 md:mb-0 md:w-16 md:justify-center">
                    {index === 0 ? (
                      <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center">
                        <Medal className="w-4 h-4" />
                      </div>
                    ) : (
                      <div
                        className={`w-8 h-8 ${
                          index < 3 ? "bg-gray-400" : "bg-gray-300"
                        } text-white rounded-full flex items-center justify-center`}
                      >
                        <span className="text-sm font-bold">#{index + 1}</span>
                      </div>
                    )}
                  </div>

                  {/* Información del usuario - versión móvil */}
                  <div className="md:hidden flex-1">
                    <p className="font-medium text-gray-800">{user.username}</p>
                    <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                      <div>
                        <span className="text-gray-500">Saldo:</span>{" "}
                        <span className="font-medium">${(user.balance / 1000000).toFixed(1)}M</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Edad:</span> <span className="font-medium">{user.age}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Fondo:</span> <span className="font-medium">{user.fund}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Ganancia:</span>{" "}
                        <span className="font-medium text-green-600">+{user.profit}%</span>
                      </div>
                    </div>
                  </div>

                  {/* Información del usuario - versión desktop */}
                  <div className="hidden md:block flex-1">
                    <p className="font-medium text-gray-800">{user.username}</p>
                  </div>
                  <div className="hidden md:block w-32 text-right font-medium">
                    ${(user.balance / 1000000).toFixed(1)}M
                  </div>
                  <div className="hidden md:block w-20 text-center">{user.age}</div>
                  <div className="hidden md:block w-20 text-center">{user.fund}</div>
                  <div className="hidden md:block w-32 text-right">
                    <span className="text-green-600 flex items-center justify-end">
                      <TrendingUp className="w-3 h-3 mr-1" />+{user.profit}%
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Posición del usuario actual */}
            <div className="mt-8 p-4 border rounded-lg bg-sky-50">
              <div className="flex flex-col md:flex-row md:items-center">
                {/* Posición */}
                <div className="flex items-center mb-2 md:mb-0 md:w-16 md:justify-center">
                  <div className="w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">#{currentUser.id}</span>
                  </div>
                </div>

                {/* Información del usuario - versión móvil */}
                <div className="md:hidden flex-1">
                  <p className="font-medium text-gray-800">{currentUser.username}</p>
                  <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                    <div>
                      <span className="text-gray-500">Saldo:</span>{" "}
                      <span className="font-medium">${(currentUser.balance / 1000000).toFixed(1)}M</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Edad:</span>{" "}
                      <span className="font-medium">{currentUser.age}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Fondo:</span>{" "}
                      <span className="font-medium">{currentUser.fund}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Ganancia:</span>{" "}
                      <span className="font-medium text-green-600">+{currentUser.profit}%</span>
                    </div>
                  </div>
                </div>

                {/* Información del usuario - versión desktop */}
                <div className="hidden md:block flex-1">
                  <p className="font-medium text-gray-800">{currentUser.username}</p>
                </div>
                <div className="hidden md:block w-32 text-right font-medium">
                  ${(currentUser.balance / 1000000).toFixed(1)}M
                </div>
                <div className="hidden md:block w-20 text-center">{currentUser.age}</div>
                <div className="hidden md:block w-20 text-center">{currentUser.fund}</div>
                <div className="hidden md:block w-32 text-right">
                  <span className="text-green-600 flex items-center justify-end">
                    <TrendingUp className="w-3 h-3 mr-1" />+{currentUser.profit}%
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <UnifiedFooter
        ctaTitle="¿Quieres mejorar tu posición?"
        ctaDescription="Descubre cómo puedes optimizar tu estrategia previsional y subir en el ranking."
        ctaButtonText="Ver recomendaciones"
        ctaButtonLink="/dashboard"
      />
    </>
  )
}
