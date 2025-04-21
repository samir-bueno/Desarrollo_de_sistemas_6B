import '../hojas-de-estilo/ProductoDetalle.css';
import remera1 from '../imagenes/remera_1.jpg';
import remera2 from '../imagenes/remera_2.jpg';
import remera3 from '../imagenes/remera_3.jpg';
import remera4 from '../imagenes/remera_4.jpg';
import remera5 from '../imagenes/remera_5.jpg';
import remera6 from '../imagenes/remera_6.jpg';
import remera7 from '../imagenes/remera_7.jpg';
import remera8 from '../imagenes/remera_8.jpg';
import remera9 from '../imagenes/remera_9.jpg';

export default function ProductoDetalle() {
  return (
    <div className="products">
      <div className="product-card">
        <img src={remera1} alt="Remera 1" />
        <h3>Remera 1</h3>
        <p>Remera artesanal 100% algodón.</p>
        <p className="price">$1200</p>
      </div>

      <div className="product-card">
        <img src={remera2} alt="Remera 2" />
        <h3>Remera 2</h3>
        <p>Remera artesanal 100% algodón.</p>
        <p className="price">$1300</p>
      </div>

      <div className="product-card">
        <img src={remera3} alt="Remera 3" />
        <h3>Remera 3</h3>
        <p>Remera artesanal 100% algodón.</p>
        <p className="price">$1250</p>
      </div>

      <div className="product-card">
        <img src={remera4} alt="Remera 4" />
        <h3>Remera 4</h3>
        <p>Remera artesanal 100% algodón.</p>
        <p className="price">$1400</p>
      </div>

      <div className="product-card">
        <img src={remera5} alt="Remera 5" />
        <h3>Remera 5</h3>
        <p>Remera artesanal 100% algodón.</p>
        <p className="price">$1150</p>
      </div>

      <div className="product-card">
        <img src={remera6} alt="Remera 6" />
        <h3>Remera 6</h3>
        <p>Remera artesanal 100% algodón.</p>
        <p className="price">$1350</p>
      </div>

      <div className="product-card">
        <img src={remera7} alt="Remera 7" />
        <h3>Remera 7</h3>
        <p>Remera artesanal 100% algodón.</p>
        <p className="price">$1100</p>
      </div>

      <div className="product-card">
        <img src={remera8} alt="Remera 8" />
        <h3>Remera 8</h3>
        <p>Remera artesanal 100% algodón.</p>
        <p className="price">$1450</p>
      </div>

      <div className="product-card">
        <img src={remera9} alt="Remera 9" />
        <h3>Remera 9</h3>
        <p>Remera artesanal 100% algodón.</p>
        <p className="price">$1500</p>
      </div>
    </div>
  );
}
