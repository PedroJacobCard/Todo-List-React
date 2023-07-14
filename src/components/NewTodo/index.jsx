// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import PropTypes  from 'prop-types';
import './style.css';

// eslint-disable-next-line react/prop-types
const NewTodo = ({ onNewTodo }) => {

  const ENTER_KEY = 13;
  const ESCAPE_KEY = 27;

  const [value, setValue] = useState('');


  const erase = () => {
    setValue('')
  }

  const submit = () => {
    if(onNewTodo){
      onNewTodo(value);
      erase();
    }
  }

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const onKeyDown = (event) => {
    if (event.which === ENTER_KEY){
      submit();
    } else if (event.which === ESCAPE_KEY){
      erase();
    }
  }

  return (
    <div>
      <input className='new-todo'
      placeholder="What's your task?"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      required/>
    </div>
  )
}

NewTodo.PropTypes = {
  onNewTodo: PropTypes.func.isRequired
}

export default NewTodo
