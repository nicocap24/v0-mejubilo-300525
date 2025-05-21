"use client"

import { motion } from "framer-motion"
import { AnimatedBeliefCard } from "@/components/animated-belief-card"

// Datos de creencias positivas
const positiveBeliefs = [
  "Creemos que tu pensión depende de ti y solo de ti. No de alguien más.",
  "Creemos en un sistema transparente donde puedas ver y entender todo lo que sucede con tu dinero.",
  "Tú decides cuándo jubilarte, según tus propios términos y necesidades.",
  "Tú decides dónde jubilarte, sin restricciones geográficas.",
  "Tú decides con quién compartir tu pensión y cómo distribuirla.",
  "Tú decides en qué moneda recibes tus beneficios.",
  "Tú decides dónde se invierte tu dinero, alineado con tus valores.",
  "Tú eliges quién administra tus fondos, con libertad para cambiar cuando lo desees.",
  "Creemos en un sistema libre, simple y comprensible para todos.",
  "Creemos en un sistema global que te acompaña donde sea que vayas.",
  "Creemos en un sistema que funciona para nosotros, y no nosotros para el sistema.",
  "Creemos en un sistema donde eres el dueño de tu destino financiero.",
  "Creemos en un sistema donde todos podemos jubilarnos felices y con dignidad.",
]

// Datos de creencias negativas
const negativeBeliefs = [
  "Donde tu dinero no es realmente tuyo.",
  "Donde tu pensión no genera los retornos que mereces.",
  "Donde tu dinero se lo apropian políticos o empresarios sin tu consentimiento.",
  "Donde no hay libertad de elección sobre tu futuro financiero.",
  "Donde no hay transparencia sobre cómo se maneja tu dinero.",
  "Donde las comisiones excesivas reducen significativamente tu pensión.",
  "Donde las decisiones importantes sobre tu jubilación las toman otros.",
  "Donde la información es confusa y difícil de entender a propósito.",
  "Donde no hay innovación ni mejora continua del sistema.",
  "Donde no hay confianza entre las personas y las instituciones.",
]

export default function EnQueCreemosClient() {
  return (
    <>
      {/* Beliefs Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <AnimatedBeliefCard title="Creemos en" beliefs={positiveBeliefs} type="positive" />
          <AnimatedBeliefCard title="No creemos en" beliefs={negativeBeliefs} type="negative" />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6">¿Compartes nuestros valores?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Únete a nuestra comunidad y construyamos juntos un futuro previsional más justo y transparente.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="/register"
                className="bg-white text-orange-500 hover:bg-orange-50 px-8 py-3 rounded-lg font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Crear una cuenta
              </motion.a>
              <motion.a
                href="/blog"
                className="bg-orange-600 hover:bg-orange-700 px-8 py-3 rounded-lg font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Leer nuestro blog
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
