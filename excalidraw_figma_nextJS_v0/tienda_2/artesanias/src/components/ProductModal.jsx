"use client"

import { useEffect } from "react"
import "../hojas-de-estilo/ProductModal.css"

function ProductModal({ product, onClose }) {
  // Cerrar el modal con la tecla Escape
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    document.addEventListener("keydown", handleEscKey)
    // Prevenir scroll en el body cuando el modal está abierto
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleEscKey)
      document.body.style.overflow = "auto"
    }
  }, [onClose])

  // Evitar que los clics dentro del contenido del modal cierren el modal
  const handleContentClick = (e) => {
    e.stopPropagation()
  }

  // Verificar que product y price existan para evitar errores
  const price = product && product.price ? product.price.toLocaleString() : "Precio no disponible"

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={handleContentClick}>
        <button className="modal-close-button" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="modal-product">
          <div className="modal-product-image-container">
            <img src={product.image || "/placeholder.svg"} alt={product.name} className="modal-product-image" />
            <div className="modal-category-badge">
              <span className="modal-category-text">{product.category}</span>
            </div>
          </div>

          <div className="modal-product-info">
            <h2 className="modal-product-name">{product.name}</h2>
            <p className="modal-product-price">${price}</p>

            <div className="modal-product-description">
              <h3 className="modal-section-title">Descripción</h3>
              <p>
                {product.description ||
                  "Este producto artesanal único está hecho a mano por artesanos locales utilizando técnicas tradicionales. Cada pieza es única y puede presentar ligeras variaciones que destacan su carácter artesanal."}
              </p>
            </div>

            <div className="modal-product-details">
              <h3 className="modal-section-title">Detalles</h3>
              <ul className="modal-details-list">
                <li>
                  <span>Material:</span> {product.material || "Materiales naturales de alta calidad"}
                </li>
                <li>
                  <span>Origen:</span> {product.origin || "Hecho en México"}
                </li>
                <li>
                  <span>Artesano:</span> {product.artisan || "Artesanos locales"}
                </li>
                <li>
                  <span>Dimensiones:</span> {product.dimensions || "Tamaño estándar"}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductModal