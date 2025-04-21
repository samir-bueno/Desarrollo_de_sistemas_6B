// componentes/SobreNosotros.jsx
import '../hojas-de-estilo/sobreNosotros.css'; // Asegúrate de importar el CSS correspondiente

export default function SobreNosotros() {
  return (
    <section id="sobre" className="sobre">
      <h2>Sobre Nosotros</h2>
      <div className="sobre-content">
        <p>
          Somos una familia dedicada a la creación de artesanías únicas desde hace más de 20 años.
          Cada pieza refleja nuestra historia y el cuidado en cada detalle.
        </p>
        <blockquote style={{ fontStyle: 'italic', color: '#a67c52' }}>
          “Cada pieza cuenta una historia.”
        </blockquote>
      </div>

      {/* Historia */}
      <div className="historia">
        <h3>Historia</h3>
        <p>
          Nuestra historia comenzó hace más de 20 años, cuando decidimos compartir nuestras pasiones y tradiciones familiares
          a través de las artesanías. Desde entonces, hemos logrado crear una conexión profunda con nuestras raíces,
          mientras aprendemos y evolucionamos en cada pieza que producimos.
        </p>
      </div>

      {/* Proceso Artesanal */}
      <div className="proceso-artesanal">
        <h3>Proceso Artesanal</h3>
        <p>
          Cada una de nuestras piezas es hecha a mano con materiales seleccionados cuidadosamente. El proceso artesanal
          combina técnicas tradicionales con toques modernos, garantizando la calidad y la belleza de cada producto que
          ofrecemos.
        </p>
      </div>
    </section>
  );
}