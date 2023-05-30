import React from "react";

function Button_menu({ text, enlace, clase, onClick }) {
  const handleClick = () => {
    if (onClick) {
      onClick(); // Llama a la función onClick proporcionada
    }
  };

  return (
    <a className={clase} href={enlace} onClick={handleClick}>
      <p>{text}</p>
    </a>
  );
}

export default Button_menu;
