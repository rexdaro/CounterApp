import React, {useState} from "react";
import PropTypes from "prop-types";
// import React, { Fragment } from "react";






const CounterApp = ( {value = 0} ) => {

    const [counter, setCounter] = useState(value);
   

    //handleApp

    //para agregar +1
    const handleAdd = () => {        
        setCounter(counter + 1);
    }


    // para restar -1
    const handleSustract = () => {        
        setCounter(counter - 1);
    }


    // para resetear el counter
    const handleReset = () => {        
        setCounter(value);
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSustract }>-1</button>
        </>
    );
    
    
    


}


CounterApp.defaultProps = {
    value: 2023
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;


