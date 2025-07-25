import { Calendar, Award, TrendingUp, Users } from "lucide-react"

export function History() {
  const milestones = [
    {
      year: "2016",
      title: "El despertar",
      description:
        "Nuestro creador Nicolás, estudiando Ingeniería Comercial en la FEN Universidad de Chile, se topa con una marcha masiva 'No+AFP' al salir de clases. El contraste entre lo que decía su profesor de Mercado de Capitales y lo que gritaba la calle le llamó poderosamente la atención.",
      icon: Calendar,
      gradient: "from-red-400 to-red-600",
    },
    {
      year: "2018",
      title: "Retirateantes.com",
      description:
        "Lanzamos un cotizador de AFP donde 'Nico', un asistente virtual, recomendaba una AFP basándose en el saldo y las comisiones que estabas pagando.",
      icon: TrendingUp,
      gradient: "from-blue-400 to-blue-600",
    },
    {
      year: "2019",
      title: "El Chico AFP",
      description:
        "Durante el estallido social, Nico trabajaba como analista de inversiones administrando US$300m en Sanhattan. Crea la cuenta de Twitter 'El Chico AFP', amasando miles de visualizaciones con su tono claro y directo, derribando mitos del sistema AFP.",
      icon: Users,
      gradient: "from-purple-400 to-purple-600",
    },
    {
      year: "2020",
      title: "Newsletter privado",
      description:
        "El 18 de Septiembre lanzamos un newsletter privado por $2.000 mensuales, enviando información semanal sobre fondos y acontecimientos regulatorios. Se suscribieron cerca de 200 personas.",
      icon: Award,
      gradient: "from-emerald-400 to-emerald-600",
    },
    {
      year: "2021",
      title: "Primer simulador",
      description:
        "Junto con Mauricio Pastorini desarrollamos nuestro primer simulador de pensiones, introduciendo el concepto de 'brecha previsional' - la diferencia entre pensión deseada y esperada.",
      icon: TrendingUp,
      gradient: "from-orange-400 to-orange-600",
    },
    {
      year: "2024",
      title: "DecideTu.cl y Blockchain",
      description:
        "Colaboramos con la Asociación de AFP en DecideTu.cl para comparar beneficios de la reforma. También participamos en hackathons de Lens Protocol y Base, creando soluciones blockchain para pensiones.",
      icon: Award,
      gradient: "from-indigo-400 to-indigo-600",
    },
    {
      year: "2025",
      title: "MeJubilo.com",
      description:
        "Nico se acredita como agente de rentas vitalicias. Nace MeJubilo.com, plataforma 100% digital e independiente que muestra pensión integral: AFP, PGU y Seguro Social. Herramienta inédita en la industria.",
      icon: Calendar,
      gradient: "from-emerald-400 to-blue-600",
    },
  ]

  return (
    <section id="nuestra-historia" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Nuestra</span>
            <br />
            <span className="bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">
              Historia
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            La verdad es que llevamos bastante tiempo haciendo cosas para la industria previsional. En una industria con
            alto descontento que no ha innovado en 40 años, sentimos que hacen falta nuevas propuestas.
          </p>
        </div>

        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${milestone.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
                >
                  <milestone.icon className="w-10 h-10 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 shadow-lg">
                  <div className="flex items-center space-x-4 mb-4">
                    <span
                      className={`text-2xl font-bold bg-gradient-to-r ${milestone.gradient} bg-clip-text text-transparent`}
                    >
                      {milestone.year}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900">{milestone.title}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">{milestone.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-emerald-50 to-blue-50 p-8 rounded-3xl border border-emerald-200/50">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Resumen</h3>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              La verdad es que ha sido una larga trayectoria. Toda una carrera probablemente. Sin embargo, vamos por
              más. Sentimos que no hemos tocado ni la punta del iceberg, y que lo mejor está hacia adelante.
            </p>
            <p className="text-lg text-gray-600 mt-6 font-semibold">
              Agradecemos a todos los clientes que han confiado en nosotros.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
