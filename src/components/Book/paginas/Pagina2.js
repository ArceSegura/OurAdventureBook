import React from 'react'
import '../../../styles/Paginas/Pagina2.css'

const Pagina2 = ({titulo, img1, text1}) => {
    return ( 
    <div className="row ContenedorP2">
        <div className="col-12">
            <h1 className="ContenedorP2Titulo">{titulo}</h1>
        </div>
        <div className="col-12 ContenedorP2Text1 animate__animated animate__fadeInTopRight">
            <p>{text1}</p>
        </div>
        <div className="col-12 ContenedorP2Img1 animate__animated animate__fadeInTopRight">
            <img src={img1} alt="img"/>
        </div>
    </div>
     );
}
 
export default Pagina2;