import React from 'react'
import '../../../styles/Paginas/Pagina4.css'

const Pagina4 = ({titulo, img1, img2, img3, img4}) => {
    return ( 
        <div className="row ContenedorP4">
            <div className="col-12">
                <h1 className="ContenedorP4Titulo">{titulo}</h1>
            </div>

            <div className="col-6 ContenedorP4Img1 animate__animated animate__backInRight">
                <img src={img1} alt="img"/>
            </div>
            <div className="col-6 ContenedorP4Img2 animate__animated animate__backInRight">
                <img src={img2} alt="img"/>
            </div>
            <div className="col-6 ContenedorP4Img3 animate__animated animate__backInRight">
                <img src={img3} alt="img"/>
            </div>
            <div className="col-6 ContenedorP4Img4 animate__animated animate__backInRight">
                <img src={img4} alt="img"/>
            </div>

        </div>
     );
}
 
export default Pagina4;