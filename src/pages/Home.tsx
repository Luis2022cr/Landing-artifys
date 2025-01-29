
import { useState } from "react"
import { motion } from "framer-motion"
import {
  Code,
  Smartphone,
  Globe,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  // ChevronLeft,
  // ChevronRight,
} from "lucide-react"

export default function Home() {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null)
  // const [currentTestimonial, setCurrentTestimonial] = useState(0)

  // const testimonials = [
  //   {
  //     name: "María González",
  //     company: "FashionTech",
  //     testimonial:
  //       "Artifys Solutions transformó nuestra idea en una plataforma de e-commerce increíble. ¡Superaron todas nuestras expectativas!",
  //   },
  //   {
  //     name: "Carlos Rodríguez",
  //     company: "FitLife App",
  //     testimonial:
  //       "El equipo de Artifys demostró un profundo conocimiento en desarrollo móvil. Nuestra app es un éxito gracias a ellos.",
  //   },
  //   {
  //     name: "Laura Martínez",
  //     company: "EduOnline",
  //     testimonial:
  //       "La atención al detalle y el soporte continuo de Artifys hicieron que nuestro proyecto fuera un proceso sin estrés y con resultados excepcionales.",
  //   },
  // ]

  const technologies = [
    { name: "React", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
    { name: "Vite", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/2078px-Vitejs-logo.svg.png" },
    { name: "TypeScript", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" },
    { name: "Node.js", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" },
    { name: "Tailwind CSS", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Vercel", img: "https://cdn.worldvectorlogo.com/logos/vercel.svg"},
    { name: "Cloudflare", img: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/cloudflare-color.png" },
  ];

  const projects = [
    {
      title: "E-commerce Artifys",
      description: "Tienda online responsiva con carrito de compra",
      image: "https://pub-f664d02abdda4d49944c0443c9a67cd1.r2.dev/artifys.online.png", // Reemplaza con la ruta de la imagen
      link: "https://artifys.online/", // Reemplaza con el enlace del proyecto
    },
    {
      title: "App de Fitness",
      description: "Aplicación móvil para seguimiento de rutinas y nutrición",
      image: "https://pub-f664d02abdda4d49944c0443c9a67cd1.r2.dev/fitness-app.webp", // Reemplaza con la ruta de la imagen
      link: "https://fitnessapp.example.com", // Reemplaza con el enlace del proyecto
    },
    {
      title: "Portal Educativo",
      description: "Plataforma de cursos online con sistema de videoconferencias",
      image: "https://pub-f664d02abdda4d49944c0443c9a67cd1.r2.dev/education-portal.webp", // Reemplaza con la ruta de la imagen
      link: "https://educationportal.example.com", // Reemplaza con el enlace del proyecto
    },
    {
      title: "Sistema de Gestión",
      description: "Plataforma para administrar inventarios y ventas",
      image: "https://pub-f664d02abdda4d49944c0443c9a67cd1.r2.dev/management-system.webp", // Reemplaza con la ruta de la imagen
      link: "https://managementsystem.example.com", // Reemplaza con el enlace del proyecto
    },
  ];

  // const nextTestimonial = () => {
  //   setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  // }

  // const prevTestimonial = () => {
  //   setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  // }

  return (
    <div className={`min-h-screen`}>
      <div className=" dark:from-gray-900 dark:to-gray-800 min-h-screen text-gray-800 dark:text-gray-100 transition-colors duration-300">
        
        <header className="container mx-auto px-6 py-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold mb-4"
          >
            Bienvenido a Artifys Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl mb-8"
          >
            Creamos soluciones web, profesionales y adaptadas a tus necesidades
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            Contáctanos
          </motion.button>
        </header>

        <section className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Code />, title: "Desarrollo Web", description: "Creamos sitios web modernos y responsivos" },
              {
                icon: <Smartphone />,
                title: "Desarrollo Móvil",
                description: "Aplicaciones nativas y multiplataforma",
              },
              { icon: <Globe />, title: "SEO", description: "Optimizamos tu presencia en línea" },
            ].map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="bg-cyan-200 dark:bg-gray-800 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Por qué elegirnos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Experiencia", description: "Más de 10 años en el sector" },
                { title: "Innovación", description: "Utilizamos las últimas tecnologías" },
                { title: "Calidad", description: "Código limpio y optimizado" },
                { title: "Soporte", description: "Atención al cliente 24/7" },
              ].map((feature, index) => (
                <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                  <CheckCircle className="text-green-500 mb-4" size={24} />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-16">
  <h2 className="text-3xl font-bold mb-8 text-center">Nuestros Productos</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {projects.map((project, index) => (
      <a
        key={index}
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
      >
        <img
          src={project.image}
          alt={project.title}
          width={400}
          height={300}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
        </div>
      </a>
    ))}
  </div>
</section>

        {/* <section className="bg-cyan-200 dark:bg-gray-800 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Lo que dicen nuestros clientes</h2>
            <div className="max-w-4xl mx-auto relative">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <p className="mb-4 italic">"{testimonials[currentTestimonial].testimonial}"</p>
                <div className="font-semibold">{testimonials[currentTestimonial].name}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonials[currentTestimonial].company}
                </div>
              </div>
              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-full bg-white dark:bg-gray-700 p-2 rounded-full shadow-lg"
                aria-label="Testimonio anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-full bg-white dark:bg-gray-700 p-2 rounded-full shadow-lg"
                aria-label="Siguiente testimonio"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </section> */}

        <section className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Tecnologías que utilizamos
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {technologies.map((tech, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={tech.img} alt={tech.name} width={80} height={80} className="mb-2" />
            <span className="text-sm">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>

        <section className="bg-cyan-200 dark:bg-gray-800 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Preguntas Frecuentes</h2>
            <div className="max-w-2xl mx-auto">
              {[
                {
                  question: "¿Cuánto tiempo toma desarrollar un proyecto?",
                  answer:
                    "El tiempo de desarrollo varía según la complejidad del proyecto. Un sitio web simple puede tomar 2-4 semanas, mientras que una aplicación compleja puede llevar varios meses. Proporcionamos un cronograma detallado al inicio de cada proyecto.",
                },
                {
                  question: "¿Ofrecen mantenimiento después del lanzamiento?",
                  answer:
                    "Sí, ofrecemos planes de mantenimiento y soporte continuo para asegurar que tu proyecto siga funcionando sin problemas y se mantenga actualizado con las últimas tecnologías y estándares de seguridad.",
                },
                {
                  question: "¿Pueden ayudar con el diseño UX/UI?",
                  answer:
                    "Absolutamente. Contamos con un equipo de diseñadores UX/UI expertos que trabajan en estrecha colaboración con nuestros desarrolladores para crear interfaces atractivas y fáciles de usar que se alineen con tu marca y objetivos de negocio.",
                },
              ].map((faq, index) => (
                <div key={index} className="mb-4">
                  <button
                    className="flex justify-between items-center w-full text-left font-semibold p-4 bg-white dark:bg-gray-700 rounded-lg focus:outline-none"
                    onClick={() => setActiveAccordion(activeAccordion === `item-${index}` ? null : `item-${index}`)}
                  >
                    {faq.question}
                    {activeAccordion === `item-${index}` ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </button>
                  {activeAccordion === `item-${index}` && (
                    <div className="p-4 bg-gray-100 dark:bg-gray-600 rounded-b-lg mt-1">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-16">
          <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">¿Listo para impulsar tu negocio?</h2>
            <p className="text-xl mb-8">Contáctanos hoy y comencemos a trabajar en tu próximo proyecto exitoso.</p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Solicitar Cotización
            </button>
          </div>
        </section>

        <section className="bg-cyan-200 dark:bg-gray-800 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Contáctanos</h2>
            <form className="max-w-lg mx-auto">
              <input
                type="text"
                placeholder="Nombre"
                className="w-full mb-4 p-2 rounded bg-white dark:bg-gray-700"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full mb-4 p-2 rounded bg-white dark:bg-gray-700"
                required
              />
              <textarea
                placeholder="Mensaje"
                rows={4}
                className="w-full mb-4 p-2 rounded bg-white dark:bg-gray-700"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                Enviar
              </button>
            </form>
          </div>
        </section>

        <footer className="bg-gray-300 dark:bg-gray-900 py-8">
          <div className="container mx-auto px-6 text-center">
            <p>&copy; 2025 Artifys Solutions. Todos los derechos reservados.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

