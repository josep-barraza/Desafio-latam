const CardPizza = ({ imagen, titulo, ingredientes, precio }) => {
  return (

   
    <div className="card" style={{ width: '18rem' }}>
      <img src={imagen} className="card-img-top" alt={titulo} />
      <div className="card-body">
        <h5 className="card-title" style={{color:"white"}}>{titulo}</h5>
        <p className="card-text" style={{color:"white"}}>
          <strong>🍕 Ingredientes</strong><br />
          {ingredientes}
        </p>
        <p className="card-text" style={{color:"white"}}>
          <strong>Precio: ${precio}</strong>
        </p>
        <div>
          <a href="#" className="btn btn-danger mb-3">Ver más</a>
          <a href="#" className="btn btn-danger mb-3 ms-2">Añadir al carrito</a>
        </div>
      </div>
    </div>
    
  );
};

export default CardPizza;

