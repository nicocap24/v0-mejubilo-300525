export type Documento = {
  id: string
  titulo: string
  descripcion: string
  categoria: string
  autor: string
  fecha: string
  url: string
  imagen: string
  destacado?: boolean
}

export type Categoria = {
  id: string
  nombre: string
}

export const categorias: Categoria[] = [
  { id: "todos", nombre: "Todos" },
  { id: "afp", nombre: "Sistema AFP" },
  { id: "reforma", nombre: "Reforma Previsional" },
  { id: "ahorro", nombre: "Ahorro Voluntario" },
  { id: "jubilacion", nombre: "Jubilación" },
  { id: "inversion", nombre: "Inversiones" },
  { id: "legal", nombre: "Documentos Legales" },
  { id: "guias", nombre: "Guías Prácticas" },
]

export const documentos: Documento[] = [
  {
    id: "1",
    titulo: "Guía Completa del Sistema AFP en Chile",
    descripcion:
      "Todo lo que necesitas saber sobre cómo funciona el sistema de AFP en Chile, sus ventajas y desventajas.",
    categoria: "afp",
    autor: "MeJubilo",
    fecha: "Enero 2023",
    url: "/documentos/guia-afp-chile.pdf",
    imagen: "/pension-document.png",
    destacado: true,
  },
  {
    id: "2",
    titulo: "Reforma Previsional 2023: Análisis y Perspectivas",
    descripcion: "Análisis detallado de la propuesta de reforma previsional y sus posibles impactos en los jubilados.",
    categoria: "reforma",
    autor: "Dr. Carlos Méndez",
    fecha: "Marzo 2023",
    url: "/documentos/reforma-previsional-2023.pdf",
    imagen: "/placeholder.svg?height=400&width=600&query=reforma%20previsional",
    destacado: true,
  },
  {
    id: "3",
    titulo: "Estrategias de Ahorro Voluntario para Mejorar tu Pensión",
    descripcion: "Guía práctica con estrategias efectivas para complementar tu pensión a través del ahorro voluntario.",
    categoria: "ahorro",
    autor: "María González",
    fecha: "Abril 2023",
    url: "/documentos/estrategias-ahorro-voluntario.pdf",
    imagen: "/placeholder.svg?height=400&width=600&query=ahorro%20voluntario",
  },
  {
    id: "4",
    titulo: "¿Cuándo y Cómo Jubilarse? Guía Paso a Paso",
    descripcion:
      "Todo lo que necesitas saber para planificar tu jubilación de manera efectiva y en el momento adecuado.",
    categoria: "jubilacion",
    autor: "MeJubilo",
    fecha: "Mayo 2023",
    url: "/documentos/guia-jubilacion.pdf",
    imagen: "/placeholder.svg?height=400&width=600&query=jubilacion%20planificacion",
  },
  {
    id: "5",
    titulo: "Inversiones para el Retiro: Opciones Seguras y Rentables",
    descripcion:
      "Análisis de las mejores opciones de inversión para asegurar un retiro cómodo y financieramente estable.",
    categoria: "inversion",
    autor: "Felipe Rojas",
    fecha: "Junio 2023",
    url: "/documentos/inversiones-retiro.pdf",
    imagen: "/placeholder.svg?height=400&width=600&query=inversiones%20retiro",
  },
  {
    id: "6",
    titulo: "Decreto Ley 3.500: Explicado de Forma Simple",
    descripcion: "Explicación clara y sencilla del Decreto Ley 3.500 que regula el sistema de pensiones en Chile.",
    categoria: "legal",
    autor: "Abogado Juan Pérez",
    fecha: "Julio 2023",
    url: "/documentos/decreto-ley-3500.pdf",
    imagen: "/placeholder.svg?height=400&width=600&query=decreto%20ley%20pensiones",
  },
  {
    id: "7",
    titulo: "Cómo Calcular tu Pensión Futura",
    descripcion: "Guía práctica para estimar cuánto recibirás de pensión según tus ahorros actuales y proyecciones.",
    categoria: "guias",
    autor: "MeJubilo",
    fecha: "Agosto 2023",
    url: "/documentos/calculo-pension.pdf",
    imagen: "/placeholder.svg?height=400&width=600&query=calculo%20pension",
    destacado: true,
  },
  {
    id: "8",
    titulo: "Multifondos: ¿Cuál es el Adecuado para Ti?",
    descripcion:
      "Análisis comparativo de los diferentes multifondos y cómo elegir el más adecuado según tu edad y perfil de riesgo.",
    categoria: "afp",
    autor: "Ana Martínez",
    fecha: "Septiembre 2023",
    url: "/documentos/multifondos-guia.pdf",
    imagen: "/placeholder.svg?height=400&width=600&query=multifondos%20afp",
  },
  {
    id: "9",
    titulo: "Pensión Básica Solidaria: Requisitos y Postulación",
    descripcion:
      "Todo lo que necesitas saber sobre la Pensión Básica Solidaria, quiénes pueden acceder y cómo postular.",
    categoria: "guias",
    autor: "MeJubilo",
    fecha: "Octubre 2023",
    url: "/documentos/pension-solidaria.pdf",
    imagen: "/placeholder.svg?height=400&width=600&query=pension%20solidaria",
  },
  {
    id: "10",
    titulo: "Historia del Sistema Previsional Chileno",
    descripcion:
      "Recorrido histórico por la evolución del sistema previsional en Chile desde sus inicios hasta la actualidad.",
    categoria: "afp",
    autor: "Dr. Roberto Fuentes",
    fecha: "Noviembre 2023",
    url: "/documentos/historia-sistema-previsional.pdf",
    imagen: "/placeholder.svg?height=400&width=600&query=historia%20sistema%20previsional",
  },
  {
    id: "11",
    titulo: "Comparativa Internacional de Sistemas de Pensiones",
    descripcion:
      "Análisis comparativo de los sistemas de pensiones en diferentes países y qué podemos aprender de ellos.",
    categoria: "reforma",
    autor: "Instituto de Previsión Social",
    fecha: "Diciembre 2023",
    url: "/documentos/comparativa-internacional.pdf",
    imagen: "/placeholder.svg?height=400&width=600&query=sistemas%20pensiones%20internacional",
  },
  {
    id: "12",
    titulo: "Guía de Trámites para Jubilados",
    descripcion: "Guía completa con todos los trámites que debes realizar al momento de jubilarte.",
    categoria: "guias",
    autor: "MeJubilo",
    fecha: "Enero 2024",
    url: "/documentos/tramites-jubilacion.pdf",
    imagen: "/placeholder.svg?height=400&width=600&query=tramites%20jubilacion",
  },
]
