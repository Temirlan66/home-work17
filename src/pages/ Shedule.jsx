import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../UI/button/Button';
const  Shedule = () => {

    const navigate =  useNavigate()

    const GoToNotification=()=>{
      navigate('/natifications')
    }
    return (
        <DetailsContainer>
            <h1> Shedule Page</h1>
            <Button onClick={GoToNotification}>Go to Notification page</Button>
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
export default  Shedule;