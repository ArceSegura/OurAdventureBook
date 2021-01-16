import React from 'react'
import '../../../styles/Paginas/Pagina5.css'

const Pagina5 = ({titulo, img1, img2, img3, text1}) => {
    return ( 
        <div className="row ContenedorP5">
            <div className="col-4 ContenedorP5Img1 animate__animated animate__bounceInDown">
                <img src={img1} alt="img"/>
            </div>

            <div className="col-4"></div>

            <div className="col-4">
                <h1 className="ContenedorP5Titulo">{titulo}</h1>
            </div>

            <div className="col-4"></div>

            <div className="col-4 ContenedorP5Img2 animate__animated animate__bounceInDown">
                <img src={img2} alt="img"/>
            </div>

            <div className="col-4"></div>

            <div class="col-4 ContenedorP5Text1 animate__animated animate__backInUp">
                <p>{text1}</p>
            </div>

            <div className="col-4"></div>

            <div className="col-4 ContenedorP5Img3 animate__animated animate__bounceInDown">
                <img src={img2} alt="img"/>
            </div>
        </div>

    );
}
 
export default Pagina5;