import React from 'react'

import '../../styles/Header.css'
import img from '../../images/Lucero.svg'

const Header = () => {
    return ( 
        <div className="container Contenido">
            <div className="row">
                <div className="col-6">
                    <div className="Imagen">
                        <img src={img} alt="Imagen Portada"/>
                    </div>
                </div>
                <div className="Texto col-6">
                    <div>
                        <h1>Where can I get some</h1>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>       
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Header;