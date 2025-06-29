import Footer from "./components/Footer"
import Home from "./components/Home"
import Login from "./components/Login"
import Navbar from "./components/Navbar"
import Register from "./components/Register"
import Miles from "./components/Utils"


function App() {
  

  return (
    <>

    <Navbar
    total={<Miles/>} 
    
    />
    {/* <Home/> */}
     {/* <Register/>  */}
    <Login/>
    
    <Footer
    fin={"@ 2025 - Pizzeria Mamma mia¡ - Todos los derechos reservados"}/>
   
    </>
  )
}

export default App
