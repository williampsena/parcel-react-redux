export const getTasks = state => {
  const { status } = state.todoList.filters

  return status === null
    ? state.todoList.tasks
    : state.todoList.tasks.filter(x => x.done === status)
}

export default {
  getTasks
}
