import React,{useState} from 'react'
import Imagenes from './ImageLoader';
import Etiquetas from './Etiquetas'
import Portada from './paginas/Portada.js'
import Pagina1 from './paginas/Pagina1'
import Pagina2 from './paginas/Pagina2'
import Pagina3 from './paginas/Pagina3'
import Pagina4 from './paginas/Pagina4'
import Pagina5 from './paginas/Pagina5'
import '../../styles/Book.css'


const Book = () => {

    const [pagina, setPagina] = useState(0);
    return ( 
        <div className="ContenedorBook container">
            
            <h1 className="TituloBook">Our Adventure Book</h1>
            <div className="row">                
                <div className="EtiquetasContenedor col-2">
                    <Etiquetas
                        Color = "morado"
                        Valor = {0}
                        setPagina = {setPagina}
                    />
                    <Etiquetas
                        Color = "verde"
                        Valor = {1}
                        setPagina = {setPagina}
                    />
                    <Etiquetas
                        Color = "naranja"
                        Valor = {2}
                        setPagina = {setPagina}
                    />
                    <Etiquetas
                        Color = "azul"
                        Valor = {3}
                        setPagina = {setPagina}
                    />
                    <Etiquetas
                        Color = "carne"
                        Valor = {4}
                        setPagina = {setPagina}
                    />
                    <Etiquetas
                        Color = "morado"
                        Valor = {5}
                        setPagina = {setPagina}
                    />
                    <Etiquetas
                        Color = "verde"
                        Valor = {6}
                        setPagina = {setPagina}
                    />
                    <Etiquetas
                        Color = "naranja"
                        Valor = {7}
                        setPagina = {setPagina}
                    />
                    <Etiquetas
                        Color = "azul"
                        Valor = {8}
                        setPagina = {setPagina}
                    />
                    <Etiquetas
                        Color = "carne"
                        Valor = {9}
                        setPagina = {setPagina}
                    />
                   <Etiquetas
                        Color = "morado"
                        Valor = {10}
                        setPagina = {setPagina}
                    />
                    <Etiquetas
                        Color = "verde"
                        Valor = {11}
                        setPagina = {setPagina}
                    />
                     <Etiquetas
                        Color = "naranja"
                        Valor = {12}
                        setPagina = {setPagina}
                    />
                    
                   
                </div>
                <div className="adventure-book col-10"> 
                    {   pagina === 0 && ( 
                        <Portada/>
                    )}

                    {   pagina === 1 && ( 
                        <Pagina1
                            titulo = "Titulo"
                            img1 = {Imagenes.img4}
                            img2 = {Imagenes.img5}
                            text1 = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                            text2 = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                        />
                    )}

                    {   pagina === 2 && ( 
                        <Pagina2
                            titulo = "Titulo"
                            img1 = {Imagenes.img4}
                            text1 = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                        />
                    )}

                    {   pagina === 3 && ( 
                        <Pagina3
                            titulo = "Titulo"
                            img1 = {Imagenes.img4}
                            img2 = {Imagenes.img4}
                            img3 = {Imagenes.img5}
                            text1 = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                        />
                    )}
                    {   pagina === 4 && ( 
                        <Pagina4
                            titulo = "Titulo"
                            img1 = {Imagenes.img4}
                            img2 = {Imagenes.img4}
                            img3 = {Imagenes.img5}
                            img4 = {Imagenes.img5}
                        />
                    )}
                    {   pagina === 5 && ( 
                        <Pagina5
                            titulo = "Titulo"
                            img1 = {Imagenes.img4}
                            img2 = {Imagenes.img4}
                            img3 = {Imagenes.img5}
                            text1 = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                        />
                    )}
                </div>
            </div>
        </div>
     );
}
 
export default Book;