import { useContext } from "react";
import { CartContext } from "../../context/CartContex";
import { TokenContext } from "../../context/TokenContex";

const Cart = () => {
  const { carts, increase, decrease, total } = useContext(CartContext);
  const { token } = useContext(TokenContext);

  return (
    <div className="container">
      <h1 className="text-center mt-4" style={{ color: "white" }}>
        Carrito de Compras
      </h1>

      <div className="row">
        {carts.length === 0 ? (
          <p className="text-center mt-3" style={{ color: "white" }}>
            No hay productos en el carrito.
          </p>
        ) : (
          carts.map((pizza) => (
            <div className="col-md-4" key={pizza.id}>
              <div className="card mb-4 shadow-sm">
                <img src={pizza.img} className="card-img-top" alt={pizza.name} />
                <div className="card-body">
                  <h5
                    className="card-title text-capitalize"
                    style={{ color: "white" }}
                  >
                    {pizza.name}
                  </h5>
                  <p style={{ color: "white" }}>Precio: $ {pizza.price}</p>
                  <p style={{ color: "white" }}>Cantidad: {pizza.count}</p>

                  <div className="d-flex justify-content-between">
                    <button
                      className="btn btn-danger"
                      onClick={() => decrease(pizza.id)}
                    >
                      -
                    </button>
                    <button
                      className="btn btn-success"
                      onClick={() => increase(pizza.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {carts.length > 0 && (
        <>
          <hr />
          <div className="text-center">
            <h3 style={{ color: "white" }}>Total: $ {total}</h3>
            <button
              className="btn btn-primary"
              style={{ color: "white" }}
              disabled={!token} // 🔒 Se desactiva si no hay token
            >
              Pagar
            </button>
            {!token && (
              <p className="mt-2 text-warning">
                Debes iniciar sesión para poder pagar.
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;