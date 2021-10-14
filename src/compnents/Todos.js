import React, { useState } from 'react';
import styled from 'styled-components';
import TodosItems from './TodosItems';

const Todos = () => {

    let todo = ""

    // a state that holds a default empty array
    const [ listTodo, setListTodo ] = useState([])

     
    // a function that replace state with previous state and adds the new "list: todo"
    function addTodo() {
        setListTodo(prev => {
            return [...prev, {list: todo}]
        })
        console.log(todo)
        document.querySelector("#input").value = "";
    }


    const removeTodo = (e) => {
        const list = e.target.getAttribute("list")
        setListTodo(listTodo.filter( item => item.list !== list))
      
    }

   
    // a function with an event that takes whatever i write in the input field and put it into "todo" variable
    function handleChange(e) {
        todo = e.target.value
        console.log(todo)
    }
    return (
        <div>
            <Input placeholder="Write down todo's" id="input" onChange={handleChange} type="text" />
            <Button onClick={addTodo}>Add a todo</Button>
            <TodosItems listItems={listTodo} removeItems={removeTodo} />
            
        </div>
    )
}

export default Todos

const Input = styled.input`
    outline: none;
    padding: 15px 30px;
    border-radius: 10px;
    background: transparent;
    border: 1px solid #fff;
    color: #fff;
    margin-right: 10px;
    &:active {
        background: transparent;
    }
`;

const Button = styled.button`
    outline: none;
    padding: 15px 20px;
    border-radius: 10px;
    background: transparent;
    border: 1px solid #fff;
    color: #fff;
    cursor: pointer;
    margin-left: 10px;
`;


