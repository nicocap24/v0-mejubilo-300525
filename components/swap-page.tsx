"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { ArrowDownUp, Wallet, TrendingUp, Shield, Zap, Users } from 'lucide-react'

interface SwapPageProps {
  language: 'es' | 'en'
}

export default function SwapPage({ language }: SwapPageProps) {
  const [ethAmount, setEthAmount] = useState("")
  const [capitalAmount, setCapitalAmount] = useState("")
  const [isConnected, setIsConnected] = useState(false)
  const [isSwapping, setIsSwapping] = useState(false)

  const translations = {
    es: {
      title: "Compra $CAPITAL",
      subtitle: "Intercambia ETH por $CAPITAL y únete a la revolución previsional",
      connectWallet: "Conectar Billetera",
      connected: "Billetera Conectada",
      from: "Desde",
      to: "Hacia",
      balance: "Balance",
      swap: "Intercambiar",
      swapping: "Intercambiando...",
      rate: "1 ETH = 1,000 $CAPITAL",
      slippage: "Slippage: 0.5%",
      fee: "Comisión: 0.3%",
      features: {
        title: "¿Por qué $CAPITAL?",
        decentralized: "Descentralizado",
        decentralizedDesc: "Sin intermediarios, control total de tus fondos",
        yield: "Alto Rendimiento", 
        yieldDesc: "Hasta 10% de rentabilidad anual promedio",
        community: "Gobernanza Comunitaria",
        communityDesc: "Vota en las decisiones del protocolo"
      },
      stats: {
        title: "Estadísticas del Protocolo",
        tvl: "Total Value Locked",
        holders: "Holders",
        volume: "Volumen 24h"
      },
      needWallet: "Conecta tu billetera para continuar con el intercambio"
    },
    en: {
      title: "Buy $CAPITAL",
      subtitle: "Swap ETH for $CAPITAL and join the pension revolution",
      connectWallet: "Connect Wallet",
      connected: "Wallet Connected",
      from: "From",
      to: "To",
      balance: "Balance",
      swap: "Swap",
      swapping: "Swapping...",
      rate: "1 ETH = 1,000 $CAPITAL",
      slippage: "Slippage: 0.5%",
      fee: "Fee: 0.3%",
      features: {
        title: "Why $CAPITAL?",
        decentralized: "Decentralized",
        decentralizedDesc: "No intermediaries, full control of your funds",
        yield: "High Yield",
        yieldDesc: "Up to 10% average annual return",
        community: "Community Governance",
        communityDesc: "Vote on protocol decisions"
      },
      stats: {
        title: "Protocol Statistics",
        tvl: "Total Value Locked",
        holders: "Holders", 
        volume: "24h Volume"
      },
      needWallet: "Connect your wallet to continue with the swap"
    }
  }

  const t = translations[language]

  const handleEthChange = (value: string) => {
    setEthAmount(value)
    const numValue = parseFloat(value) || 0
    setCapitalAmount((numValue * 1000).toString())
  }

  const handleConnectWallet = () => {
    setIsConnected(true)
  }

  const handleSwap = async () => {
    if (!isConnected) {
      handleConnectWallet()
      return
    }
    
    setIsSwapping(true)
    // Simulate swap transaction
    await new Promise(resolve => setTimeout(resolve, 3000))
    setIsSwapping(false)
  }

  return (
    <div className="flex-1 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">{t.title}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Swap Interface */}
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Intercambio</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* From ETH */}
                <div className="space-y-2">
                  <Label className="text-lg">{t.from}</Label>
                  <div className="relative">
                    <Input
                      type="number"
                      placeholder="0.0"
                      value={ethAmount}
                      onChange={(e) => handleEthChange(e.target.value)}
                      className="text-2xl h-16 pr-20"
                    />
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                      <Badge variant="secondary" className="text-lg px-3 py-1">
                        ETH
                      </Badge>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">
                    {t.balance}: {isConnected ? "2.5 ETH" : "-- ETH"}
                  </p>
                </div>

                {/* Swap Icon */}
                <div className="flex justify-center">
                  <div className="p-3 border-2 rounded-full bg-gray-50">
                    <ArrowDownUp className="h-6 w-6" />
                  </div>
                </div>

                {/* To CAPITAL */}
                <div className="space-y-2">
                  <Label className="text-lg">{t.to}</Label>
                  <div className="relative">
                    <Input
                      type="number"
                      placeholder="0.0"
                      value={capitalAmount}
                      readOnly
                      className="text-2xl h-16 pr-32 bg-gray-50"
                    />
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                      <Badge className="text-lg px-3 py-1 bg-blue-600">
                        $CAPITAL
                      </Badge>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">
                    {t.balance}: {isConnected ? "0 $CAPITAL" : "-- $CAPITAL"}
                  </p>
                </div>

                {/* Exchange Info */}
                <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Tasa de cambio:</span>
                    <span className="font-medium">{t.rate}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>{t.slippage}</span>
                    <span>{t.fee}</span>
                  </div>
                </div>

                {/* Connect Wallet / Swap Button */}
                {!isConnected ? (
                  <div className="text-center space-y-4">
                    <p className="text-gray-600">{t.needWallet}</p>
                    <Button 
                      onClick={handleConnectWallet}
                      size="lg"
                      className="w-full h-14 text-lg"
                    >
                      <Wallet className="mr-2 h-5 w-5" />
                      {t.connectWallet}
                    </Button>
                  </div>
                ) : (
                  <Button 
                    onClick={handleSwap}
                    disabled={!ethAmount || parseFloat(ethAmount) <= 0 || isSwapping}
                    size="lg"
                    className="w-full h-14 text-lg"
                  >
                    {isSwapping ? t.swapping : t.swap}
                  </Button>
                )}
              </CardContent>
            </Card>

            {/* Protocol Stats */}
            <Card>
              <CardHeader>
                <CardTitle>{t.stats.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">$2.4M</div>
                    <div className="text-sm text-gray-500">{t.stats.tvl}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">1,247</div>
                    <div className="text-sm text-gray-500">{t.stats.holders}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">$156K</div>
                    <div className="text-sm text-gray-500">{t.stats.volume}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Features Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{t.features.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h3 className="font-semibold">{t.features.decentralized}</h3>
                    <p className="text-sm text-gray-600">{t.features.decentralizedDesc}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <TrendingUp className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold">{t.features.yield}</h3>
                    <p className="text-sm text-gray-600">{t.features.yieldDesc}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-purple-500 mt-1" />
                  <div>
                    <h3 className="font-semibold">{t.features.community}</h3>
                    <p className="text-sm text-gray-600">{t.features.communityDesc}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Token Info */}
            <Card>
              <CardHeader>
                <CardTitle>$CAPITAL Token</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Precio:</span>
                  <span className="font-semibold">$0.001 ETH</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Supply Total:</span>
                  <span className="font-semibold">100M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Circulante:</span>
                  <span className="font-semibold">25M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Market Cap:</span>
                  <span className="font-semibold">$25K</span>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Acciones Rápidas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Zap className="mr-2 h-4 w-4" />
                  Ver en Etherscan
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <TrendingUp className="mr-2 h-4 w-4" />
                  Agregar a MetaMask
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="mr-2 h-4 w-4" />
                  Unirse a Discord
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
