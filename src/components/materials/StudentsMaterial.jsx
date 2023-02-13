import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../UI/button/Button';
const StudentsMaterial = ({students}) => {
    return (
        <MaterialsContainer>

        <StyleUl>
            {students.map((item) =>(
                <li key={item.id}>
                    <Link to={`${item.id}/details`}>
                    {item.title}
                        <Button>Details</Button>
                    </Link>
                </li>
            ))}
        </StyleUl>
             {/* <StyleUl>
          {s.map((item) => (
            <li key={item.id}>
              <Link key={item.id} to={`${item.id}/details/submitted`}>
                {item.title}
                <Button>Details</Button>
              </Link>
            </li>
          ))} */}
        </MaterialsContainer>
    )
};

const MaterialsContainer = styled.div`
  margin-top: 30px;
  margin: 0 auto;
  width: 600px;
  height: 300px;
  margin-top: 80px;
`;
const StyleUl = styled.ul`
  margin-top: 30px;
  font-size: 20px;
  li {
    padding: 20px 10px;
    background-color: white;
    width: 600px;
    height: 90px;
    margin-bottom: 50px;
    list-style: none;

    a {
      text-decoration: none;
      color: black;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

export default StudentsMaterial;