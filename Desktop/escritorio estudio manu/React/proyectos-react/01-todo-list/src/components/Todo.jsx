import React, { useState } from 'react'

export const Todo = ({todo, handleSetComplete, handleDelete}) => {

  const {id ,title, completed} = todo

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  }

  return (
    <>
        <div className='div_todo'>

        {
          completed ? (
            <input 
              className='checkbox'
              type="checkbox"             
              name="opcion1" 
              value="1"  
              onChange={handleCheckboxChange}
              onClick={() => handleSetComplete(id)} 
             checked={true}
            />
          ) : (
            <input 
              className='checkbox'
              type="checkbox"             
              name="opcion1" 
              value="1"  
              onChange={handleCheckboxChange}
              onClick={() => handleSetComplete(id)} 
              checked={false}
            />  
          )
        }

        
          
        {/* <p className={isChecked ? 'checked' : ''}>{title}</p> */}
        <p className={completed ? 'checked' : ''}>{title}</p> 

        <img onClick={() => handleDelete(id)} className='close-icon' src='/close-icon.svg' alt="Close Icon" />
        </div>
    </>
  )
}
