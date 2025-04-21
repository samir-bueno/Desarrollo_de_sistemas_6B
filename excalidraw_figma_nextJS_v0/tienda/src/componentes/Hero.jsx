import '../hojas-de-estilo/hero.css'; // Asegúrate de importar el CSS correspondiente
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <h1>IPSUM LOREM</h1>
      <Link to="/productos">
        <button>Ver productos</button>
      </Link>
    </section>
  );
}
