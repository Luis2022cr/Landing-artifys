
import Loading from '@/components/Loading';
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

export default function Layout(){
  const [loading, setLoading] = useState<boolean>(true);
    const [isFirstVisit, setIsFirstVisit] = useState<boolean>(true);
  
    useEffect(() => {
      const storedVisit = sessionStorage.getItem('hasVisited');
  
      if (storedVisit) {
        setIsFirstVisit(false); // El usuario ya ha visitado la app antes
        setLoading(false); // No necesitamos mostrar la pantalla de carga
      } else {
        // Simular carga durante 3 segundos
        const timer = setTimeout(() => {
          setLoading(false);
          sessionStorage.setItem('hasVisited', 'true'); // Marcar que el usuario ha visitado la app
        }, 5000);
  
        return () => clearTimeout(timer); // Limpiar el temporizador al desmontar
      }
    }, []);
  
    if (loading && isFirstVisit) {
      return <Loading />;
    }
  return (
    <div className="flex flex-col min-h-[100dvh] ">
      {/* <Header /> */}
      <main className="flex-1 ">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
