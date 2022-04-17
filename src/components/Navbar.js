import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core/';
import Cart from './Cart';

const Navbar = () => {
    return (
        <div className="p-0">
            <nav className="navbar navbar-expand-sm navbar-light" style={{ backgroundColor: '#a35481', width: '100%', color: '#000000' }}>
                <div className="container-fluid py-2">
                
                <div>
                    <h1 fontSize='10px' alignItems='flex-start'> Hair Line </h1>
                </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" style={{ textDecoration: 'none' }}>
                                    <Button color="black">Home</Button>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="./Contato" style={{ textDecoration: 'none' }}>
                                    <Button color="black">Contato</Button>
                                </Link>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <Cart />
                        </div>
                    </div>
                </div>        
            </nav>
        </div>
    )
}
export default Navbar;