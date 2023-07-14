// eslint-disable-next-line no-unused-vars
import React from 'react'
import {MdDelete} from 'react-icons/md';
import PropTypes from 'prop-types';
import './style.css';

const TodoList = ({todos, onToggle, onDelete}) => {
  return (
    <div>
      <ul className='todo-list'>
        {
          // eslint-disable-next-line react/prop-types
          todos.map(todo => (
            <li key={todo.id}>
              <span
              className={['todo', todo.checked ? 'checked' : ''].join(' ')}
              onClick={() => onToggle && onToggle(todo)}
              role="button"
              >{todo.title}</span>
              <button className='delete-btn'
              type='button'
              onClick={() => onDelete && onDelete(todo)}>
              <MdDelete size={20}/>
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired
    })
    ).isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default TodoList
