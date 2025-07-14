
import CardPizza from "./components/CardPizza"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Login from "./components/Login"
import Navbar from "./components/Navbar"
import Pizza from "./components/Pizza"
import Register from "./components/Register"
import Miles from "./components/Utils"
import Cart from "./components/card"

function App() {
  

  return (
    <>

    <Navbar
    total={<Miles/>} 
    
    />
   { <Home/> }
    {/* {<CardPizza/>} */}
    {/* {<Cart/>} */}
     {/* <Register/>  */}
    {/* <Login/> */}
    {/* <Pizza/> */}
    <Footer
    fin={"@ 2025 - Pizzeria Mamma mia¡ - Todos los derechos reservados"}/>
   
    </>
  )
}

export default App
