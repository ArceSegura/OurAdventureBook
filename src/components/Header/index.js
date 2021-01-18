import React from 'react'
import ReactAudioPlayer from 'react-audio-player';
import music from '../music/music.mp3'
import '../../styles/Header.css'
import img from '../../images/Lucero.svg'

const Header = () => {
    return ( 
        <div className="container Contenido">
         <ReactAudioPlayer src={music} autoPlay/> 
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <div className="Imagen">
                        <img src={img} alt="Imagen Portada"/>
                    </div>
                </div>
                <div className="Texto col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <div>
                        <h1>Nuestra Historia: Team Mojito</h1>
                        <p>Se que algo bueno eh hecho en la vida ya que me premio con la dicha de haber conocido a una persona tan bonita y especial como tú, de excelentes sentimientos y con un corazón de oro.</p>
                        <p>Gracias por estar a mi lado, por compartir mis locuras, por no solo ser mi novio si no también mi cómplice y mejor amigo. Felices 7 meses mi amorcito precioso! Te amo hasta la luna y más allá.</p>       
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Header;