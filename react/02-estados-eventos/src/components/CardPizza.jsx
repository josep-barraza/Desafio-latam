/* import { pizzas } from "../js/pizzas" */

const CardPizza = ({  imagen , titulo, ingredientes, precio }) => {
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






/* const CardPizza = ({  imagen , titulo, ingredientes, precio }) => {
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
 
*/





{/* <ul className="cardPizza">
  {pizzas.map((pizza) => (
    <li key={pizza.id} className="card"  style={{ width: '18rem' }}>
      <img src={pizza.img} className="card-img-top" alt={pizza.name} />
      <div className="card-body">
        <h5 className="card-title" style={{color:"white"}}>{pizza.name}</h5>
        <p className="card-text" style={{color:"white"}}>
          <strong>Descripción:</strong> {pizza.desc}
        </p>
        <p className="card-text" style={{color:"white"}}>
          <strong>🍕 Ingredientes</strong><br/ >
          {pizza.ingredients.join(", ")}
          <p className="card-text" style={{color:"white"}}>
          <strong>Precio: ${pizza.price}</strong>
        </p>
        </p>
        <div>
          <a href="#" className="btn btn-danger mb-3">Ver más</a>
          <a href="#" className="btn btn-danger mb-3 ms-2">Añadir al carrito</a>
        </div>
      </div>
    </li>
  ))} 
 

</ul> */}