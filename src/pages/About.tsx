// src/pages/About.tsx
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { FaXTwitter } from "react-icons/fa6";


const About: React.FC = () => {
  return (
    <div className="flex items-center justify-center mb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-700 rounded-lg shadow-2xl overflow-hidden">
        <div className="md:flex">
          {/* Sección de la foto */}
          <div className="md:flex-shrink-0">
            <img
              className="h-full w-full object-contain md:w-96"
              src="https://pub-f664d02abdda4d49944c0443c9a67cd1.r2.dev/foto_perfil.webp" // Reemplaza con la ruta de tu foto
              alt="Tu nombre"
            />
          </div>

          {/* Sección de contenido */}
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">Desarrollador Principal</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Hola, soy Luis contreras,Ingeniero en sistemas, desarrollador principal 
              y fundador de Artifys Solutions.
              me especializo en crear soluciones digitales innovadoras
              y escalables para empresas de todos los tamaños.
            </p>

            {/* Habilidades destacadas */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Habilidades</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 rounded-full">
                  React
                </span>
                <span className="px-4 py-2 bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 rounded-full">
                  Node.js
                </span>
                <span className="px-4 py-2 bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-200 rounded-full">
                  TypeScript
                </span>
                <span className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-full">
                  Express.js
                </span>
                <span className="px-4 py-2 bg-red-100 dark:bg-red-800 text-red-800 dark:text-red-200 rounded-full">
                  Diseño UI/UX
                </span>
              </div>
            </div>

            {/* Enlaces a redes sociales o portafolio */}
            <div className="mt-8">
  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Conéctate Conmigo</h3>
  <div className="mt-4 flex space-x-4">
    {/* GitHub */}
    <a
      href="https://github.com/Luis2022cr"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
    >
      <span className="sr-only">GitHub</span>
      <FaGithub className="text-2xl" />
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/luis-contreras-233793319/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
    >
      <span className="sr-only">LinkedIn</span>
      <FaLinkedin className="text-2xl" />
    </a>

    {/* Twitter */}
    <a
      href="https://x.com/ArtifysSolution"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
    >
      <span className="sr-only">Twitter</span>
      <FaXTwitter  className="text-2xl" />
    </a>

    {/* Email */}
    <a
      href="josero412q@gmail.com"
      className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
    >
      <span className="sr-only">Email</span>
      <FiMail className="text-2xl" />
    </a>
  </div>
</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;