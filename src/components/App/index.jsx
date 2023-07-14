import './style.css';
import { useState, useEffect } from 'react';
import NewTodo from '../NewTodo';
import TodoList from '../TodoList';
import Form from '../Form';
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';

// eslint-disable-next-line react/prop-types
const App = () => {
  //Form funtions:
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [submitFirstName, setSubmitFirstName] = useState('');
  const [submitLastName, setSubmitLastName] = useState('');

  const submit = (event) => {
    event.preventDefault();
    setSubmitFirstName(firstName);
    setSubmitLastName(lastName);
    erase();
  }

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  }
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  }

  const erase = () => {
    setFirstName('');
    setLastName('');
  }

  //List functions:
  const [todos, setTodos] = useState([]);

  const onNewTodo = (value) => {
    setTodos([
      ...todos,
      {
        id: new Date().getTime(),
        title: value,
        checked: false,
      }
    ])
  }

  const onToggle = (todo) => {
    setTodos(
      todos.map((obj) =>
        (obj.title === todo.title ? {...obj, checked: !todo.checked } : obj)
      )
    )
  }

  const onDelete = (todo) => {
    setTodos(todos.filter(obj => obj.id !== todo.id));
  }

  useEffect(() => {
    const saveData = getSavedDataFromLocalStorage();
    setTodos(saveData.todos);
    setFirstName(saveData.firstName);
    setLastName(saveData.lastName);
  }, [])

    const saveDataToLocalStorage = (todos, firstName, lastName) => {
      const data = {
        todos: todos,
        firstName: firstName,
        lastName: lastName
      }
      localStorage.setItem('myList', JSON.stringify(data));
    }

  useEffect(() => {
    saveDataToLocalStorage(todos, firstName, lastName)
  },[todos, firstName, lastName])

  const getSavedDataFromLocalStorage = () => {
    const storedData = localStorage.getItem('myList');
    if (storedData === null) {
      return {
        todos: [],
        firstName: '',
        lastName: '',
      };
    }
    return JSON.parse(storedData);
  }

  return (
    <>
      <nav className='nav-bar'>
        <img src='src\assets\images\wepik--202306061347434Rss.png'
        alt='logo'/>
        <h1 className='title'>
        ToDo
        </h1>
      </nav>
      <section className='container'>
        <header>
        <Form submit={submit}
        firstName={firstName}
        lastName={lastName}
        handleFirstNameChange={handleFirstNameChange}
        handleLastNameChange={handleLastNameChange}/>
        <h2 className='h2'>
          Hello, {submitFirstName} {submitLastName}
        </h2>
        </header>
        <section className='main'>
        <NewTodo onNewTodo={onNewTodo} />
        <TodoList todos={todos}
        onToggle={onToggle}
        onDelete={onDelete}/>
        </section>
      </section>
      <footer className='footer'>
        <div className='division'></div>
        <div className='social-media'>
          <a href='https://github.com/PedroJacobCard'><AiFillGithub /></a>
          <a href='https://www.linkedin.com/in/pedro-jacob-82374bb3/'><AiFillLinkedin /></a>
          <a href='https://twitter.com/pedrojacob05'><AiOutlineTwitter /></a>
        </div>
        <p>&copy; Copyright - Pedro Jacob | 2023</p>
        <p>All rights reserved</p>
      </footer>
    </>
  );
}

export default App;
