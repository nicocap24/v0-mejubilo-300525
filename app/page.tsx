"use client"
import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Clock } from "lucide-react"
import { signupForUpdates } from "../actions/signup"

export default function ComingSoonPage() {
  const [state, action, isPending] = useActionState(signupForUpdates, null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Logo/Brand */}
        <div className="flex justify-center">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6 rounded-2xl">
            <h2 className="text-2xl font-bold text-white">Me Jubilo</h2>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
            <Clock className="h-4 w-4 mr-2" />
            Próximamente
          </Badge>

          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Algo Increíble
          </h1>

          <p className="text-xl text-gray-600 max-w-lg mx-auto leading-relaxed">
            Estamos trabajando duro para traerte algo increíble. ¡Sé el primero en saber cuando lancemos!
          </p>
        </div>

        {/* Email Signup Form */}
        <Card className="max-w-md mx-auto">
          <CardContent className="p-6">
            <form action={action} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Ingresa tu email"
                    required
                    className="w-full"
                    disabled={isPending}
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isPending}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                >
                  {isPending ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Uniéndome...
                    </>
                  ) : (
                    <>
                      <Mail className="h-4 w-4 mr-2" />
                      Notifícame
                    </>
                  )}
                </Button>
              </div>

              {state?.success && <div className="text-green-600 text-sm font-medium">{state.message}</div>}
            </form>

            <p className="text-xs text-gray-500 mt-3">Sin spam, cancela en cualquier momento.</p>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="pt-8 text-sm text-gray-500">
          <p>© 2024 Me Jubilo. Todos los derechos reservados.</p>
        </div>
      </div>
    </div>
  )
}
