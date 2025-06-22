import Footer from "./components/Footer"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Miles from "./components/Utils"


function App() {
  

  return (
    <>

    <Navbar
    total={<Miles/>} 
    
    />
    <Home/>
    <Footer
    fin={"@ 2025 - Pizzeria Mamma mia¡ - Todos los derechos reservados"}/>
   
    </>
  )
}

export default App
