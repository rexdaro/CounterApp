import React from 'react'
import { TodoFilters } from './TodoFilters/TodoFilters'
import { Todo } from './Todo'

export const ListaDeTareas = ({
  todos, 
  handleSetComplete, 
  handleClearCompleted,
  handleDelete,
  activeFilter,
  showAllTodos,
  showActiveTodos,
  showCompletedTodos

}) => {
  return (
    <>
        {todos.map(todo => {
          return (
            <Todo key={todo.id} todo={todo} handleSetComplete={handleSetComplete} handleDelete={handleDelete} />
          )
        })}
        <TodoFilters 
          activeFilter={activeFilter}
          total={todos.length}
          showAllTodos={showAllTodos}
          showActiveTodos={showActiveTodos}
          showCompletedTodos={showCompletedTodos}
          handleClearCompleted={handleClearCompleted}

        />
    </>
  )
}
