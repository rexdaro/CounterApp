function Icono({icono, descripcion, claseDiv="div_icono_parrafo", claseImg="icono", claseParrafo="parrafo_de_icono"}) {

    return (
        <div className={claseDiv}>            
            < img className={claseImg} src={icono} alt='css3' />
            <p className={claseParrafo}>{descripcion}</p>
        </ div>
      
    )
  }
  
  export default Icono



