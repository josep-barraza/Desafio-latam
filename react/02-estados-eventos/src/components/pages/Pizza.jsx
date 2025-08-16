import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Pizza = () => {
  const { id } = useParams(); // 👈 Obtenemos el id de la URL
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/pizzas/${id}`)
      .then((res) => res.json())
      .then((data) => setPizza(data))
      .catch((error) => console.error("Error al cargar la pizza:", error));
  }, [id]);

  if (!pizza) {
    return <p className="text-center mt-5">Cargando pizza...</p>;
  }

  return (
       <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <img
              src={pizza.img}
              alt={pizza.name}
              className="card-img-top"
              style={{ height: "300px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h2 className="card-title" style={{color:"white"}}>{pizza.name}</h2>
              <p className="card-text" style={{color:"white"}}>
                <strong>Precio:</strong> ${pizza.price}
              </p>
              <p className="card-text" style={{color:"white"}}>
                <strong>Ingredientes:</strong> {pizza.ingredients.join(", ")}
              </p>
              <p className="card-text" style={{color:"white"}}>
                <strong>Descripción:</strong> {pizza.desc}
              </p>
              
              <button className="btn btn-success w-100 mt-3">Añadir al carrito</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;





 