import '../hojas-de-estilo/Productos.css'; // Asegúrate de importar el CSS correspondiente
import ProductoDetalle from './ProductoDetalle'; // Ruta relativa correcta según tu estructura

export default function Productos() {
  return (
    <section id="productos">
      <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '1.5rem' }}>
        Productos
      </h2>
      <ProductoDetalle />
    </section>
  );
}
