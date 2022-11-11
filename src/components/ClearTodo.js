import React, {useState} from "react";
import {Button} from 'react-bootstrap';
import {useTodoDispatch, useTodoNextId} from "../TodoContext";

function ClearTodo() {

    const dispatch = useTodoDispatch();

    const onClick = () => {
        dispatch({
            type: 'CLEAR'
        });
    }

    return(
        <Button style={{margin:'20px'}} onClick={onClick}>Clear Completed</Button>
    )
}

export default ClearTodo;