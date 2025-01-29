// src/components/DarkModeToggle.tsx
import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const DarkMode: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // Verificar si hay un valor en localStorage
    const storedMode = sessionStorage.getItem('darkMode');
    
    // Si no hay valor almacenado, verificar las preferencias del sistema
    if (storedMode) {
      setDarkMode(storedMode === 'true');
    } else {
      // Verificar si el sistema tiene configurado el tema oscuro
      const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDarkScheme);
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
    sessionStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 transition"
      aria-label="Toggle dark mode"
    >
      {darkMode ? (
        <FaSun className="text-yellow-400" />
      ) : (
        <FaMoon className="text-gray-700 dark:text-gray-300" />
      )}
    </button>
  );
};

export default DarkMode;
