import React,{useReducer, createContext,useContext,useRef} from "react";

const initialTodos = [
    {
        id : 1,
        text : '프로젝트 생성하기',
        done : true,
        important : false
    },
    {
        id :2,
        text : '컴포넌트 스타일링하기',
        done : true,
        important : false
    },
    {
        id: 3,
        text : 'Context 만들기',
        done : false,
        important : false
    },
    {
        id: 4,
        text : '기능 구현하기',
        done : false,
        important : false
    }
];

function todoReducer(state, action){
    let newState=[];
    switch (action.type){
        case 'ADD' :
            return newState = [...state, action.todo];
        case 'IMPORTANT' :
            return state.map(todo=>
            todo.id === action.id ? {...todo, important:!todo.important} : todo);
        case 'MARK' :
            return state.map(todo =>
            todo.id === action.id? {...todo, done:!todo.done}:todo );
        case 'REMOVE':
            return state.filter(todo => todo.id!==action.id);
        case 'CLEAR' :
            return state.filter(todo => todo.done==false);
        case "EDIT":
            return state.map(todo =>
                todo.id === action.id? {...todo, text:action.value} : todo );
        default:
            throw new Error('Unhandled action type : ${action.type}');
    }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({children}){
    const [state, dispatch] = useReducer(todoReducer,initialTodos);
    const nextId = useRef(5);
    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                    {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
}

export function useTodoState(){
    const context = useContext(TodoStateContext);
    if(!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}

export function useTodoDispatch(){
    const context = useContext(TodoDispatchContext);
    if(!context){
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}
export function useTodoNextId(){
    const context = useContext(TodoNextIdContext);
    if(!context){
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}