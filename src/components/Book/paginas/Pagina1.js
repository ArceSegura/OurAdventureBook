import React from 'react'
import '../../../styles/Paginas/Pagina1.css'

const Pagina1 = ({titulo, img1, img2, text1, text2, size1, size2}) => {
    return ( 
        <div className="ContenedorP1 row">
            <div className="col-12">
                <h1 className="ContenedorP1Titulo ">
                    {titulo}
                </h1>
            </div>
            <div className="col-6 ContenedorP1Img1 animate__animated animate__swing">
                <img src={img1} alt="img" />
            </div>
            {size1 == 1 && (
                <div className="col-6 ContenedorSize1  animate__animated animate__backInRight">
                    <p>{text1}</p>
                </div>
            )}
            {size1 == 0 && (
                <div className="col-6 ContenedorP1Text1 animate__animated animate__backInRight">
                    <p>{text1}</p>
                </div>
            )}
            {size2 == 1 && (
                <div className="col-6 ContenedorSize2  animate__animated animate__backInRight">
                    <p>{text2}</p>
                </div>
            )}
            {size2 == 0 && (
                <div className="col-6 ContenedorP1Text1 animate__animated animate__backInRight">
                    <p>{text2}</p>
                </div>
            )}
            <div className="col-6 ContenedorP1Img2 animate__animated animate__swing">
                <img src={img2} alt="img" />
            </div>
        </div>
     );
}
 
export default Pagina1;