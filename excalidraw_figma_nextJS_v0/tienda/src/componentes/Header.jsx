// componentes/Header.jsx
import { Link } from 'react-router-dom';
import '../hojas-de-estilo/Header.css';

export default function Header() {
  return (
    <header>
      <h1>Artesanías</h1>

      {/* Menú hamburguesa para móvil */}
      <input type="checkbox" id="menu-toggle" className="menu-toggle" />
      <label htmlFor="menu-toggle" className="menu-icon">
        ☰
      </label>

      <nav className="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/sobre-nosotros">Sobre Nosotros</Link>
        <a href="#contacto">Contacto</a>
      </nav>
    </header>
  );
}