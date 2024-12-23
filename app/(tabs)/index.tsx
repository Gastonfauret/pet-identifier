import LoadingScreen from "./LoadingScreen";
import React, { useState, useEffect } from 'react';
import MainPage from "./main-page";


export default function HomeScreen() { 
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula una carga de datos
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Cambia el tiempo según sea necesario

    return () => clearTimeout(timer);
  }, []);

   return isLoading ? <LoadingScreen /> : <MainPage />;
}


