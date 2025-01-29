// src/components/Header.tsx
import DarkMode from './DarkMode';

const Header: React.FC = () => {
    
  return (
    <header className="flex justify-between items-center p-4 border-b-2 border-red-500">
      <h1 className="text-xl font-bold dark:text-white">Landing Artifys</h1>
      
      <DarkMode />
    </header>
  );
};

export default Header;
