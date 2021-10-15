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