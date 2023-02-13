import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../UI/button/Button';
const Natifications = () => {
    const navigate =  useNavigate()

    const GoToMaterials =()=>{
      navigate('/courses/materials')
    }
    return (
        <DetailsContainer>
          <h1>Natifications Page</h1>  

          <Button onClick={GoToMaterials}>Go to Materials page</Button>
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

export default Natifications;