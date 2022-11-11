import React, {useState} from "react";
import {useTodoDispatch} from "../TodoContext";
import styled from 'styled-components';
import {Button} from 'react-bootstrap';

const StyledSpan = styled.span`
text-decoration: ${props=>props.done? 'line-through' : ''};
: hover {cursor : pointer};
color : ${props=>props.important? 'red' : 'black'};
`;

function TodoItem({id,done,text,important}){
    const dispatch = useTodoDispatch();

    const [value,setValue] = useState(text);

    const [edited, setEdited] = useState(false); // 수정모드 플래그

    const onMark = () =>dispatch({type : 'MARK', id});
    const onRemove = () =>dispatch ({type : 'REMOVE', id});
    const onImportant = () => dispatch({type : 'IMPORTANT',id});

    const onEdit = () =>{
        console.log("onEdit");
        setEdited(!edited);
        isEdit();
    };

    const isEdit = () => dispatch({type : 'EDIT', id, value});

    const onChange = e=> setValue(e.target.value);



    const pressEnterKey = (e) =>{
        if(e.key === 'Enter'){ //엔터키 입력시
            isEdit(value);
            setEdited(false);
        }
    };

    return (
        <div className="todo">
            {
                edited ? (
                    <input type="text"
                           defaultValue={text}
                            onChange={onChange}
                           onKeyDown={pressEnterKey}
                            autoFocus="autofocus"></input>
                ): (<StyledSpan done = {done} important = {important} onClick={onImportant}>
                {text}
            </StyledSpan>)
            }
            <div>
                {edited ? <Button onClick={onEdit}>👌</Button> : <Button onClick={onEdit}>✏</Button> }
                <Button variant="outline-success" onClick={onMark}>체크</Button>{ ' '}
                <Button variant="outline-danger" onClick={onRemove}>X</Button>
            </div>
        </div>
    );
}

export default React.memo(TodoItem);
