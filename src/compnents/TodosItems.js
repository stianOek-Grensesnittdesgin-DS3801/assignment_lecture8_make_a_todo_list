import React from 'react'
import styled from 'styled-components';

const TodosItems = ({ listItems, removeItems }) => {
    return (
        <div>
            <Ul>
                <p style={{textAlign: "start"}}>Todo's to complete</p>
                <Line></Line>
                {listItems.map( item => {
                    return (
                        <ItemWrapper>
                            <p>{item.id}</p>
                            <Li key={item.id}>{item.list}</Li>
                            <span  onClick={() => removeItems(item.id)}>close</span>
                        </ItemWrapper>
                    )
                })}
                
            </Ul>
        </div>
    )
}

export default TodosItems

const Line = styled.div`
    width: 100%;
    height: 2px;
    background: #4B7554;
    margin-bottom: 10px;
    margin-top: 10px;
`;

const ItemWrapper = styled.div`
    position: relative;
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #fff;
    padding: 40px 60px;
    border-radius: 10px;
    background-color: #fff;
    color: #282c34;
    p {
        position: absolute;
        top: -20px;
        left: -20px;
        border: 1px solid #fff;
        width: 40px;
        height: 40px;
        font-size: 25px;
        border-radius: 50%;
        background-color: #4B7554;
        color: #fff;
    }
    span {
        font-size: 20px;
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
    border-radius: 10px;
    padding: 10px 40px;
    p {
        margin: 0;
    }
`;

const Li = styled.li`
    list-style-type: none;
    text-align: start;
    font-size: 20px;
   
`;