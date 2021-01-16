import React from 'react'
import '../../styles/Etiquetas.css'


const Etiquetas = ({Color, Valor, setPagina}) => {

    const cambiarPagina = () => {
        setPagina(Valor);
    }
 
    return ( 
        <div className="Forma">
                {Color === "morado" && ( 
                    <button 
                        className="BotonMorado"
                        onClick={cambiarPagina}
                    /> 
                )}
                {Color === "verde" && ( 
                    <button 
                        className="BotonVerde"
                        onClick={cambiarPagina}
                    />
                )}
                {Color === "naranja" && ( 
                    <button 
                        className="BotonNaranja"
                        onClick={cambiarPagina}
                    />                
                )}
                {Color === "azul" && ( 
                    <button 
                        className="BotonAzul"
                        onClick={cambiarPagina}
                    />                   
                    )}
                {Color === "carne" && ( 
                    <button 
                        className="BotonCarne"
                        onClick={cambiarPagina}
                    />                   
                )}
        </div>
          
     );
}
 
export default Etiquetas;