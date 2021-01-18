import React from 'react'
import '../../../styles/Paginas/Pagina5.css'

const Pagina5 = ({titulo, img1, img2, img3, text1}) => {
    return ( 
        <div className="row ContenedorP5">
            <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 ContenedorP5Img1 animate__animated animate__bounceInDown">
                <img src={img1} alt="img"/>
            </div>

            <div className="col-1 col-sm-1 col-md-2 col-lg-2 col-xl-2"></div>

            <div className="col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">
                <h1 className="ContenedorP5Titulo">{titulo}</h1>
            </div>

            <div className="col-3 col-sm-3 col-md-4 col-lg-4 col-xl-4"></div>

            <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl- ContenedorP5Img2 animate__animated animate__bounceInDown">
                <img src={img2} alt="img"/>
            </div>

            <div className="col-3 col-sm-3 col-md-4 col-lg-4 col-xl-4"></div>

            <div class="col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6 ContenedorP5Text1 animate__animated animate__backInUp">
                <p>{text1}</p>
            </div>

            <div className="col-1 col-sm-1 col-md-2 col-lg-2 col-xl-2"></div>

            <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4  ContenedorP5Img3 animate__animated animate__bounceInDown">
                <img src={img3} alt="img"/>
            </div>
        </div>

    );
}
 
export default Pagina5;