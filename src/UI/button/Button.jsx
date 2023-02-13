import React from 'react';
import styled from 'styled-components';

const Button = ({onClick, children}) => {
    return (
        <MyBtn onClick={onClick}>
            {children}
        </MyBtn>
    );
};


const MyBtn = styled.button`
    width: 150px;
    height: 30px;
    border: none;
    border-radius:20px;
    background-color: #4b8d4b;
    color: white;
    
    `
export default Button;