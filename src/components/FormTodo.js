import React, {useState} from "react";
import {Button, Form} from 'react-bootstrap';
import {useTodoDispatch, useTodoNextId} from "../TodoContext";

function FormTodo() {
    const [value,setValue] = useState('');

    const dispatch = useTodoDispatch();
    const nextId = useTodoNextId();

    const onChange = e=> setValue(e.target.value);
    const onSubmit = e => {
        e.preventDefault();
        if(!value) return;
        dispatch({
            type : 'ADD',
            todo : {
                id: nextId.current,
                text : value,
                done : false
            }
        });
        setValue('');
        nextId.current += 1;
    }

    return (
        <Form onSubmit = {onSubmit}>
            <Form.Group>
                <Form.Label><b>Add Todo</b></Form.Label>
                <Form.Control type="text" className="input" value = {value}
                              onChange={onChange} placeholder="Add new todo" />

            </Form.Group>
            <Button variant="primary mb-3" type="submit">
                Submit
            </Button>
        </Form>
    );
}
export default FormTodo;