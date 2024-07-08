// src/Todo.js
import React, { useReducer, useState } from 'react';
import './Todo.css';

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [
        ...state,
        { id: Date.now(), text: action.text, completed: false }
      ];
    case 'remove':
      return state.filter(todo => todo.id !== action.id);
    // case 'toggle':
    //   return state.map(todo =>
    //     todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
    //   );
    default:
      return state;
  }
};

const Todo = () => {
  const [todos, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState('');

  const handleAdd = () => {
    dispatch({ type: 'add', text });
    setText('');
  };

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span
              onClick={() => dispatch({ type: 'toggle', id: todo.id })}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none'
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch({ type: 'remove', id: todo.id })}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
