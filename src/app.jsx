import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ToDoListComponent } from './todoList'
import store from './store'

render(
  <Provider store={store}>
    <ToDoListComponent />
  </Provider>,
  document.getElementById('root')
)
