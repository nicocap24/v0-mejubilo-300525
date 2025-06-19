import { PageLayout } from "@/components/layouts/page-layout"
import { PageCard } from "@/components/ui/page-card"
import { InfoSection } from "@/components/ui/info-section"
import { CTASection } from "@/components/ui/cta-section"

export default function AcercaDePage() {
  const teamMembers = [
    {
      name: "Nicolás Arrieta",
      links: [
        { label: "Twitter", url: "https://x.com/nicocapital" },
        { label: "Instagram", url: "https://www.instagram.com/nicocapital24/" },
      ],
    },
    {
      name: "Mauricio Pastorini",
      links: [
        { label: "Twitter", url: "https://x.com/mauricio1964" },
        { label: "Website", url: "https://gestion-online.cl" },
      ],
    },
    { name: "Javier Marquéz", links: [{ label: "Website", url: "https://javier-marquez.web.app/" }] },
    { name: "Cristián Valdivia", links: [{ label: "Website", url: "https://www.cristianvaldivia.cl/" }] },
  ]

  return (
    <PageLayout>
      <PageCard title="Acerca de MeJubilo">
        <InfoSection title="Quienes somos">
          <p className="text-gray-700 mb-6">
            Nada de esto sería posible si no fuera por nuestra red de colaboradores remotos apasionados por las
            pensiones y la tecnología.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-gray-50 p-6 rounded-lg border">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                <div className="flex space-x-3 mb-4">
                  {member.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-orange-50 p-6 rounded-lg border border-orange-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">¿Te gustaría colaborar con nosotros?</h3>
            <p className="text-gray-700 mb-4">
              Estamos siempre buscando personas apasionadas por mejorar el sistema de pensiones en Chile.
            </p>
            <a
              href="mailto:nico@pensionfi.com"
              className="inline-flex items-center justify-center px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors"
            >
              Escríbenos a: nico@pensionfi.com
            </a>
          </div>
        </InfoSection>

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
            La mayoría de las personas no entienden cómo funciona su pensión, cuánto recibirán al jubilar, ni qué pueden
            hacer para mejorarla. Esta falta de transparencia y educación financiera nos motivó a crear MeJubilo.
          </p>
        </InfoSection>

        <InfoSection title="En que creemos">
          <div className="space-y-4">
            <p className="text-gray-700">
              Creemos en la transparencia y la educación como pilares fundamentales para mejorar el sistema de pensiones
              en Chile. Nuestros valores incluyen:
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

        <CTASection
          title="¿Ya quieres jubilar?"
          description="Descubre cuánto capital necesitarías para financiar tu jubilación ideal"
          buttonText="Invest"
          buttonHref="/invest"
          variant="blue"
        />
      </PageCard>
    </PageLayout>
  )
}
