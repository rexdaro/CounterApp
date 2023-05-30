import playerZone from '../../../public/img/proyecto_playerZone.jpg'
import encriptador from '../../../public/img/proyecto_encriptador.jpg'
import cartas from '../../../public/img/proyecto_juegoCartas.jpg'
import portfolio from '../../../public/img/proyecto_portfolio.jpg'
import calculadora from '../../../public/img/proyecto_calculadora.jpg'



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






import Proyecto from './componentes_proyectos/Proyecto'
import Icono from './componentes_iconos/Icono'




function Proyectos({clase}) {

    return (
        <>
            <div className="div_iconos">
                <Proyecto 
                claseImg='img_formacion' 
                claseParrafo='parrafo_img_proyecto' 
                imagen={playerZone} 
                descripcion={'E-Comerce | PlayerZone'}
                sobreProyecto={'PlayerZone es un emocionante proyecto de comercio electrónico de productos de PC. Desarrollado con HTML, CSS y JavaScript, ofrece una experiencia de compra en línea fácil y conveniente, con una amplia selección de componentes y tecnología.'}
                linkPagina={'https://playerzone.netlify.app/'}
                linkGitHub={'https://github.com/Juliorivasz/PlayerZone'}
                tecnologia1={<Icono claseDiv='div_icono_proyecto' claseImg="icono_proyecto" icono={html} descripcion={'HTML'}/>}
                tecnologia2={<Icono claseDiv='div_icono_proyecto' claseImg="icono_proyecto" icono={css3} descripcion={'CSS3'}/>}
                tecnologia3={<Icono claseDiv='div_icono_proyecto' claseImg="icono_proyecto" icono={js} descripcion={'JavaScript'}/>}              
                
                />
                
                <Proyecto 
                claseImg='img_formacion' 
                claseParrafo='parrafo_img_proyecto' 
                imagen={encriptador} 
                descripcion={'Encriptador'}
                sobreProyecto={'Creé un encriptador usando HTML, CSS y JavaScript, mejorando mis habilidades de programación y seguridad de datos al implementar algoritmos de cifrado. Fortalecí mis conocimientos técnicos y comprensión de la seguridad de la información.'}
                linkPagina={'https://rexdaro.github.io/encriptador/'}
                linkGitHub={'https://github.com/rexdaro/encriptador'}
                tecnologia1={<Icono claseDiv='div_icono_proyecto' claseImg="icono_proyecto" icono={html} descripcion={'HTML'}/>}
                tecnologia2={<Icono claseDiv='div_icono_proyecto' claseImg="icono_proyecto" icono={css3} descripcion={'CSS3'}/>}
                tecnologia3={<Icono claseDiv='div_icono_proyecto' claseImg="icono_proyecto" icono={js} descripcion={'JavaScript'}/>}              
                
                />
                <Proyecto 
                claseImg='img_formacion' 
                claseParrafo='parrafo_img_proyecto' 
                imagen={cartas} 
                descripcion={'BlackJack'}
                sobreProyecto={'Creé un juego de Blackjack usando HTML, CSS y JavaScript, donde aprendí sobre arrays, objetos y desestructuración. Fue una valiosa experiencia para mejorar mis habilidades de programación y comprender mejor la lógica y manipulación de datos.'}
                linkPagina={'https://rexdaro.github.io/juegoDeBlackJack/'}
                linkGitHub={'https://github.com/rexdaro/juegoDeBlackJack'}
                tecnologia1={<Icono claseDiv='div_icono_proyecto' claseImg="icono_proyecto" icono={bootstrap} descripcion={'Bootstrap'}/>}
                tecnologia2={<Icono claseDiv='div_icono_proyecto' claseImg="icono_proyecto" icono={css3} descripcion={'CSS3'}/>}
                tecnologia3={<Icono claseDiv='div_icono_proyecto' claseImg="icono_proyecto" icono={js} descripcion={'JavaScript'}/>}              
                
                />
                <Proyecto 
                claseImg='img_formacion' 
                claseParrafo='parrafo_img_proyecto' 
                imagen={portfolio} 
                descripcion={'Portfolio'}
                sobreProyecto={'Desarrollé mi portfolio utilizando React, aprendiendo sobre JSX, useState, useEffect y otros hooks. Integré HTML, CSS y JS para crear un sitio dinámico y funcional. Una forma efectiva de mostrar mis proyectos y habilidades.'}
                linkPagina={'https://manuel-rivas-frontend-developer.netlify.app/'}
                linkGitHub={'https://github.com/rexdaro/Portfolio'}
                tecnologia1={<Icono claseDiv='div_icono_proyecto' claseImg="icono_proyecto" icono={js} descripcion={'JavaScript'}/>}
                tecnologia2={<Icono claseDiv='div_icono_proyecto' claseImg="icono_proyecto" icono={css3} descripcion={'CSS3'}/>}
                tecnologia3={<Icono claseDiv='div_icono_proyecto' claseImg="icono_proyecto" icono={react} descripcion={'React'}/>}              
                
                />

                <Proyecto 
                claseImg='img_formacion' 
                claseParrafo='parrafo_img_proyecto' 
                imagen={calculadora} 
                descripcion={'Calculadora'}
                sobreProyecto={'Desarrollé una calculadora web interactiva utilizando React, JavaScript y mathjs. Permite realizar cálculos matemáticos precisos y cuenta con una interfaz intuitiva y funcional. ¡Una herramienta indispensable para cálculos rápidos!'}
                linkPagina={'https://calculadora-manu.netlify.app/'}
                linkGitHub={'https://github.com/rexdaro/calculator'}
                tecnologia1={<Icono claseDiv='div_icono_proyecto' claseImg="icono_proyecto" icono={js} descripcion={'JavaScript'}/>}
                tecnologia2={<Icono claseDiv='div_icono_proyecto' claseImg="icono_proyecto" icono={css3} descripcion={'CSS3'}/>}
                tecnologia3={<Icono claseDiv='div_icono_proyecto' claseImg="icono_proyecto" icono={react} descripcion={'React'}/>}              
                
                />

                
                
            </div>
            
            
        </>
      
    )
  }
  
  export default Proyectos