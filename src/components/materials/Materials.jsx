import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../../UI/button/Button";

const Materials = ({ materials }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const showModalHandler = () => {
    searchParams.set("showModal", true);
    setSearchParams(searchParams);
  };

  const closewModalHandler = () => {
    searchParams.delete("showModal");
    setSearchParams(searchParams);
  };

  return (
    <>
      {searchParams.has("showModal") ? (
        <ModalContainer>
          <h1>Kakshi Hatake</h1>

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMT3XrLuL4yn1KwevU9NOILoX3V9cuvylyTw&usqp=CAU"
            alt=""
          />
          <Button onClick={closewModalHandler}>Cancel</Button>
        </ModalContainer>
      ) : null}
      <MaterialsContainer>
        <Button onClick={showModalHandler}>Add new material</Button>

        <StyleUl>
          {materials.map((item) => (
            <li key={item.id}>
              <Link key={item.id} to={`${item.id}/details/submitted`}>
                {item.title}
                <Button>Details</Button>
              </Link>
            </li>
          ))}
        </StyleUl>
      </MaterialsContainer>
    </>
  );
};

const MaterialsContainer = styled.div`
  margin-top: 30px;
  margin: 0 auto;
  width: 600px;
  height: 300px;
  margin-top: 80px;
`;
const ModalContainer = styled.div`
  width: 600px;
  background-color: #844f4f;
  height: 300px;
  margin: 0 auto;
  margin-top: 10rem;
  z-index: 12;
  position: absolute;
  margin-left: 27rem;

  h1 {
    text-align: center;
    color: white;
  }

  img {
    display: flex;
    justify-content: center;
    margin-left: 130px;
    width: 350px;
  }
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
export default Materials;
