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
      // Aquí iría la lógica para enviar el formulario a un servidor
      console.log("Formulario enviado:", formData)

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
            <h2 className="section-title">Contáctanos</h2>
            <p className="section-description">
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
            <div className="info-section">
              <Link to="/" className="footer-logo">
                <div className="footer-logo-image">
                  <img src="https://i.imgur.com/8hkPd8T.png" alt="Manos Creativas Logo" className="logo-img" />
                </div>
                <span className="footer-logo-text">Manos Creativas</span>
              </Link>
              <p className="footer-description">
                Artesanías únicas hechas a mano con técnicas tradicionales. Cada pieza cuenta una historia y lleva
                consigo el alma de su creador.
              </p>
              <div className="social-links">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                  <span className="sr-only">Twitter</span>
                </a>
              </div>
            </div>

            <div className="footer-links-grid">
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
                    <Link to="/productos?categoria=madera" className="footer-link">
                      Madera
                    </Link>
                  </li>
                  <li>
                    <Link to="/productos?categoria=joyería" className="footer-link">
                      Joyería
                    </Link>
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
                    <span className="contact-text">info@manoscreativas.com</span>
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
                    <span className="contact-text">+52 (123) 456-7890</span>
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
                    <span className="contact-text">
                      Calle Artesanos #123
                      <br />
                      Colonia Centro
                      <br />
                      Ciudad Artesanal, CP 12345
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright">
          <p>© {new Date().getFullYear()} Manos Creativas. Todos los derechos reservados.</p>
        </div>
      </div>

      {/* Toast de notificación */}
      {toast.show && <Toast message={toast.message} type={toast.type} onClose={closeToast} />}
    </footer>
  )
}

export default Footer