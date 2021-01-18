import React,{useState} from 'react'
import Imagenes from './ImageLoader';
import Etiquetas from './Etiquetas'
import Portada from './paginas/Portada.js'
import Pagina1 from './paginas/Pagina1'
import Pagina2 from './paginas/Pagina2'
import Pagina3 from './paginas/Pagina3'
import Pagina4 from './paginas/Pagina4'
import Pagina5 from './paginas/Pagina5'
import Cronometro from './Cronometro'
import '../../styles/Book.css'


const Book = () => {

    const [pagina, setPagina] = useState(0);
    return ( 
        <div className="ContenedorBook container" id="fotos">
            
            <h1 className="TituloBook">Our Adventure Book</h1>
            <div className="row">                
                <div className="EtiquetasContenedor col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
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
                <div className="adventure-book col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10"> 
                    {   pagina === 0 && ( 
                        <Portada/>
                    )}

                    {   pagina === 1 && ( 
                        <Pagina2
                            titulo = "Y así comenzó nuestra historia..."
                            img1 = {Imagenes.img6}
                            text1 = "Nuestra primer foto juntos, cuando solo íbamos decididos a terminar el inventario del activo fijo. Quien sé lo imaginaria."
                        />
                    )}

                    {   pagina === 2 && ( 
                        <Pagina1
                            titulo = "Viva Nuestro Amor"
                            img1 = {Imagenes.img4}
                            img2 = {Imagenes.img5}
                            text1 = "Septiembre del 2020"
                            text2 = "Gracias por siempre estar conmigo amor"
                            size1 = {1}
                            size2 = {1}
                        />
                    )}


                    {   pagina === 3 && ( 
                        <Pagina3
                            titulo = "Bernal for Ever"
                            img1 = {Imagenes.img11}
                            img2 = {Imagenes.img12}
                            img3 = {Imagenes.img13}
                            text1 = "Julio 2020: Sé que no te puedo comprar un Racer aún, pero tuviste uno por unas horas, espero esa aventura te allá gustado. Vamos por más experiencias juntos."
                        />
                    )}
                    {   pagina === 4 && ( 
                        <Pagina4
                            titulo = "Otro mini viaje en carretera a la lista"
                            img1 = {Imagenes.img7}
                            img2 = {Imagenes.img8}
                            img3 = {Imagenes.img9}
                            img4 = {Imagenes.img10}
                        />
                    )}
                    {   pagina === 5 && ( 
                        <Pagina5
                            titulo = "Nuestra Pequeña familia"
                            img1 = {Imagenes.img1}
                            img2 = {Imagenes.img3}
                            img3 = {Imagenes.img2}
                            text1 = "Jake e Isabella, los quiero con el alma. Nuestras Bendis."
                        />
                    )}
                    {   pagina === 6 && ( 
                        <Pagina3
                            titulo = "Queso y vino con mi amorcito"
                            img1 = {Imagenes.img16}
                            img2 = {Imagenes.img14}
                            img3 = {Imagenes.img15}
                            text1 = "Gracias por compartir esos gustos conmigo."
                        />
                    )}
                    {   pagina === 7 && ( 
                        <Pagina3
                            titulo = "Conociendo la historia de tu mano"
                            img1 = {Imagenes.img19}
                            img2 = {Imagenes.img17}
                            img3 = {Imagenes.img18}
                            text1 = "Día con día agregamos bellos capítulos a nuestra historia."
                        />
                    )}
                    {   pagina === 8 && ( 
                        <Pagina1
                            titulo = "Nuestro primer Picnic"
                            img1 = {Imagenes.img20}
                            img2 = {Imagenes.img21}
                            text1 = "Recuerdas que ese día tenía miedo de investigar la casa abandonada, pero de tu mano siempre todo es más fácil."
                            text2 = "¡ Siempre juntos !"
                            size1 = {0}
                            size2 = {1}
                        />
                    )}
                    {   pagina === 9 && ( 
                        <Pagina5
                            titulo = "Esto es Halloween"
                            img1 = {Imagenes.img22}
                            img2 = {Imagenes.img23}
                            img3 = {Imagenes.img24}
                            text1 = "Solo tu haces estas locuras conmigo sin importar que” te amo!!"
                        />
                    )}
                    {   pagina === 10 && ( 
                        <Pagina5
                            titulo = "San Miguel de Noche"
                            img1 = {Imagenes.img25}
                            img2 = {Imagenes.img27}
                            img3 = {Imagenes.img26}
                            text1 = "Caminar por el jardín viendo la catedral de noche fue genial, gracias a ti pude conocer a esas horas SMA"
                        />
                    )}
                    {   pagina === 11 && ( 
                        <Cronometro/>
                    )}
                    {   pagina === 12 && ( 
                        <Portada/>
                    )}
                </div>
            </div>
        </div>
     );
}
 
export default Book;