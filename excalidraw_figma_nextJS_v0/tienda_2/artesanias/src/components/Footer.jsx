"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import "../hojas-de-estilo/Footer.css"
import Toast from "./Toast"

function Footer() {
  // Estado para el formulario
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  })

  // Estado para errores de validación
  const [errors, setErrors] = useState({})

  // Estado para el toast
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  })

  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData({
      ...formData,
      [id]: value,
    })

    // Limpiar error cuando el usuario escribe
    if (errors[id]) {
      setErrors({
        ...errors,
        [id]: "",
      })
    }
  }

  // Validar email con expresión regular
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Validar el formulario
  const validateForm = () => {
    const newErrors = {}

    // Validar campos requeridos
    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es requerido"
    }

    if (!formData.email.trim()) {
      newErrors.email = "El correo electrónico es requerido"
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Ingresa un correo electrónico válido"
    }

    if (!formData.asunto.trim()) {
      newErrors.asunto = "El asunto es requerido"
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = "El mensaje es requerido"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault()

    // Validar formulario
    if (validateForm()) {
      // Mostrar el objeto formData en la consola
      console.log({
        nombre: formData.nombre,
        email: formData.email,
        asunto: formData.asunto,
        mensaje: formData.mensaje,
      })

      // Mostrar mensaje de éxito
      setToast({
        show: true,
        message: "¡Mensaje enviado con éxito!",
        type: "success",
      })

      // Limpiar formulario
      setFormData({
        nombre: "",
        email: "",
        asunto: "",
        mensaje: "",
      })
    }
  }

  // Cerrar el toast
  const closeToast = () => {
    setToast({ ...toast, show: false })
  }

  return (
    <footer id="contacto" className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="contact-section">
            {/* Título "Contáctanos" con estilo inline para mayor visibilidad */}
            <h2
              style={{
                fontSize: "2.25rem",
                fontFamily: "var(--font-serif)",
                fontWeight: "700",
                color: "#FFFFFF",
                marginBottom: "1rem",
                textShadow: "0 1px 3px rgba(0,0,0,0.3)",
              }}
            >
              Contáctanos
            </h2>
            {/* Texto descriptivo con estilo inline */}
            <p
              style={{
                color: "#FFFFFF",
                fontWeight: "600",
                marginBottom: "1.5rem",
                fontSize: "1.125rem",
                textShadow: "0 1px 2px rgba(0,0,0,0.3)",
              }}
            >
              Completa el formulario y nos pondremos en contacto contigo lo antes posible.
            </p>

            <div className="contact-form-container">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="nombre" className="form-label">
                    Nombre
                  </label>
                  <input
                    id="nombre"
                    placeholder="Tu nombre"
                    className={`form-input ${errors.nombre ? "input-error" : ""}`}
                    value={formData.nombre}
                    onChange={handleChange}
                  />
                  {errors.nombre && <p className="error-message">{errors.nombre}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Correo Electrónico
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="tucorreo@ejemplo.com"
                    className={`form-input ${errors.email ? "input-error" : ""}`}
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p className="error-message">{errors.email}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="asunto" className="form-label">
                    Asunto
                  </label>
                  <input
                    id="asunto"
                    placeholder="¿En qué podemos ayudarte?"
                    className={`form-input ${errors.asunto ? "input-error" : ""}`}
                    value={formData.asunto}
                    onChange={handleChange}
                  />
                  {errors.asunto && <p className="error-message">{errors.asunto}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="mensaje" className="form-label">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    placeholder="Escribe tu mensaje aquí..."
                    rows={4}
                    className={`form-textarea ${errors.mensaje ? "input-error" : ""}`}
                    value={formData.mensaje}
                    onChange={handleChange}
                  />
                  {errors.mensaje && <p className="error-message">{errors.mensaje}</p>}
                </div>

                <button type="submit" className="submit-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon"
                  >
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>

          <div className="footer-info">
            {/* Primera fila: Enlaces Rápidos y Categorías */}
            <div className="footer-top-row">
              {/* Enlaces Rápidos */}
              <div className="links-section">
                <h3 className="footer-heading">Enlaces Rápidos</h3>
                <ul className="footer-links">
                  <li>
                    <Link to="/" className="footer-link">
                      Inicio
                    </Link>
                  </li>
                  <li>
                    <Link to="/productos" className="footer-link">
                      Productos
                    </Link>
                  </li>
                  <li>
                    <Link to="/sobre-nosotros" className="footer-link">
                      Sobre Nosotros
                    </Link>
                  </li>
                  <li>
                    <a href="#contacto" className="footer-link">
                      Contacto
                    </a>
                  </li>
                </ul>
              </div>

              {/* Categorías */}
              <div className="categories-section">
                <h3 className="footer-heading">Categorías</h3>
                <ul className="footer-links">
                  <li>
                    <Link to="/productos?categoria=cerámica" className="footer-link">
                      Cerámica
                    </Link>
                  </li>
                  <li>
                    <Link to="/productos?categoria=textiles" className="footer-link">
                      Textiles
                    </Link>
                  </li>
                  <li>
                    <Link to="/productos?categoria=joyería" className="footer-link">
                      Joyería
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Segunda fila: Redes Sociales y Contacto */}
            <div className="footer-bottom-row">
              {/* Redes Sociales */}
              <div className="social-section">
                <h3 className="footer-heading">Redes Sociales</h3>
                <ul className="footer-links">
                  <li>
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-link"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="social-icon"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-link"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="social-icon"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contacto */}
              <div className="contact-info-section">
                <h3 className="footer-heading">Contacto</h3>
                <ul className="contact-info">
                  <li className="contact-item">
                    <div className="contact-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <a href="mailto:info@manoscreativas.com" className="contact-text">
                      info@manoscreativas.com
                    </a>
                  </li>
                  <li className="contact-item">
                    <div className="contact-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <a href="tel:+521234567890" className="contact-text">
                      +52 (123) 456-7890
                    </a>
                  </li>
                  <li className="contact-item">
                    <div className="contact-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <a
                      href="https://maps.google.com/?q=Calle+Artesanos+123+Colonia+Centro+Ciudad+Artesanal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-text"
                    >
                      Calle Artesanos #123
                      <br />
                      Colonia Centro
                      <br />
                      Ciudad Artesanal, CP 12345
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast de notificación */}
      {toast.show && <Toast message={toast.message} type={toast.type} onClose={closeToast} />}
    </footer>
  )
}

export default Footer