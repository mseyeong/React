import React from "react";
import {Card} from "react-bootstrap";
import {useTodoState} from "../TodoContext";
import TodoItem from "./TodoItem";
import 'bootstrap/dist/css/bootstrap.min.css';

function Todo(){
    const todos = useTodoState();

    return(
        <div>
            {todos.map(todo =>(
                <Card key={todo.id}>
                    <Card.Body>
                        <TodoItem className="todo"
                                  id={todo.id}
                                  text={todo.text}
                                  done={todo.done}
                                  important={todo.important}
                                  />
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}
export default Todo;