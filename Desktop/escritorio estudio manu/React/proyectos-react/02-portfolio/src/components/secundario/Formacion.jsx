import alura from '../../../public/img/formacion-Alura.png'
import frecodecamp from '../../../public/img/formacion-frecodecamp.png'
import javascript from '../../../public/img/formacion-javascript.png'
import react from '../../../public/img/react-udemy.png'




import Icono from './componentes_iconos/Icono'

function Formacion({clase}) {

    return (
        <>
            <div className='container_div_formacion_iconos'>
                <div className='container_div_formacion_iconos_dentro'>
                    <div className="div_formacion_iconos">
                        <Icono 
                        claseImg='img_formacion' 
                        claseParrafo='parrafo_img_formacion' 
                        icono={alura} 
                        descripcion={'Full-Stack Developer'}
                        />
                    </div>
                    <div className="div_formacion_iconos">
                        <Icono 
                        claseImg='img_formacion' 
                        claseParrafo='parrafo_img_formacion' 
                        icono={frecodecamp} 
                        descripcion={'Diferentes Cursos'}
                        />
                    </div>
                    <div className="div_formacion_iconos">
                        <Icono 
                        claseImg='img_formacion' 
                        claseParrafo='parrafo_img_formacion' 
                        icono={javascript} 
                        descripcion={'Javascript Moderno'}
                        />
                    </div>
                    <div className="div_formacion_iconos">
                        <Icono 
                        claseImg='img_formacion' 
                        claseParrafo='parrafo_img_formacion' 
                        icono={react} 
                        descripcion={'React'}
                        />
                    </div>
                        
                    
                </div>
            </div>
            
            
            
            
        </>
      
    )
  }
  
  export default Formacion