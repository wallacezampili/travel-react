import {Link } from 'react-router-dom';
import './Nav.css'

export default () => {
    return (
        <div className="navbar">
                
            <div className="logo"><Link to="/"><i className="fa-solid fa-plane-up"></i></Link></div>

            <div className='link'><Link to="/">Home</Link></div>
            <div className='link'><Link to="/">Products</Link></div>
            <div className='link'><Link to="/">About us</Link></div>
            
            <div className="login"><Link to='/login'>Login</Link></div>
            <div><button className="nav-btn">Cadastre-se</button> </div>
            
      
        
    </div>
    );
}