import React from 'react'

const FiltersContainer = ({children}) => {
  return (
    <div>{children}</div>
  )
}



const ItemsLeft = ({total = 0}) => {
  return (
    <p className='itemsLeft' >
        {total} items restantes
    </p>

  )
}




const FiltersButtonContainer = ({children}) => {
  return (
    <div className='filtros'>
      {children}
    </div>
  )
}

const FilterButton = ({action, active, filter}) => {
  return (
    <button onClick={action} 
    className="filter_button"
    active={active}>
      {filter}
    </button>
  )
}


export {FiltersContainer, ItemsLeft, FiltersButtonContainer, FilterButton};