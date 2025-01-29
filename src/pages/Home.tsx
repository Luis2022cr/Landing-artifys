
import { useState } from "react"
import { motion } from "framer-motion"
import {
  Code,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Database,
  LayoutDashboard,
  Settings,
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
    { name: "Vercel", img: "https://cdn.worldvectorlogo.com/logos/vercel.svg" },
    { name: "Cloudflare", img: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/cloudflare-color.png" },
  ];

  const projects = [
    {
      title: "E-commerce",
      description: "Tienda online responsiva con carrito de compra",
      image: "https://pub-f664d02abdda4d49944c0443c9a67cd1.r2.dev/artifys.online.png", // Reemplaza con la ruta de la imagen
      link: "https://artifys.online/", // Reemplaza con el enlace del proyecto
    },
    {
      title: "Landing Pages",
      description: "Web informativa y que muestra a la empresa en detalle, DarkMode",
      image: "https://pub-f664d02abdda4d49944c0443c9a67cd1.r2.dev/2025-01-29_15h07_44.png", // Reemplaza con la ruta de la imagen
      link: "https://landing-artifys.pages.dev/", // Reemplaza con el enlace del proyecto
    },
    {
      title: "Sistema de Gestión (En desarrollo)",
      description: "Plataforma para administrar inventarios y ventas",
      image: "https://pub-f664d02abdda4d49944c0443c9a67cd1.r2.dev/management-system.webp", // Reemplaza con la ruta de la imagen
      link: "#", // Reemplaza con el enlace del proyecto
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
            <a href="https://www.instagram.com/artifys_oficial/" target="_black">

            Contáctanos
            </a>
          </motion.button>
        </header>

        <section className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Code />, // Icono de desarrollo web
                title: "Desarrollo Web Personalizado",
                description: "Creamos sitios web a medida, optimizados para tus necesidades y objetivos.",
              },
              // {
              //   icon: <Globe />, // Icono de SEO
              //   title: "Optimización SEO",
              //   description: "Mejoramos tu visibilidad en buscadores para atraer más tráfico orgánico.",
              // },
              {
                icon: <LayoutDashboard />, // Icono de diseño UI/UX
                title: "Diseño UI/UX",
                description: "Diseños intuitivos y atractivos que mejoran la experiencia del usuario.",
              },
              // {
              //   icon: <ShoppingCart />, // Icono de e-commerce
              //   title: "Tiendas Online",
              //   description: "Desarrollo de e-commerce con carrito de comprar para resivir pedidos integradas y gestión de inventarios.",
              // },
              {
                icon: <Database />, // Icono de bases de datos
                title: "Backend y APIs",
                description: "Desarrollo de sistemas robustos y APIs escalables para aplicaciones web.",
              },
              {
                icon: <Settings />, // Icono de mantenimiento
                title: "Mantenimiento Web",
                description: "Soporte continuo y actualizaciones para mantener tu sitio en óptimas condiciones.",
              },
              // {
              //   icon: <Smartphone />, // Icono de desarrollo móvil
              //   title: "Desarrollo Móvil",
              //   description: "Aplicaciones nativas y multiplataforma para iOS y Android.",
              // },
            ].map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="bg-cyan-200 dark:bg-gray-800 py-16">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-bold mb-8 text-center">Por qué elegirnos</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          title: "Enfoque en Calidad",
          description: "Nos comprometemos a entregar soluciones robustas y bien diseñadas.",
        },
        {
          title: "Atención Personalizada",
          description: "Cada cliente es único, y nos adaptamos a sus necesidades específicas.",
        },
        {
          title: "Flexibilidad",
          description: "Soluciones adaptables que crecen junto con tu negocio.",
        },
        { title: "Soporte", description: "Atención al cliente personalizada y con tiempos cortos" },
      ].map((feature, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg text-center"
        >
          <CheckCircle className="text-green-500 mb-4 mx-auto" size={24} />
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

        <section className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Alguno de Nuestros Productos</h2>
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

        <section className="bg-cyan-200 dark:bg-gray-800 py-16">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-bold mb-8 text-center">Síguenos en Redes Sociales</h2>
    <div className="flex justify-center space-x-8">
      {/* Facebook */}
      <a
        href="https://www.facebook.com/artifys" // Reemplaza con tu enlace de Facebook
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-700 dark:hover:text-blue-500 transition-colors"
        aria-label="Facebook"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.234 2.686.234v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/artifys_oficial/" // Reemplaza con tu enlace de Instagram
        // target="_blank"
        rel="noopener noreferrer"
        className="text-pink-600 hover:text-pink-700 dark:hover:text-pink-500 transition-colors"
        aria-label="Instagram"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      </a>

      {/* WhatsApp */}
      <a
        href="#" // Reemplaza con tu enlace de WhatsApp
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-600 hover:text-green-700 dark:hover:text-green-500 transition-colors"
        aria-label="WhatsApp"
      >
        <img className="h-12 w-12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/2062095_application_chat_communication_logo_whatsapp_icon.svg/2048px-2062095_application_chat_communication_logo_whatsapp_icon.svg.png" alt="whatsap icon" />
      </a>
    </div>
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
                    "El tiempo de desarrollo varía según la complejidad del proyecto. Un sitio web simple puede tomar 2-4 semanas, mientras que una aplicación compleja puede llevar varios meses. Proporcionamos un tiempo detallado al inicio de cada proyecto.",
                },
                {
                  question: "¿Ofrecen mantenimiento después del lanzamiento?",
                  answer:
                    "Sí, ofrecemos planes de mantenimiento y soporte continuo para asegurar que tu proyecto siga funcionando sin problemas y se mantenga actualizado con las últimas tecnologías y estándares de seguridad.",
                },
                {
                  question: "¿Pueden ayudar con el diseño UX/UI?",
                  answer:
                    "Absolutamente. Contamos con un desarrollo UX/UI para crear interfaces atractivas y fáciles de usar que se alineen con tu marca y objetivos de negocio.",
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

