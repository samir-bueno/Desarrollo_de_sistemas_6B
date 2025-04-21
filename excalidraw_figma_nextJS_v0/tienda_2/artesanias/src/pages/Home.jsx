import { Link } from "react-router-dom"
import ProductCard from "../components/ProductCard"
import "../hojas-de-estilo/Home.css"

function Home() {
  const featuredProducts = [
    {
      id: 7,
      name: "Cojín Bordado a Mano",
      price: 520,
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace",
      category: "Textiles",
      description:
        "Cojín con bordado tradicional hecho a mano. Los motivos florales están inspirados en la naturaleza local y realizados con hilos de algodón de colores vibrantes.",
      material: "Algodón 100%",
      origin: "Yucatán, México",
      artisan: "Colectivo Mujeres Artesanas",
      dimensions: "40cm x 40cm",
    },
    {
      id: 8,
      name: "Lámpara de Barro",
      price: 750,
      image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15",
      category: "Cerámica",
      description:
        "Lámpara artesanal elaborada en barro negro con técnicas ancestrales. Los patrones calados permiten que la luz cree hermosos efectos en el ambiente.",
      material: "Barro negro",
      origin: "Oaxaca, México",
      artisan: "Familia Martínez",
      dimensions: "35cm altura x 20cm diámetro",
    },
    {
      id: 10,
      name: "Pulsera de Plata",
      price: 420,
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d",
      category: "Joyería",
      description:
        "Pulsera artesanal de plata .925 con diseños inspirados en símbolos prehispánicos. Cada pieza es forjada y grabada a mano por maestros plateros.",
      material: "Plata .925",
      origin: "Taxco, México",
      artisan: "Taller Plata Pura",
      dimensions: "Ajustable",
    },
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <img
            src="https://images.unsplash.com/photo-1604849329122-7c9be9b7bb5e"
            alt="Artesanías hechas a mano"
            className="hero-image"
          />
        </div>
        <div className="hero-content">
          <div className="container">
            <h1 className="hero-title">Artesanías Manos Creativas</h1>
            <p className="hero-description">
              Descubre el arte de lo hecho a mano, donde cada pieza cuenta una historia única
            </p>
            <div className="hero-buttons">
              <Link to="/productos" className="button button-primary">
                Ver Productos
              </Link>
              <Link to="/sobre-nosotros" className="button button-outline">
                Nuestra Historia
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Presentación del Negocio */}
      <section className="business-intro">
        <div className="container">
          <div className="intro-content">
            <div className="intro-text">
              <h2 className="section-title">Artesanía con Alma y Tradición</h2>
              <p className="section-description">
                En Manos Creativas, cada pieza es el resultado de técnicas ancestrales transmitidas de generación en
                generación. Nuestros artesanos combinan la tradición con toques contemporáneos para crear piezas únicas.
              </p>
              <Link to="/sobre-nosotros" className="button button-primary">
                Conoce Más Sobre Nosotros
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
                  className="button-icon"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
            <div className="intro-image-container">
              <img
                src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7"
                alt="Artesano trabajando"
                className="intro-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Productos Destacados */}
      <section className="featured-products">
        <div className="container">
          <h2 className="section-title">Productos Destacados</h2>
          <p className="section-description">Descubre nuestra selección de piezas artesanales más populares</p>

          <div className="products-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="view-all-container">
            <Link to="/productos" className="button button-primary">
              Ver Todos los Productos
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home