import React from "react";
import PropTypes from "prop-types";
// import React, { Fragment } from "react";



const PrimeraApp = ( {saludo, subtitulo} ) => {

    


    return (
        <>
            <h1>{saludo}</h1>
            {/* <pre>{JSON.stringify(saludo, null, 3)}</pre>    Esto se hace si quieres que imprima en pantalla un objeto */}
            <p>{subtitulo}</p>
        </>
    );
    
    
    


}

PrimeraApp.defaultProps = {
    subtitulo: 'soy un subtitulo'
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

export default PrimeraApp;





