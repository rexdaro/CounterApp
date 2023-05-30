import programador from '../../../public/img/programador_animado.png'

function SobreMi({clase}) {

    return (
      <div className='div_padre_sobreMi'>
        <div className="div_sobreMi">
            <h1 className='titulos_principales'>Manuel Rivas</h1>
            <p className='parrafo_sobreMi'>Soy Entusiasta, estoy super motivado a aprender 
                cada día más, apasionado por este hermoso mundo 
                de las IT, siempre dispuesto a aprender nuevas 
                tecnologias. Hace años atrás me dedique al diseño 
                gráfico, ahora quiero enfocar toda mi energía
                 en convertirme en Software Developer que es lo
                  que realmente me apasiona.</p>
            <p className='parrafo_sobreMi'>Siempre dispuesto al trabajo en equipo, full autodidacta 
                y en aprendizaje continuo.</p>            
        </div>

        <img className='programador_animado' src={programador} alt="programador animado" />
      </ div>
      
    )
  }
  
  export default SobreMi