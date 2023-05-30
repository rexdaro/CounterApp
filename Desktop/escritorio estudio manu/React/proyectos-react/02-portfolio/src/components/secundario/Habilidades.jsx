import css3 from '../../../public/icon/css3.svg'
import html from '../../../public/icon/html.svg'
import js from '../../../public/icon/javascript.svg'
import react from '../../../public/icon/react.svg'
import redux from '../../../public/icon/redux.svg'
import vite from '../../../public/icon/vite.svg'

import git from '../../../public/icon/git.svg'
import github from '../../../public/icon/github.svg'
import npm from '../../../public/icon/npm.svg'
import bootstrap from '../../../public/icon/bootstrap.svg'
import sass from '../../../public/icon/sass.svg'
import figma from '../../../public/icon/figma.svg'

import Icono from './componentes_iconos/Icono'

function Habilidades({clase}) {

    return (
        <div className='container_div_iconos'>
            <div className="div_iconos">
                <Icono icono={html} descripcion={'HTML'}/>
                <Icono icono={css3} descripcion={'CSS3'}/>
                <Icono icono={js} descripcion={'JavaScript'}/>
                <Icono icono={react} descripcion={'React'}/>
                <Icono icono={redux} descripcion={'Redux'}/>
                <Icono icono={vite} descripcion={'Vite'}/>
            </div>
            <div className="div_iconos">
                <Icono icono={git} descripcion={'Git'}/>
                <Icono icono={github} descripcion={'GitHub'}/>
                <Icono icono={npm} descripcion={'npm'}/>
                <Icono icono={bootstrap} descripcion={'Bootstrap'}/>
                <Icono icono={sass} descripcion={'Sass'}/>
                <Icono icono={figma} descripcion={'Figma'}/>
            </div>   
            
        </ div>
      
    )
  }
  
  export default Habilidades