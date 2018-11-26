
import React from 'react'
import { connect } from 'react-redux'
import ToDoListInput from './input'
import ToDoListTasks from './tasks'
import ToDoListFooter from './footer'
import { addTask, toggleTask, clearTasks, filterTasks } from '../actions/todoList'
import { getTasks } from '../selectors'

const Home = ({ tasks, filters, summary, addTask, toggleTask, clearTasks, filterTasks }) => {
  const handleClear = () => clearTasks()
  const handleCreate = task => addTask(task)
  const handleToggle = task => toggleTask(task)
  const handleFilter = status => filterTasks(status)

  return (
    <section className='hero is-light is-fullheight'>
      <div className='hero-body'>
        <div className='container has-text-centered'>
          <div className='box'>
            <nav className='panel is-light'>
              <p className='panel-heading'>
                Task Manager
              </p>
              <ToDoListInput onCreate={handleCreate} />
              <ToDoListTasks tasks={tasks} onToggle={handleToggle} />
              <ToDoListFooter filters={filters} summary={summary} onFilter={handleFilter} />
              <p className='panel-block'>
                <button className='button is-danger is-outlined is-fullwidth' onClick={handleClear}>
                  <i className='icon fas fa-trash' />Clear
                </button>
              </p>
            </nav>
          </div>
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = (state, _ownProps) => ({
  tasks: getTasks(state),
  filters: state.todoList.filters,
  summary: {
    done: state.todoList.tasks.filter(x => x.done).length,
    left: state.todoList.tasks.filter(x => !x.done).length
  }
})

const mapDispatchToProps = (dispatch, _ownProps) => ({
  addTask: task => dispatch(addTask(task)),
  toggleTask: task => dispatch(toggleTask(task)),
  clearTasks: () => dispatch(clearTasks()),
  filterTasks: status => dispatch(filterTasks(status))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
