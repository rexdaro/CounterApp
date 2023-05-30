
import Button_menu from "./botones/Button_menu";
import home from '../../../public/icon/home.svg';
import menu from '../../../public/icon/menu.svg';
import menuBlue from '../../../public/icon/menu_blue.svg';
import { useState } from "react";


function Barra() {

  


  const [showNavbar, setShowNavbar] = useState(false);  

  const activarNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const desactivarNav = () => {
    setShowNavbar(false);
  }
  
  
    return (
      <div className="barra">
        
        <a href="#inicio"><img src={home} alt="home" onClick={desactivarNav}/></a>
        <img src={showNavbar ? menuBlue : menu} alt="menu" id="menu-button" onClick={activarNavbar} />

        <div className={`${!showNavbar ? 'div_barra_oculto' : 'div_barra'}`} id="navbar-items">
          <Button_menu text='Manuel Rivas' 
            enlace={'#inicio'} 
            clase={"boton_principal"} 
            onClick={desactivarNav}
          />

          <Button_menu text='Habilidades' 
            enlace={'#Habilidades'} 
            clase={"boton_menu"} 
            onClick={desactivarNav}
          />

          <Button_menu text='Formacion' 
            enlace={'#Formacion'} 
            clase={"boton_menu"} 
            onClick={desactivarNav}
          />

          <Button_menu text='Proyectos' 
            enlace={'#Proyectos'} 
            clase={"boton_menu"} 
            onClick={desactivarNav}
          />

          <Button_menu text='Contacto' 
            enlace={'#Contacto'} 
            clase={"boton_menu"} 
            onClick={desactivarNav}
          />
        </div>
      </div>
    )
  }
  
  export default Barra

