
import React from 'react'

const ToDoListTasks = ({ tasks, onToggle }) => {
  const handleToggleDone = task => () => onToggle(task)

  const renderIcon = task => {
    const cssClass = task.done ? 'fas fa-dot-circle' : 'far fa-circle'

    return (
      <span className='panel-icon' key={task.done}>
        <i className={cssClass} />
      </span>
    )
  }

  const renderItem = (task, i) => {
    return (<div key={i} className='panel-block'>
      <a onClick={handleToggleDone(task)}>
        {renderIcon(task)}
        <span>{task.name}</span>
      </a>
    </div>)
  }

  return tasks.map(renderItem)
}

export default ToDoListTasks
