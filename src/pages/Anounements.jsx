import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled  from 'styled-components';
import Button from '../UI/button/Button';
const Anounements = () => {
  const navigate =  useNavigate()

  const GoToStudents =()=>{
    navigate('/courses/students')
  }
    return (
        <DetailsContainer>
            <h1>Anounements Page</h1>

            <Button onClick={GoToStudents}>Go to Students page</Button>
        </DetailsContainer>
    );
};

const DetailsContainer = styled.div`
  width: 1130px;
  height: 500px;
  background-color: white;
  margin-left: 300px;
  margin-top: 50px;
  position: absolute;

  h1 {
    padding: 20px 20px;
  }
`;

export default Anounements;