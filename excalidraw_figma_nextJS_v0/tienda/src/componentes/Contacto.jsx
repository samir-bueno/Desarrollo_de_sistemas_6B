import '../hojas-de-estilo/contacto.css'; // Asegúrate de importar el CSS correspondiente

export default function Contacto() {
  return (
    <section id="contacto">
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem', textAlign: 'center' }}>
        Contacto
      </h2>
      <form className="contact-form">
        <input type="text" placeholder="Nombre" />
        <input type="email" placeholder="Correo electrónico" />
        <textarea placeholder="Mensaje" rows={4}></textarea>
        <button type="submit">Enviar</button>
      </form>
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <p>También podés contactarnos por:</p>
        <div className="social-links">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://wa.me/5491123456789" target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </div>
    </section>
  );
}