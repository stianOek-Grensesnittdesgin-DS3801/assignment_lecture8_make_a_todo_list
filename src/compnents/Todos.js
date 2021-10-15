import React, { useState } from 'react';
import styled from 'styled-components';
import TodosItems from './TodosItems';

const Todos = () => {

    let todo = ""

    // a state that holds a default empty array
    const [ listTodo, setListTodo ] = useState([])
    const [ count, setCount ] = useState(0);

    
    // a function that replace state with previous state and adds the new "list: todo"
    function addTodo() {
        setListTodo(prev => {
            return [...prev, { id: count, list: todo }]
        })
        setCount( prev => {
            return prev + 1;
        })
        console.log(count)
        document.querySelector("#input").value = "";
    }

    // remove items by checking wheater or not the component re-renders to display only the remaining items
    const removeTodo = (id) => {
        const newList = listTodo.filter( (item) => item.id !== id);
        setListTodo(newList) 
    }
    
   
    // a function with an event that takes whatever i write in the input field and put it into "todo" variable
    function handleChange(e) {
        todo = e.target.value
        console.log(todo)
    }

    let input = document.getElementById("input");
    input.addEventListener("keydown", function(e) {
        if(e.keyCode === 13) {
            e.preventDefault()
        }
    })

    
    return (
        <div style={{width: "100%"}}>
            <Input placeholder="Write down todo's to complete" id="input" onChange={handleChange} type="text" />
            <Button onClick={addTodo}>Add a todo</Button>
            <TodosItems count={count} listItems={listTodo} removeItems={removeTodo} />
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


