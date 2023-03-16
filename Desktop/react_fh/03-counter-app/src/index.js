import React from "react";
import { createRoot } from 'react-dom/client';
import PrimeraApp from "./PrimeraApp";

import './index.css'

// const saludo = <h1>Hola Mundo</h1>;


// asi se hacia antes

// const divRoot = document.querySelector('#app');

// console.log(divRoot);



// ahora se hace asi:
const divRoot = document.getElementById('app');
const root = createRoot(divRoot); 


root.render(<PrimeraApp saludo = 'hola mundo' />);