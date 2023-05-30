import Card from "./Card"
import foto_manu from '../../../public/img/foto_manu.jpg'
import download from "../../../public/icon/download.svg"



import github from '../../../public/icon/github_cuadrado_blanco.svg'
import linkedin from '../../../public/icon/linkedinBlanco.svg'
import whatsapp from '../../../public/icon/whatsapp.svg'

import Icono from "../secundario/componentes_iconos/Icono"





function Principal() {

    return (
      <>
        <div id='inicio' className="div_componentePrincipal">
          <div className="container_info_principal">
            <Card clase={'div_card'}/> 
            <div className="div_download">
                <a href="https://drive.google.com/file/d/1yBJctyop7aLnEl0EgNDHkVs5wDyZZzqp/view?usp=sharing" target="_blank">Descargar CV</a>
                <img src={download} alt="" />
            </div>
            <div className='iconos_footer'>
                    <a href="https://github.com/rexdaro" target="_blank"><Icono claseImg='img_icono_footer' icono={github} descripcion={''}/></a>
                    <a href="https://www.linkedin.com/in/manuel-rivas-a56709200/" target="_blank"><Icono claseImg='img_icono_footer' icono={linkedin} descripcion={''}/></a>
                    <a href="https://wa.me/542617047380" target="_blank"><Icono claseImg='img_icono_footer' icono={whatsapp} descripcion={''}/></a>
                  
            </div>
          </div>
          


          <div className="div_img_manu">
            <div className="animacion_imagen_manu">
              <img src={foto_manu} alt="Manuel Rivas" className="img_manu"></img>
            </div>
          </div> 
        </div>

        
          
        
      </>
      
    )
  }
  
  export default Principal