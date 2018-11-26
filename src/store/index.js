import { createStore } from 'redux'
import { todoListReducer } from '../reducers'

export function configureStore (initialState) {
  const store = createStore(
    todoListReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  // Enable Webpack hot module replacement for reducers
  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('../reducers/todoList')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export const store = configureStore({})

export default store
