import { Link } from "react-router-dom"
import ProductCard from "../components/ProductCard"
import "../hojas-de-estilo/Home.css"
import logo from '../imagenes/logo_artesanal.png'

function Home() {
  const featuredProducts = [
    {
      id: 1,
      name: "Jarrón de Cerámica Pintado a Mano",
      price: 1200,
      image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261",
      category: "Cerámica",
      description:
        "Este hermoso jarrón de cerámica está pintado a mano con diseños tradicionales. Cada pieza es única y refleja la rica tradición artesanal de nuestra región.",
      material: "Cerámica",
      origin: "Oaxaca, México",
      artisan: "María González",
      dimensions: "25cm x 15cm",
    },
    {
      id: 2,
      name: "Tapete Tejido Tradicional",
      price: 850,
      image: "https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2",
      category: "Textiles",
      description:
        "Tapete tejido a mano con lana natural y teñido con tintes vegetales. Cada diseño representa símbolos ancestrales y cuenta una historia única.",
      material: "Lana natural",
      origin: "Chiapas, México",
      artisan: "Familia Hernández",
      dimensions: "120cm x 80cm",
    },
    {
      id: 3,
      name: "Figura Tallada en Madera",
      price: 950,
      image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa",
      category: "Madera",
      description:
        "Figura tallada a mano en madera de cedro por artesanos expertos. Representa la fauna local y está acabada con tintes naturales y ceras protectoras.",
      material: "Madera de cedro",
      origin: "Michoacán, México",
      artisan: "José Ramírez",
      dimensions: "30cm altura",
    },
    {
      id: 4,
      name: "Collar de Cuentas",
      price: 450,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908",
      category: "Joyería",
      description:
        "Collar artesanal elaborado con cuentas de vidrio soplado y plata. Diseño único inspirado en motivos prehispánicos.",
      material: "Vidrio y plata",
      origin: "Puebla, México",
      artisan: "Taller Luna",
      dimensions: "45cm longitud",
    },
    {
      id: 5,
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
      id: 6,
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
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <img
            src={logo}
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