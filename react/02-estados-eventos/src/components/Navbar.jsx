import Miles from "./Utils";


const Navbar = ({total}) =>{

return (

    <nav className="navbar navbar-expand-lg bg-body-tertiary, card text-bg-dark mb-3 "  >
  <div className="container-fluid ">
    <a className="navbar-brand" href="#" style={{color:"red"}}><strong>🍕 Pizzeria Mamaa Mia¡ 🍕</strong></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#" style={{color:"white"}}>🍕 Home</a>
        <a className="nav-link" href="#" style={{color:"white"}}>🧔🏼‍♂️ Profile</a>
        <a className="nav-link" href="#" style={{color:"white"}}>🔒 Logout</a>
        <a className="nav-link" href="#" style={{color:"white"}}>🔓 Login</a>
        <a className="nav-link" href="#" style={{color:"white"}}>🔐 Register</a>
        <a className="nav-link" href="#" style={{color:"white"}}> {total}</a>
        
      </div>
    </div>
  </div>
</nav>




)


}

export default Navbar;