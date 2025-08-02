import { useState } from "react";
import { pizzaCart as carritoInicial } from "../../js/pizzas";

const Cart = () => {
  const [carrito, setCarrito] = useState(
    carritoInicial.map((pizza) => ({ ...pizza }))
  );

  const aumentar = (id) => {
    const nuevoCarrito = carrito.map((pizza) =>
      pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
    );
    setCarrito(nuevoCarrito);
  };

  const disminuir = (id) => {
    const nuevoCarrito = carrito
      .map((pizza) =>
        pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
      )
      .filter((pizza) => pizza.count > 0);
    setCarrito(nuevoCarrito);
  };

  const total = carrito.reduce(
    (acumulado, pizza) => acumulado + pizza.price * pizza.count,
    0
  );

  return (
    <div className="container">
      <h1 className="text-center mt-4" style={{ color: "white" }}>
        Carrito de Compras
      </h1>
      <div className="row">
        {carrito.map((pizza) => (
          <div className="col-md-4" key={pizza.id}>
            <div className="card mb-4 shadow-sm">
              <img src={pizza.img} className="card-img-top" alt={pizza.name} />
              <div className="card-body">
                <h5 className="card-title text-capitalize" style={{ color: "white" }}>
                  {pizza.name}
                </h5>
                <p style={{ color: "white" }}>Precio: $ {pizza.price}</p>
                <p style={{ color: "white" }}>Cantidad: {pizza.count}</p>

                <div className="d-flex justify-content-between">
                  <button className="btn btn-danger" onClick={() => disminuir(pizza.id)}>
                    -
                  </button>
                  <button className="btn btn-success" onClick={() => aumentar(pizza.id)}>
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr />
      <div className="text-center">
        <h3 style={{ color: "white" }}>Total: $ {total}</h3>
        <button className="btn btn-primary" style={{ color: "white" }}>
          Pagar
        </button>
      </div>
    </div>
  );
};

export default Cart;