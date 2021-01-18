import React from 'react'
import '../../../styles/Paginas/Pagina3.css'

const Pagina3 = ({titulo, img1, img2, img3, text1}) => {
    return ( 
        <div className="row ContenedorP3">
            <div className="col-12 ">
                <h1 className="ContenedorP3Titulo">{titulo}</h1>
            </div>
            <div className="col-12 ContenedorP3Img1 animate__animated animate__jackInTheBox">
                <img src={img1} alt="img"/>
            </div>
            <div className="row ContenedorP3Imgages">
                <div  className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 ContenedorP3Img2 animate__animated animate__jackInTheBox">
                    <img src={img2} alt="img"/>
                </div>
                <div  className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 ContenedorP3Text1 animate__animated animate__jackInTheBox">
                    <p>{text1}</p>
                </div>
                <div  className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 ContenedorP3Img3 animate__animated animate__jackInTheBox">
                    <img src={img3} alt="img"/>
                </div>
            </div>
        </div>
     );
}
 
export default Pagina3;