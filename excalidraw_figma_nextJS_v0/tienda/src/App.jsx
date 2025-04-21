// App.jsx
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './componentes/Header';
import Hero from './componentes/Hero';
import Productos from './componentes/Productos';
import SobreNosotros from './componentes/SobreNosotros';
import Contacto from './componentes/Contacto';

export default function App() {
  const location = useLocation();

  // Efecto para hacer scroll hacia arriba cada vez que cambie la ruta
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Header />
      {/* Mostrar Hero solo en la página de inicio */}
      {location.pathname === '/' && <Hero />}

      <Routes>
        <Route path="/" element={<Productos />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
      </Routes>

      <Contacto />
    </>
  );
}