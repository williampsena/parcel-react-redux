
import { combineReducers } from 'redux'
import { ADD_TASK, CLEAR_TASKS, TOGGLE_TASK, FILTER_TASKS } from './../actions/todoList'

let initialState = {
  tasks: [],
  filters: {
    status: null
  }
}

const todoList = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [ ...state.tasks, action.task ]
      }
    case CLEAR_TASKS:
      return {
        ...state,
        tasks: []
      }
    case TOGGLE_TASK:
      const index = state.tasks.indexOf(action.task)

      return {
        ...state,
        tasks: [
          ...state.tasks.slice(0, index),
          { ...action.task, done: !action.task.done },
          ...state.tasks.slice(index + 1)
        ]
      }
    case FILTER_TASKS:
      return {
        ...state,
        filters: {
          status: action.status
        }
      }
    default:
      return state
  }
}

const todoListReducer = combineReducers({
  todoList
})

export default todoListReducer
