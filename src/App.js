import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {TodoProvider} from "./TodoContext";
import TodoHead from "./components/TodoHead";
import FormTodo from "./components/FormTodo";
import Todo from "./components/Todo";
import ClearTodo from "./components/ClearTodo";

function App() {
  return (
      <TodoProvider>
        <div className="app">
          <div className="container">
            <TodoHead />
            <h1 className="text-center mb-4">Todo List</h1>
            <FormTodo />
            <div>
              <Todo />
            </div>
              <ClearTodo />
          </div>
        </div>
      </TodoProvider>
  )
}

export default App;
