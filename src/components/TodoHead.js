import React from "react";
import "../App.css";
import {useTodoState} from "../TodoContext";

function TodoHead(){

    const todos = useTodoState();
    const undoneTasks = todos.filter(todo => !todo.done);

    const today = new Date();
    const dateString = today.toLocaleDateString('ko',{
        year : 'numeric',
        month : 'long',
        day : 'numeric'
    });
    const dayName = today.toLocaleDateString('ko-KR', {weekday:'long'});

    return (
        <div className="head">
            <h2>{dateString}</h2>
            <div className="day">{dayName}</div>
            <div className="tasks-left">할일 {undoneTasks.length}</div>
        </div>
    );
}
export default TodoHead;