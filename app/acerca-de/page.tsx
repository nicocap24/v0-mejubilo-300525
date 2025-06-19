"use client"

import { useState } from "react"
import { PageLayout } from "@/components/layouts/page-layout"
import { InfoSection } from "@/components/ui/info-section"
import { CTASection } from "@/components/ui/cta-section"
import { Button } from "@/components/ui/button"
import { CollaboratorModal } from "@/components/collaborator-modal"

export default function AcercaDePage() {
  const [isCollaboratorModalOpen, setIsCollaboratorModalOpen] = useState(false)

  const teamMembers = [
    {
      name: "Nicolás Arrieta",
      links: [
        { label: "X", url: "https://x.com/nicocapital", icon: "x" },
        { label: "Instagram", url: "https://www.instagram.com/nicocapital24/", icon: "instagram" },
      ],
    },
    {
      name: "Mauricio Pastorini",
      links: [
        { label: "X", url: "https://x.com/mauricio1964", icon: "x" },
        { label: "Website", url: "https://gestion-online.cl", icon: "website" },
      ],
    },
    {
      name: "Javier Marquéz",
      links: [{ label: "Website", url: "https://javier-marquez.web.app/", icon: "website" }],
    },
    {
      name: "Cristián Valdivia",
      links: [{ label: "Website", url: "https://www.cristianvaldivia.cl/", icon: "website" }],
    },
  ]

  const renderIcon = (iconType: string) => {
    switch (iconType) {
      case "x":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        )
      case "instagram":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        )
      case "website":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.817zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.986z" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <PageLayout>
      <div className="w-full max-w-4xl mx-auto bg-white/95 backdrop-blur-sm rounded-lg shadow-lg">
        {/* Custom Header with Logo Style */}
        <div className="text-center py-12 px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Acerca de <span className="text-gray-800">Me </span>
            <span className="text-green-500">Jubilo</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Somos una plataforma que busca simplificar y transparentar el tema de la jubilación para miles de personas
            en Chile y el Continente
          </p>
        </div>

        <div className="px-8 pb-8 space-y-12">
          <InfoSection title="Que queremos">
            <p className="text-gray-700">
              Queremos democratizar el acceso a información previsional clara y transparente para todos los chilenos.
              Creemos que cada persona merece entender cómo funcionará su jubilación y tomar decisiones informadas sobre
              su futuro financiero.
            </p>
          </InfoSection>

          <InfoSection title="Tiempo atrás nos dimos cuenta">
            <p className="text-gray-700">
              Tiempo atrás nos dimos cuenta que existe una gran brecha de información en el sistema previsional chileno.
              La mayoría de las personas no entienden cómo funciona su pensión, cuánto recibirán al jubilar, ni qué
              pueden hacer para mejorarla. Esta falta de transparencia y educación financiera nos motivó a crear
              MeJubilo.
            </p>
          </InfoSection>

          <InfoSection title="En que creemos">
            <div className="space-y-4">
              <p className="text-gray-700">
                Creemos en la transparencia y la educación como pilares fundamentales para mejorar el sistema de
                pensiones en Chile. Nuestros valores incluyen:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>Transparencia:</strong> Información clara y accesible sobre cómo funcionan las pensiones.
                </li>
                <li>
                  <strong>Educación:</strong> Empoderar a las personas con conocimiento para tomar mejores decisiones.
                </li>
                <li>
                  <strong>Innovación:</strong> Usar la tecnología para simplificar conceptos complejos.
                </li>
                <li>
                  <strong>Independencia:</strong> Ofrecer información objetiva sin conflictos de interés.
                </li>
              </ul>
            </div>
          </InfoSection>

          <InfoSection title="Quienes somos" className="text-center">
            <p className="text-gray-700 mb-6">
              Nada de esto sería posible si no fuera por nuestra red de colaboradores remotos apasionados por las
              pensiones y la tecnología.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {teamMembers.map((member) => (
                <div key={member.name} className="bg-gray-50 p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">{member.name}</h3>
                  <div className="flex justify-center space-x-3">
                    {member.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-12 h-12 text-blue-600 hover:text-blue-800 bg-white rounded-lg border hover:shadow-sm transition-all"
                        title={link.label}
                      >
                        {renderIcon(link.icon)}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Collaboration Section */}
            <div className="mt-12 bg-orange-50 p-8 rounded-lg border border-orange-200">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">¿Te gustaría colaborar con nosotros?</h3>
              <p className="text-gray-700 mb-6">
                Estamos siempre buscando personas apasionadas por mejorar el sistema de pensiones en Chile.
              </p>

              {/* Job Positions */}
              <div className="space-y-6 mb-8">
                <h4 className="text-xl font-semibold text-gray-800">Cargos que estamos buscando:</h4>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-4 rounded-lg border">
                    <h5 className="font-semibold text-gray-800 mb-2">AI Master 1, 2, 3</h5>
                    <p className="text-sm text-gray-600">
                      Si eres bueno usando AI para automatizar procesos, armar flujos automatizados, creación, edición,
                      publicación de contenido. Campañas de mailing.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border">
                    <h5 className="font-semibold text-gray-800 mb-2">Financial Risk Management</h5>
                    <p className="text-sm text-gray-600">
                      Si has trabajado en compañías de seguros o bancos en el área de riesgo, también nos interesa
                      conversar contigo.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border">
                    <h5 className="font-semibold text-gray-800 mb-2">Cargo Abierto</h5>
                    <p className="text-sm text-gray-600">
                      Decide en qué quieres trabajar, qué crees que nos podría generar valor y haznos una propuesta. No
                      estamos cerrados a escuchar cosas que no habíamos pensado.
                    </p>
                  </div>
                </div>
              </div>

              <Button
                onClick={() => setIsCollaboratorModalOpen(true)}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg"
              >
                Quiero colaborar
              </Button>
            </div>
          </InfoSection>

          <CTASection
            title="¿Ya quieres jubilar?"
            description="Descubre cuánto capital necesitarías para financiar tu jubilación ideal"
            buttonText="Invest"
            buttonHref="/invest"
            variant="green"
          />
        </div>
      </div>

      {/* Collaborator Modal */}
      <CollaboratorModal isOpen={isCollaboratorModalOpen} onClose={() => setIsCollaboratorModalOpen(false)} />
    </PageLayout>
  )
}
