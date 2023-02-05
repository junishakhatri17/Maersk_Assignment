import './App.css';
import Todolist from './Todolist';
import {useEffect, useState} from 'react';
import TodoCompletedItem from './TodoListCompleted';


function App() {

const [todos, setTodos] = useState(['']);

useEffect(() => {
    fetchData();
},[]);

const fetchData = async () => {
    let response = await (
        await fetch("https:/dummyjson.com/todos")
    ).json();
    setTodos(response.todos);
}

const onChangeItem = id => {
  const newTodos = [...todos];
  const todoIndex = newTodos.findIndex(todo => todo.id === id);
  newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
  if (!newTodos[todoIndex].completed) {
    newTodos.splice(todoIndex, 1);
  }
  setTodos(newTodos);
};

const completedTodos = todos.filter(todo => todo.completed);

  return (
    <div className="App">
      <header className="App-header">
        <p>
         TODO LIST
        </p>
      </header>
      <TodoCompletedItem completedItems={completedTodos} />
      <Todolist onChangeItem={onChangeItem} todo={todos} />
    </div>
  );
}

export default App;
