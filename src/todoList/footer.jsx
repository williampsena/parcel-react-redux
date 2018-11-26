
import React from 'react'
import { css } from 'glamor'

const ToDoListFooter = ({ filters, onFilter, summary }) => {
  const handleSetFilter = filter => () => { onFilter(filter) }

  const renderFilters = () => {
    const cssClass = filter => filter === filters.status
      ? 'button is-small is-dark is-selected'
      : 'button is-small'

    const avaiableFilters = [
      { label: 'All', value: null },
      { label: 'Active', value: false },
      { label: 'Completed', value: true }
    ]

    return (
      <div className='buttons has-addons'>
        {avaiableFilters.map(filter => (
          <button
            key={filter.label}
            className={cssClass(filter.value)}
            onClick={handleSetFilter(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>
    )
  }

  return (
    <div className='panel-block' {...ToDoListFooter.styles}>
      <nav className='level'>
        <div className='level-left'>
          <strong className='count'>{summary.left}</strong>
          items left
        </div>
        <div className='level-right'>
          {renderFilters()}
        </div>
      </nav>
    </div>
  )
}

ToDoListFooter.styles = css({
  '& .level': {
    width: 'calc(100%)'
  },
  '& .count': {
    padding: '0.5rem'
  }
})

export default ToDoListFooter
