

function Secundario({clase, titulo, id, subComponent, claseH2='titulo_secundario'}) {

    return (
      <>
        <div id={id} className={clase}>
            <h2 className={claseH2} >{titulo}</h2>   
            {subComponent}    
        </div>
      </>      
    )
  }
  
  export default Secundario