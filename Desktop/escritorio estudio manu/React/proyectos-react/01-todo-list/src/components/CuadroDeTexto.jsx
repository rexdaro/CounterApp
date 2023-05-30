import React, { useState } from 'react'


export const CuadroDeTexto = ({addTodo}) => {

  const [title, setTitle] = useState('')

  const handleTodo = (e) => {
    if(e.key.toLowerCase() === 'enter') {
      addTodo(title)
      setTitle('')
    }
  }

  return (
    <>
    <input className='input' onChange={e => setTitle(e.target.value)} 
    type="text" placeholder='Escriba una tarea'
    value={title}
    onKeyDown={e => handleTodo(e)}
    ></input>

    </>
  )
}
