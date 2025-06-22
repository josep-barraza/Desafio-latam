
const Header = () => {
    return (
        <div style={{ position: 'relative', textAlign: 'center', color: 'white' }}>
            <img className="imagen"
                src="src/assets/img/OIP.jpeg" 
                alt="Imagen de pizzería" 
                
            />
            <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -30%)' }}>
                <h1 style={{color:"red"}}> <strong> 🍕¡Pizzería Mamma Mia! 🍕</strong></h1>
                <h3 style={{color:"red"}}> <strong>Tenemos las mejores pizzas que podrás encontrar</strong> </h3>
            </div>
        </div>
    );
};

export default Header;