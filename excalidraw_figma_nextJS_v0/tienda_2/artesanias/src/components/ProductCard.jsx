"use client"

import { useState } from "react"
import ProductModal from "./ProductModal"
import "../hojas-de-estilo/ProductCard.css"

function ProductCard({ product }) {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  // Verificar que product y price existan para evitar errores
  const price = product && product.price ? product.price.toLocaleString() : "Precio no disponible"

  return (
    <>
      <div className="product-card">
        <div className="product-image-container">
          <img src={product.image || "/placeholder.svg"} alt={product.name} className="product-image" />
          <div className="category-badge">
            <span className="category-text">{product.category}</span>
          </div>
        </div>
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <div className="product-footer">
            <span className="product-price">${price}</span>
            <button className="view-badge" onClick={openModal}>
              Ver más
            </button>
          </div>
        </div>
      </div>

      {showModal && <ProductModal product={product} onClose={closeModal} />}
    </>
  )
}

export default ProductCard