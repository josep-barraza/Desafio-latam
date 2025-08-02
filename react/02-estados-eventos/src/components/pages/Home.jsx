/* import { useEffect, useState } from "react"; */
import  CardPizza from "../CardPizza";
import Header from "../Header";

const Home = () => {

 
/* 
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then((res) => res.json())
      .then((data) => setPizzas(data))
      .catch((error) => console.error("Error al cargar las pizzas:", error));
  }, []); */

  return (
    <>
    <div className="container">
      <Header />


        <div className="tarjetas">
      
       <CardPizza
        imagen="src/assets/img/pizza-napolitana-2.jpg"
        titulo="Pizza !Napolitana¡"
        ingredientes={"Tomate, Mozzarella fresca, Albahaca fresca, Aceite de oliva virgen extra"}
        precio={"9.700"}
      />
      <CardPizza
        imagen="src/assets/img/pollo-bbq.jpeg"
        titulo="Pizza !Pollo BBQ¡"
        ingredientes={"Salsa BBQ, Pollo cocido y desmenuzado, Queso mozzarella, Cebolla morada "}
        precio={"8.900"}
      />
      <CardPizza
        imagen="src/assets/img/hawaiana-1024x683.jpg"
        titulo="Pizza !Hawaiana¡"
        ingredientes={"Salsa de tomate, Queso mozzarella rallado, Jamón cocido o en lonchas, Trozos de piña "}
        precio={"10.100"}
      />
 
    </div>
    </div>
    </>


  );
};


   


export default Home;





{/*     <div className="tarjetas">
      
    {   <CardPizza
        imagen="src/assets/img/pizza-napolitana-2.jpg"
        titulo="Pizza !Napolitana¡"
        ingredientes={"Tomate, Mozzarella fresca, Albahaca fresca, Aceite de oliva virgen extra"}
        precio={"9.700"}
      />
      <CardPizza
        imagen="src/assets/img/pollo-bbq.jpeg"
        titulo="Pizza !Pollo BBQ¡"
        ingredientes={"Salsa BBQ, Pollo cocido y desmenuzado, Queso mozzarella, Cebolla morada "}
        precio={"8.900"}
      />
      <CardPizza
        imagen="src/assets/img/hawaiana-1024x683.jpg"
        titulo="Pizza !Hawaiana¡"
        ingredientes={"Salsa de tomate, Queso mozzarella rallado, Jamón cocido o en lonchas, Trozos de piña "}
        precio={"10.100"}
      />
 }
    </div> */}

    {/* 
      <h1 className="text-center my-4" style={{color:"white"}}>¡Elige tu Pizza Favorita!</h1>

      <div className="row">
        {pizzas.map((pizza) => (
          <div className="col-md-4 mb-4" key={pizza.id}>
            <div className="card h-100 shadow">
              <img
                src={pizza.img}
                className="card-img-top"
                alt={pizza.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{color:"white"}}>{pizza.name}</h5>
                <p className="card-text" style={{color:"white"}}>
                  <strong>Ingredientes:</strong><br />
                  {pizza.ingredients.join(", ")}
                </p>
                <p className="card-text" style={{color:"white"}}>
                  <strong>Precio:</strong> ${pizza.price}
                </p>
                <button className="btn btn-primary w-100">Añadir al carrito</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div> */}