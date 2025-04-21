"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import ProductCard from "../components/ProductCard"
import PageHeader from "../components/PageHeader"
import "../hojas-de-estilo/Products.css"

function Products() {
  // Estado para la paginación
  const [currentPage, setCurrentPage] = useState(1)
  const [searchParams, setSearchParams] = useSearchParams()
  const categoriaParam = searchParams.get("categoria")
  const [selectedCategory, setSelectedCategory] = useState(categoriaParam || "todos")
  const productsPerPage = 9

  // Actualizar selectedCategory cuando cambia el parámetro de URL
  useEffect(() => {
    setSelectedCategory(categoriaParam || "todos")
  }, [categoriaParam])

  // Datos de ejemplo para productos
  const productos = [
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
      name: "Collar de Cuentas de Vidrio",
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
      id: 6,
      name: "Plato Decorativo de Talavera",
      price: 680,
      image: "https://images.unsplash.com/photo-1603204077779-bed963ea7d0e",
      category: "Cerámica",
      description:
        "Plato decorativo de Talavera pintado a mano con motivos florales tradicionales. Perfecto como pieza decorativa o para servir alimentos.",
      material: "Cerámica de Talavera",
      origin: "Puebla, México",
      artisan: "Taller Flores",
      dimensions: "30cm diámetro",
    },
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
      id: 9,
      name: "Móvil de Alebrijes",
      price: 890,
      image: "https://images.unsplash.com/photo-1597696929736-6d13bed8e6a8",
      category: "Madera",
      description:
        "Móvil decorativo compuesto por coloridos alebrijes tallados y pintados a mano. Cada figura representa un animal fantástico de la tradición mexicana.",
      material: "Madera de copal",
      origin: "Oaxaca, México",
      artisan: "Familia García",
      dimensions: "50cm altura total",
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
    {
      id: 11,
      name: "Servilletas Bordadas",
      price: 280,
      image: "https://images.unsplash.com/photo-1584010065045-0cd7c7c0a8b0",
      category: "Textiles",
      description:
        "Juego de servilletas con delicados bordados hechos a mano. Perfectas para ocasiones especiales o como elemento decorativo en la mesa.",
      material: "Lino",
      origin: "Aguascalientes, México",
      artisan: "Bordadoras de San José",
      dimensions: "30cm x 30cm (juego de 4)",
    },
    {
      id: 12,
      name: "Tazón de Barro Negro",
      price: 350,
      image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61",
      category: "Cerámica",
      description:
        "Tazón elaborado con la técnica tradicional de barro negro, pulido a mano hasta lograr su característico brillo. Ideal para servir o como pieza decorativa.",
      material: "Barro negro",
      origin: "Oaxaca, México",
      artisan: "Taller Alfarero Tradicional",
      dimensions: "15cm diámetro x 8cm altura",
    },
    {
      id: 13,
      name: "Máscara Decorativa",
      price: 620,
      image: "https://images.unsplash.com/photo-1601059437094-c5e1a2e1b5a3",
      category: "Madera",
      description:
        "Máscara tallada a mano en madera de cedro, representando personajes del folclore mexicano. Pieza única con acabados en pintura natural.",
      material: "Madera de cedro",
      origin: "Michoacán, México",
      artisan: "Maestro Tallador López",
      dimensions: "25cm x 18cm",
    },
    {
      id: 14,
      name: "Aretes de Filigrana",
      price: 290,
      image: "https://images.unsplash.com/photo-1630019852942-f89202989a59",
      category: "Joyería",
      description:
        "Aretes elaborados con la técnica de filigrana en plata, formando delicados diseños florales. Trabajo minucioso realizado por maestros artesanos.",
      material: "Plata .925",
      origin: "Oaxaca, México",
      artisan: "Taller Filigrana Fina",
      dimensions: "3cm largo",
    },
    {
      id: 15,
      name: "Bolsa Tejida",
      price: 340,
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
      category: "Textiles",
      description:
        "Bolsa tejida a mano con fibras naturales y teñida con tintes vegetales. Diseño tradicional con motivos geométricos en colores vibrantes.",
      material: "Fibras naturales",
      origin: "Chiapas, México",
      artisan: "Cooperativa Mujeres Tejedoras",
      dimensions: "35cm x 30cm",
    },
    {
      id: 16,
      name: "Vasija Decorativa",
      price: 580,
      image: "https://images.unsplash.com/photo-1490312278390-ab64016e0aa9",
      category: "Cerámica",
      description:
        "Vasija decorativa elaborada y pintada a mano con diseños geométricos inspirados en culturas prehispánicas. Pieza única de colección.",
      material: "Cerámica de alta temperatura",
      origin: "Guanajuato, México",
      artisan: "Taller Cerámico Ancestral",
      dimensions: "40cm altura x 25cm diámetro",
    },
    {
      id: 17,
      name: "Caja Tallada",
      price: 420,
      image: "https://images.unsplash.com/photo-1605883705077-8d3d0afda512",
      category: "Madera",
      description:
        "Caja decorativa tallada a mano en madera de pino con motivos florales en relieve. Ideal para guardar pequeños tesoros o como elemento decorativo.",
      material: "Madera de pino",
      origin: "Jalisco, México",
      artisan: "Don Pedro Méndez",
      dimensions: "20cm x 15cm x 10cm",
    },
    {
      id: 18,
      name: "Anillo de Plata",
      price: 320,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e",
      category: "Joyería",
      description:
        "Anillo artesanal de plata con incrustaciones de piedras semipreciosas. Diseño único inspirado en la naturaleza y elaborado completamente a mano.",
      material: "Plata .925 y turquesa",
      origin: "Taxco, México",
      artisan: "Joyería Artesanal Mexicana",
      dimensions: "Tallas disponibles: 6-9",
    },
  ]

  // Filtrar productos por categoría
  const filteredProducts =
    selectedCategory === "todos"
      ? productos
      : productos.filter((product) => product.category.toLowerCase() === selectedCategory.toLowerCase())

  // Calcular el número total de páginas
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

  // Obtener los productos para la página actual
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)

  // Función para cambiar de página
  const goToPage = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  // Función para cambiar la categoría
  const handleCategoryChange = (e) => {
    const categoria = e.target.value
    setSelectedCategory(categoria)
    setCurrentPage(1)

    if (categoria === "todos") {
      setSearchParams({})
    } else {
      setSearchParams({ categoria })
    }
  }

  return (
    <div className="products-page">
      <PageHeader
        title="Nuestros Productos"
        description="Descubre nuestra colección de artesanías únicas hechas a mano"
      />

      <section className="products-section">
        <div className="container">
          {/* Filtros */}
          <div className="filters">
            <div className="filter-label">Categoría:</div>
            <select className="category-select" value={selectedCategory} onChange={handleCategoryChange}>
              <option value="todos">Todos</option>
              <option value="cerámica">Cerámica</option>
              <option value="textiles">Textiles</option>
              <option value="madera">Madera</option>
              <option value="joyería">Joyería</option>
            </select>
          </div>

          {/* Productos */}
          <div className="products-grid">
            {currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Paginación */}
          {totalPages > 1 && (
            <div className="pagination">
              <nav className="pagination-nav">
                <button
                  className={`pagination-button ${currentPage === 1 ? "disabled" : ""}`}
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  &lt;
                </button>

                {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                  // Mostrar páginas alrededor de la página actual
                  let pageNum
                  if (totalPages <= 5) {
                    pageNum = i + 1
                  } else if (currentPage <= 3) {
                    pageNum = i + 1
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i
                  } else {
                    pageNum = currentPage - 2 + i
                  }

                  return (
                    <button
                      key={pageNum}
                      className={`pagination-number ${currentPage === pageNum ? "active" : ""}`}
                      onClick={() => goToPage(pageNum)}
                    >
                      {pageNum}
                    </button>
                  )
                })}

                <button
                  className={`pagination-button ${currentPage === totalPages ? "disabled" : ""}`}
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  &gt;
                </button>
              </nav>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Products