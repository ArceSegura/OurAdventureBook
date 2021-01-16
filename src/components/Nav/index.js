import React from 'react'
import '../../styles/Nav.css'

const Nav = () => {
    return ( 
        <header className="Header">
            <div className="ContenedorHeader">
                <div className="ContenedorLogo">
                    <a className="Logo" href="/">Titulo</a>
                </div>
                <div className="ContenedorLogin">
                    <a href="#Fotos" className="button">Adventure Book</a>
                </div>
            </div>
        </header>
     );
}
 
export default Nav;