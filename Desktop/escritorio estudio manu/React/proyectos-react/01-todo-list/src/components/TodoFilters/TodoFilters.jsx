import React from 'react'
import { FiltersContainer, ItemsLeft, FiltersButtonContainer, FilterButton } from './TodoFilters.components'

export const TodoFilters = ({
          activeFilter,
          total,
          showAllTodos,
          showActiveTodos,
          showCompletedTodos,
          handleClearCompleted
}) => {
  return (
    <div className='filters'>
      <FiltersContainer>
        <ItemsLeft total={total} />
        <FiltersButtonContainer>
          <FilterButton action={() => showAllTodos()} active={activeFilter} filter='Todos'  />
          <FilterButton action={() => showActiveTodos()} active={activeFilter} filter='Activos'  />
          <FilterButton action={() => showCompletedTodos()} active={activeFilter} filter='Completados'  />
        </FiltersButtonContainer>

        <button className='button_eliminar' onClick={() => handleClearCompleted()}>
          Eliminar completados
        </button>

      </FiltersContainer>
    </div>
    
  )
}
