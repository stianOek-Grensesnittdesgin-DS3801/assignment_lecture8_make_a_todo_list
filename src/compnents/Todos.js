import React, { useState } from 'react';
import styled from 'styled-components';

const Todos = () => {

    let todo = ""

    const [ listTodo, setListTodo ] = useState([])

    

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

   

    function handleChange(e) {
        todo = e.target.value
        console.log(todo)
    }
    return (
        <div>
            <Input placeholder="Write down todo's" id="input" onChange={handleChange} type="text" />
            <Button onClick={addTodo}>Add a todo</Button>

            <Ul>
                <p style={{textAlign: "start"}}>Todo's to complete</p>
                <Line></Line>
                {listTodo.map( (item, index) => {
                    return (
                        <ItemWrapper>
                            <Li key={index}>{item.list}</Li>
                            <span list={item.list} onClick={removeTodo}>close</span>
                        </ItemWrapper>
                    )
                })}
                
            </Ul>
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

const Line = styled.div`
    width: 100%;
    height: 1px;
    background: #fff;
    margin-bottom: 10px;
`;

const ItemWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    span {
        font-size: 14px;
        cursor: pointer;
        transition: 0.3s ease;
        :hover {
            transform: scale(1.1);
            color: #ececec;
            transition: 0.3s ease;
        }
    }
`;

const Ul = styled.ul`
    border: 1px solid #fff;
    border-radius: 10px;
    padding: 10px 40px;
    p {
        margin: 0;
    }
`;

const Li = styled.li`
    list-style-type: none;
    text-align: start;
    font-size: 16px;
`;
