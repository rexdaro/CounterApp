import React from "react";
import { createRoot } from 'react-dom/client';
import CounterApp from "./CounterApp";

import './index.css'

// const saludo = <h1>Hola Mundo</h1>;


// asi se hacia antes

// const divRoot = document.querySelector('#app');

// console.log(divRoot);



// ahora se hace asi:
const divRoot = document.getElementById('app');
const root = createRoot(divRoot); 


root.render(<CounterApp value={0} />);