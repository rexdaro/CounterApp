
import { useEffect, useState } from 'react'
import './App.css'
import { CuadroDeTexto } from './components/CuadroDeTexto'
import { ListaDeTareas } from './components/ListaDeTareas'
import { Titulo } from './components/Titulo'
import { Todo } from './components/Todo'

function App() {
  
  const [todos, setTodos] = useState([
    {id: 1,
      title: 'grabar un video',
      completed: false,},
    {id: 2,
      title: 'comer',
      completed: false,},
    {id: 3,
    title: 'estudiar programacion',
    completed: false,}
  ])

  const [activeFilter, setActiveFilter] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState(todos)

  const addTodo = (title) => {
    const lastId = todos.length > 0 ? todos[todos.length - 1].id : 1;
    const newTodo = {
      id: lastId + 1,
      title,
      completed: false,
    }

    const todoList = [...todos]
    todoList.push(newTodo);
    setTodos(todoList);
  }

  const handleSetComplete = (id) => {
    const updatedList = todos.map(todo => {
      if(todo.id === id){
        return {...todo, completed: !todo.completed}
      }
      return todo
    })

    setTodos(updatedList);
  }

  const handleDelete = (id) => {
    const updatedList = todos.filter(todo => todo.id !== id)
    setTodos(updatedList);
  }

  const handleClearCompleted = () => {
    const updatedList = todos.filter(todo => !todo.completed)
    setTodos(updatedList);
  }


  const showAllTodos = () => {
    setActiveFilter('all')
  }

  const showActiveTodos = () => {
    setActiveFilter('active')
  }

  const showCompletedTodos = () => {
    setActiveFilter('completed')
  }


  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredTodos(todos);
    } else if (activeFilter === 'active') {
        const activeTodos = todos.filter(todo => todo.completed === false);
        setFilteredTodos(activeTodos);
    } else if (activeFilter === 'completed') {
        const completedTodos = todos.filter(todo => todo.completed === true);
        setFilteredTodos(completedTodos);
    }
    
  },[activeFilter, todos]);


  return (
    
    <>   
      <Titulo />
      <div className='div_input'>
        <CuadroDeTexto addTodo={addTodo} />
      </div> 
      <div className='tareas'>
        <ListaDeTareas 
        todos={filteredTodos}
        activeFilter={activeFilter}
        handleSetComplete={handleSetComplete}
        handleDelete={handleDelete}
        showAllTodos={showAllTodos}
        showActiveTodos={showActiveTodos}
        showCompletedTodos={showCompletedTodos}
        handleClearCompleted={handleClearCompleted}
        />
        
      </div>
      
    </>
  )
}

export default App
