import React from 'react'
import '../../styles/Nav.css'

const Nav = () => {
    return ( 
        <header className="Header container-fluid">
            <div className="ContenedorHeader row">
                <div className="ContenedorLogo col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                    <a className="Logo" href="/">Our Adventure Book: Iván y Luz</a>
                </div>
                <div className="ContenedorLogin col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <a href="#fotos" className="button">Adventure Book</a>
                </div>
            </div>
        </header>
     );
}
 
export default Nav;