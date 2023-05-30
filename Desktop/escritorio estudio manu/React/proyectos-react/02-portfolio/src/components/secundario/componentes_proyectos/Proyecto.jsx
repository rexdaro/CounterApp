
import gitHubIco from '../../../../public/icon/github.svg'
import demoIco from '../../../../public/icon/demo.svg'
import verIco from '../../../../public/icon/IconoVer.svg'
import gitHubBlanco from '../../../../public/icon/githubBlanco.svg'







function Proyecto({imagen, descripcion, claseImg="icono", claseParrafo="parrafo_de_icono", sobreProyecto, linkPagina, linkGitHub, tecnologia1, tecnologia2, tecnologia3}) {

    return (
        <div className="div_proyecto">            
            < img className={claseImg} src={imagen} alt='css3' />

            <div className="div_parrafo_proyecto">
                    <p className={claseParrafo}>{descripcion}</p>
            </div>


            <div className="div_icono_ver">
                    <img src={verIco} className="icono_ver" />
                    <img src={gitHubBlanco} className="icono_ver" />
            </div>


            <div className="div_info_proyecto">
                <div className="div_parrafo_proyecto">
                    <p className={claseParrafo}>{descripcion}</p>
                </div>
                <div className="div_div_info_proyecto">
                    <p className="info_proyecto">
                        {sobreProyecto}
                    </p>
                    <h3>Tecnologias Utilizadas:</h3>
                    <div className="info_proyecto_iconos">
                        {tecnologia1}
                        {tecnologia2}
                        {tecnologia3}
                    </div>
                    <div className="link_proyectos">
                        <div>                        
                            <img src={demoIco} alt="Demo" />
                            <img src={gitHubIco} alt="GitHub" />
                        </div>
                        <div>
                            <a href={linkPagina} target="_blank">Demo</a>
                            <a href={linkGitHub} target="_blank">GitHub</a>
                        </div>
                        
                    </div>
                </div> 

            </div>  
            
            

        </ div>
      
    )
  }
  
  export default Proyecto