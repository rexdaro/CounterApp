import mail from '../../../public/icon/mail_ico.svg'
import foto_manu from '../../../public/img/foto_manu2.jpg'
import github from '../../../public/icon/github_cuadrado_blanco.svg'
import linkedin from '../../../public/icon/linkedinBlanco.svg'
import whatsapp from '../../../public/icon/whatsapp.svg'
import gmail from '../../../public/icon/mailCuadradoBlanco_ico.svg'
import instagram from '../../../public/icon/instagram.svg'
import cv from '../../../public/icon/cv.svg'

import Icono from './componentes_iconos/Icono'

function Contacto({clase}) {

    return (
        <>
            <div className="div_contacto">
                    <div className="div_img_manu_footer">
                        <div className="animacion_imagen_manu_footer">
                            <img src={foto_manu} alt="Manuel Rivas" className="img_manu_footer"></img>
                        </div>
                    </div>
                    <h4>¿Quieres contactar conmigo?</h4>
                    <h5>¡Hablemos!</h5>
                    <p>E-Mail: rexdaro@gmail.com</p>

                    <div className='div_boton'>
                        <a className='boton_enviar' href="https://mail.google.com/mail/?view=cm&to=rexdaro@gmail.com" target="_blank">
                            <img className='ico_mail' src={mail} alt="mail" />
                            <h2 >
                                Contactame aquí
                            </h2>                        
                        </a>
                    </div>
                    
                    
                    
            </div>
            <div className='footer'>

                <h5>Copyright &copy; | &hearts; Coded with  by <strong>Manuel Rivas</strong></h5>


                <div className='iconos_footer'>
                    <a href="https://github.com/rexdaro" target="_blank"><Icono claseImg='img_icono_footer' icono={github} descripcion={''}/></a>
                    <a href="https://www.linkedin.com/in/manuel-rivas-a56709200/" target="_blank"><Icono claseImg='img_icono_footer' icono={linkedin} descripcion={''}/></a>
                    <a href="https://wa.me/542617047380" target="_blank"><Icono claseImg='img_icono_footer' icono={whatsapp} descripcion={''}/></a>
                    <a href="https://mail.google.com/mail/?view=cm&to=rexdaro@gmail.com" target="_blank"><Icono claseImg='img_icono_footer' icono={gmail} descripcion={''}/></a>
                    <a href="https://www.instagram.com/manuel_rivasb/" target="_blank"><Icono claseImg='img_icono_footer' icono={instagram} descripcion={''}/></a>
                    <a href="https://drive.google.com/file/d/1yBJctyop7aLnEl0EgNDHkVs5wDyZZzqp/view?usp=sharing" target="_blank"><Icono claseImg='img_icono_footer' icono={cv} descripcion={''}/></a>

                </div>

            </div>
            
        </>

        
      
    )
  }
  
  export default Contacto