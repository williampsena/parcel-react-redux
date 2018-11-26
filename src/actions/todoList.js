export const ADD_TASK = 'ADD_TASK'
export const CLEAR_TASKS = 'CLEAR_TASKS'
export const TOGGLE_TASK = 'TOGGLE_TASK'
export const FILTER_TASKS = 'FILTER_TASKS'

export const addTask = task => {
  return {
    type: ADD_TASK,
    task
  }
}

export const clearTasks = () => {
  return {
    type: CLEAR_TASKS
  }
}

export const toggleTask = task => {
  return {
    type: TOGGLE_TASK,
    task
  }
}

export const filterTasks = status => {
  return {
    type: FILTER_TASKS,
    status
  }
}
