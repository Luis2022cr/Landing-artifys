import { useEffect, ReactNode } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  Globe,
  Layers,
  Users,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
} from "lucide-react"
import { Link } from "react-router-dom"
import logoArtifys from "@/assets/logoArtifysSolutions.png"
import logoArtifysGris from "@/assets/logoArtifysSolutionsGrisBlanco.png"
// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

// Add new animation variants after the staggerContainer
const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}

// Definir interfaces para las props de cada componente
interface AnimatedSectionProps {
  children: ReactNode
  className?: string
}

interface ProjectCardProps {
  title: string
  description: string
  icon: ReactNode
  img?: string
  index: number
  link: string
}

interface ServiceCardProps {
  title: string
  description: string
  icon: ReactNode
}

// Component for animated sections
const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = "" }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={fadeInUp} className={className}>
      {children}
    </motion.div>
  )
}

// Project card component
const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, icon, img, index, link }) => {
  return (
    <motion.div
      variants={index % 2 === 0 ? slideInLeft : slideInRight}
      className="relative overflow-hidden rounded-xl shadow-2xl mb-20 border-2"
    >
      <div className="relative">
        <img
          src={img || logoArtifys}
          alt={title}
          width={1200}
          height={600}
          className="w-full h-[400px] object-cover opacity-10"
        />
      </div>

      <div className="absolute inset-0 flex flex-col justify-center p-10 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="max-w-5xl"
        >
          <div className="flex items-center mb-6">
            <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm mr-4">{icon}</div>
            <h3 className="text-3xl font-bold">{title}</h3>
          </div>
          <p className="text-xl text-white mb-8 w-full">{description}</p>
          <a href={link} target="_blank" className="text-blue-900 hover:bg-white font-medium text-lg px-8 bg-slate-200">
            Ver Ejemplo
          </a>
        </motion.div>
      </div>
    </motion.div>
  )
}

// Service card component
const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <motion.div
      variants={scaleUp}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="p-8 rounded-xl bg-white shadow-lg border border-blue-100 group hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 transition-all duration-300"
    >
      <div className="bg-gradient-to-br from-blue-100 to-cyan-50 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:from-blue-500 group-hover:to-cyan-500 transition-all duration-300">
        <div className="text-blue-600 group-hover:text-white transition-colors duration-300">{icon}</div>
      </div>
      <h3 className="text-xl font-bold mb-3 text-blue-900">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </motion.div>
  )
}

const projects = [
  {
    title: "E-commerce",
    description: "Desarrollamos tiendas online totalmente adaptadas a tu negocio, desde catálogos sencillos con carrito de compras hasta plataformas avanzadas con múltiples funciones. Ofrecemos soluciones escalables que incluyen gestión de productos, integración de pagos y opciones personalizadas como galerías de imágenes, filtros avanzados y más. Nos adaptamos a tus necesidades para brindarte la mejor experiencia de venta en línea.",
    image: "https://pub-f664d02abdda4d49944c0443c9a67cd1.r2.dev/artifys.online.png", // Reemplaza con la ruta de la imagen
    link: "https://artifys.online/", // Reemplaza con el enlace del proyecto
  },
  {
    title: "Landing Pages",
    description: "Creamos Landing Pages diseñadas estratégicamente para dar a conocer tu empresa de manera efectiva. Con un diseño moderno, secciones informativas y optimización para captar clientes, nuestras páginas te ayudarán a generar impacto y aumentar tu visibilidad en línea.",
    image: "https://pub-f664d02abdda4d49944c0443c9a67cd1.r2.dev/2025-01-29_15h07_44.png", // Reemplaza con la ruta de la imagen
    link: "https://landing-artifys.pages.dev/", // Reemplaza con el enlace del proyecto
  },
  // {
  //   title: "Sistema de Gestión (En desarrollo)",
  //   description: "Plataforma para administrar inventarios y ventas",
  //   image: "https://pub-f664d02abdda4d49944c0443c9a67cd1.r2.dev/management-system.webp", // Reemplaza con la ruta de la imagen
  //   link: "#", // Reemplaza con el enlace del proyecto
  // },
  {
    title: "Web personalizada",
    description: "Creamos plataformas web a medida, diseñadas específicamente para las necesidades de tu negocio. Desde sistemas de gestión de inventarios y ventas hasta portales empresariales y una interfaz intuitiva para optimizar tus procesos y mejorar la experiencia de tus clientes. Nos enfocamos en soluciones escalables, seguras y adaptadas a tu marca, garantizando un sitio web funcional, moderno y alineado con tus objetivos.",
    image: "https://pub-f664d02abdda4d49944c0443c9a67cd1.r2.dev/management-system.webp", // Reemplaza con la ruta de la imagen
    link: "/",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen -mt-16 bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <span className=" text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Artifys Solutions
                </span>
              </motion.div>
            </div>
            <motion.nav
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="hidden md:flex space-x-8"
            >
              {["Home", "Servicios", "Proyectos", "About", "Contacto"].map((item) => (
                <motion.div key={item} whileHover={{ y: -2 }}>
                  <a
                    href={`#${item.toLowerCase()}`} // Cambiado de `to` a `href`
                    className="text-slate-700 hover:text-blue-600 font-medium relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </motion.div>
              ))}
            </motion.nav>

            {/* <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 shadow-lg shadow-blue-500/20">
                Comenzar Ahora
              </button>
            </motion.div> */}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-cyan-900/10 pointer-events-none"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, 50, -50, 0],
              y: [0, -30, 30, 0],
            }}
            transition={{
              duration: 25,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </div>

        <div id="home" className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 mb-10 md:mb-0"
            >
              {/* <div className="inline-block bg-blue-500/10 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
                <span className="text-blue-600 font-medium">Innovación Digital</span>
              </div> */}
              <h1 className="text-2xl md:text-5xl  font-bold leading-tight mb-6 text-blue-900">
                Transformando Ideas En{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Soluciones Digitales
                </span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-xl">
                Construimos aplicaciones web innovadoras que ayudan a las empresas a crecer y tener éxito en
                el mundo digital.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-lg py-6 px-8">
                  Explorar Proyectos
                </button>
                <button className="border-blue-500 text-blue-600 hover:bg-blue-50 text-lg py-6 px-8">
                  Contactar
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-1/2"
            >
              <motion.div initial="initial" animate="animate" className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl blur opacity-30"></div>
                <img
                  src={logoArtifys}
                  alt="Artifys Solutions"
                  width={500}
                  height={400}
                  className="rounded-xl shadow-2xl relative z-10"
                />
              </motion.div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex justify-center mt-16"
          >
            <Link
              to="#services"
              className="flex flex-col items-center text-blue-600 hover:text-blue-700 transition-colors"
            >
              <span className="mb-2">Descubrir Más</span>
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
                <ChevronDown className="w-6 h-6" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Nuestros Servicios</h2>
            <p className="max-w-2xl mx-auto text-slate-600">
              Ofrecemos uan gran cantidad de solcuiones para tu negocio y calidad para crecer juntos
            </p>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <ServiceCard
              title="Desarrollo web"
              description="Sitios web personalizados creados con las últimas tecnologías para ofrecer experiencias de usuario comodas."
              icon={<Globe className="w-8 h-8 text-blue-600" />}
            />
            {/* <ServiceCard
              title="Mobile Applications"
              description="Native and cross-platform mobile apps that work seamlessly across iOS and Android devices."
              icon={<Smartphone className="w-8 h-8 text-blue-600" />}
            /> */}
            <ServiceCard
              title="Diseño UI/UX"
              description="Diseño centrado en el usuario que se centra en crear experiencias digitales intuitivas, atractivas y accesibles."
              icon={<Layers className="w-8 h-8 text-blue-600" />}
            />
            {/* <ServiceCard
              title="Database Solutions"
              description="Arquitectura y gestión de bases de datos robustas para garantizar que sus datos sean seguros, accesibles y escalables."
              icon={<Database className="w-8 h-8 text-blue-600" />}
            /> */}
            {/* <ServiceCard
              title="Web personalizada"
              description="Soluciones web personalizadas diseñadas para abordar los desafíos y requisitos específicos de su negocio."
              icon={<Code className="w-8 h-8 text-blue-600" />}
            /> */}
            <ServiceCard
              title="Mantenimiento Web"
              description="Soporte continuo y actualizaciones para mantener tu sitio en óptimas condiciones."
              icon={<Users className="w-8 h-8 text-blue-600" />}
            />
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-20 bg-gradient-to-br from-blue-900 to-cyan-900 text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-20">
            <div className="inline-block bg-blue-800/50 backdrop-blur-sm px-6 py-2 rounded-full mb-4">
              <span className="text-cyan-300 font-medium">Nuestros Proyectos</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Soluciones Innovadoras</h2>
            <p className="max-w-2xl mx-auto text-blue-100 text-lg">
              Descubre nuestras soluciones echas en tecnologia web, responsivas adaptadas a todo tipo de dispositivo: Computaduras,SmartPhones,Tablets.
            </p>
          </AnimatedSection>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <div key={index}>

                <ProjectCard
                  title={project.title}
                  description={project.description}
                  icon={<Globe className="w-8 h-8" />}
                  img={project.image}
                  index={0}
                  link={project.link}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 pointer-events-none"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 right-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
            animate={{
              x: [0, -50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute bottom-20 left-10 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"
            animate={{
              x: [0, 70, 0],
              y: [0, -40, 0],
            }}
            transition={{
              duration: 18,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <AnimatedSection className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl blur opacity-20"></div>
                <img
                  src={logoArtifysGris}
                  alt="Our Team"
                  width={600}
                  height={500}
                  className="rounded-xl shadow-lg relative z-10"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection className="md:w-1/2">
              <div className="inline-block bg-blue-500/10 backdrop-blur-sm px-6 py-2 rounded-full mb-4">
                <span className="text-blue-600 font-medium">Nuestra Historia</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">Sobre Artifys Solutions</h2>
              <p className="text-slate-600 mb-6 text-lg">
                Fundada en 2025, Artifys Solutions nació con la misión de impulsar la innovación digital y ayudar a negocios emergentes a construir soluciones tecnológicas escalables y de alto impacto.
              </p>
              <p className="text-slate-600 mb-6 text-lg">
                Nuestro equipo apasionados en desarrollo, diseño y estrategia digital trabaja con un enfoque ágil y colaborativo para ofrecer productos y servicios que marcan la diferencia en un mercado en constante evolución.
              </p>
              <p className="text-slate-600 mb-8 text-lg">
                Crecemos junto a nuestros clientes, estableciendo relaciones sólidas basadas en la confianza y la excelencia, con la visión de convertirnos en referentes en la transformación digital de empresas de todos los sectores.
              </p>

              {/* <div className="flex flex-wrap gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-r from-blue-100 to-blue-50 px-6 py-3 rounded-full"
                >
                  <span className="text-blue-600 font-medium">50+ Proyectos Completados</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-r from-cyan-100 to-cyan-50 px-6 py-3 rounded-full"
                >
                  <span className="text-cyan-600 font-medium">20+ Expertos en el Equipo</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-r from-sky-100 to-sky-50 px-6 py-3 rounded-full"
                >
                  <span className="text-sky-600 font-medium">98% Satisfacción del Cliente</span>
                </motion.div>
              </div> */}
            </AnimatedSection>
          </div>
        </div>
      </section>



      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Contactanos</h2>
            <p className="max-w-2xl mx-auto text-slate-600">
              Si te interesa una web puedes contarnos via el forulario o en alguna de nuestras redes sociales
            </p>
          </AnimatedSection>

          <div className="flex flex-col md:flex-row gap-10">
            <AnimatedSection className="md:w-1/2">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Ingrese su nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                      # Celular
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Ingrese su numero celular"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ingrese el asunto"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ingrese su mensaje"
                  ></textarea>
                </div>
                {/* <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 py-6 text-lg">
                  Send Message
                </button> */}
              </form>
            </AnimatedSection>

            <AnimatedSection className="md:w-1/2">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl h-full">
                <h3 className="text-2xl font-bold mb-6 text-blue-900">Informacion de Contacto</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-900">Email</h4>
                      <p className="text-slate-600">artifyshn@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-900">WhatsApp</h4>
                      <p className="text-slate-600">+504 9595-7406</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-900">Sede</h4>
                      <p className="text-slate-600">
                        Santa Rosa de Copan
                        <br />
                        Honduras

                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <h4 className="font-medium text-blue-900 mb-4">Siguenos</h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.instagram.com/artifys_solutions_oficial/"
                      className="bg-blue-100 p-3 rounded-full text-blue-600 hover:bg-blue-200 transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.facebook.com/artifyssolutions/"
                      className="bg-blue-100 p-3 rounded-full text-blue-600 hover:bg-blue-200 transition-colors"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>

                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* <div>
              <h3 className="text-xl font-bold mb-4">Artifys Solutions</h3>
              <p className="text-blue-200 mb-4">
                Transforming ideas into digital solutions that drive business growth and innovation.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-200 hover:text-white">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-blue-200 hover:text-white">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-blue-200 hover:text-white">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-blue-200 hover:text-white">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-200 hover:text-white">
                    Mobile Applications
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-200 hover:text-white">
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-200 hover:text-white">
                    Database Solutions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-200 hover:text-white">
                    Custom Software
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-blue-200 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-200 hover:text-white">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-200 hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-200 hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-200 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Newsletter</h3>
              <p className="text-blue-200 mb-4">Subscribe to our newsletter for the latest updates and insights.</p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-l-lg focus:outline-none text-slate-800 w-full"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-4 py-2 rounded-r-lg"
                >
                  Subscribe
                </button>
              </form>
            </div>*/}
          </div>
          <div className="border-t border-blue-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200">&copy; {new Date().getFullYear()} Artifys Solutions. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-blue-200 hover:text-white text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-blue-200 hover:text-white text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-blue-200 hover:text-white text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

