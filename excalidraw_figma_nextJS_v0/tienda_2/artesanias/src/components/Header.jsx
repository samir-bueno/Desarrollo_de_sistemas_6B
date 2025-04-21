"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import "../hojas-de-estilo/Header.css"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Función para manejar el clic en el enlace de contacto
  const handleContactClick = (e) => {
    e.preventDefault()

    // Cerrar el menú si está abierto
    setIsMenuOpen(false)

    // Encontrar el elemento de contacto y hacer scroll
    const contactElement = document.getElementById("contacto")
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const links = [
    { href: "/", label: "Inicio" },
    { href: "/productos", label: "Productos" },
    { href: "/sobre-nosotros", label: "Sobre Nosotros" },
    { href: "#contacto", label: "Contacto", onClick: handleContactClick },
  ]

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo-container">
            <Link to="/" className="logo-link">
              <div className="logo">
                <img src="https://i.imgur.com/8hkPd8T.png" alt="Manos Creativas Logo" />
              </div>
              <span className="logo-text">Manos Creativas</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href.startsWith("#") ? link.href : link.href}
                className="nav-link"
                onClick={link.onClick}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="mobile-menu">
            <button className="menu-button" onClick={toggleMenu} aria-label="Abrir menú">
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
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>

            {isMenuOpen && (
              <>
                {/* Fondo semi-transparente detrás del menú */}
                <div className="menu-backdrop" onClick={toggleMenu}></div>

                <div className="menu-overlay">
                  <div className="menu-content">
                    <button className="close-button" onClick={toggleMenu} aria-label="Cerrar menú">
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

                    <h2 className="mobile-menu-title">Menú</h2>

                    <nav className="mobile-nav">
                      {links.map((link) => (
                        <Link
                          key={link.href}
                          to={link.href.startsWith("#") ? link.href : link.href}
                          className="nav-link"
                          onClick={link.onClick || toggleMenu}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </nav>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header