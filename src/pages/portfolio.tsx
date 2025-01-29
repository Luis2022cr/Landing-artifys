// src/pages/Portfolio.tsx
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { FaXTwitter } from "react-icons/fa6";

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white font-sans">
      {/* Navbar */}
      <nav className="p-6 bg-gray-800/50 backdrop-blur-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Artifys Solutions
          </h1>
          <div className="flex space-x-6">
            <a href="#about" className="hover:text-blue-400 transition-colors">Sobre Mí</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Habilidades</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Proyectos</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contacto</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center text-center px-4">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Luis Contreras
          </h1>
          <p className="mt-4 text-xl text-gray-300">
            Ingeniero en Sistemas | Desarrollador Full Stack | Especialista en Soluciones Digitales
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <a
              href="#about"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              Conóceme
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-colors"
            >
              Contáctame
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex items-center">
            {/* Foto */}
            <div className="md:w-1/3 flex justify-center">
              <img
                src="https://pub-f664d02abdda4d49944c0443c9a67cd1.r2.dev/foto_perfil.webp"
                alt="Luis Contreras"
                className="rounded-full w-64 h-64 object-cover border-4 border-blue-500 shadow-lg"
              />
            </div>
            {/* Contenido */}
            <div className="md:w-2/3 mt-8 md:mt-0 md:pl-12">
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Sobre Mí
              </h2>
              <p className="mt-4 text-gray-300">
                Hola, soy Luis Contreras, Ingeniero en Sistemas y fundador de Artifys Solutions.
                Me especializo en crear soluciones digitales innovadoras y escalables para empresas
                de todos los tamaños. Con más de [X años] de experiencia, he trabajado en proyectos
                que van desde aplicaciones web hasta sistemas empresariales complejos.
              </p>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-200">Habilidades</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full">
                    React
                  </span>
                  <span className="px-4 py-2 bg-green-500/10 text-green-400 rounded-full">
                    Node.js
                  </span>
                  <span className="px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full">
                    TypeScript
                  </span>
                  <span className="px-4 py-2 bg-gray-500/10 text-gray-400 rounded-full">
                    Express.js
                  </span>
                  <span className="px-4 py-2 bg-red-500/10 text-red-400 rounded-full">
                    Diseño UI/UX
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Proyectos Destacados
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Proyecto 1 */}
            <div className="bg-gray-800/50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-400">Proyecto 1</h3>
              <p className="mt-2 text-gray-300">
                Descripción breve del proyecto. Tecnologías utilizadas: React, Node.js, MongoDB.
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-blue-400 hover:text-blue-300 transition-colors"
              >
                Ver más →
              </a>
            </div>
            {/* Proyecto 2 */}
            <div className="bg-gray-800/50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-green-400">Proyecto 2</h3>
              <p className="mt-2 text-gray-300">
                Descripción breve del proyecto. Tecnologías utilizadas: TypeScript, Express, AWS.
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-green-400 hover:text-green-300 transition-colors"
              >
                Ver más →
              </a>
            </div>
            {/* Proyecto 3 */}
            <div className="bg-gray-800/50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-purple-400">Proyecto 3</h3>
              <p className="mt-2 text-gray-300">
                Descripción breve del proyecto. Tecnologías utilizadas: Next.js, GraphQL, Docker.
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-purple-400 hover:text-purple-300 transition-colors"
              >
                Ver más →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Contacto
          </h2>
          <p className="mt-4 text-gray-300">
            ¿Tienes un proyecto en mente? ¡Hablemos!
          </p>
          <div className="mt-8 flex justify-center space-x-6">
            <a
              href="https://github.com/Luis2022cr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <FaGithub className="text-3xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/luis-contreras-233793319/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <FaLinkedin className="text-3xl" />
            </a>
            <a
              href="https://x.com/ArtifysSolution"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <FaXTwitter className="text-3xl" />
            </a>
            <a
              href="mailto:josero412q@gmail.com"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <FiMail className="text-3xl" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;