import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router";
import styled from "styled-components";
import NavBar from "../../pages/NavBar";

const Details = ({ materials }) => {
  const { id } = useParams();

  const [material, setMaterials] = useState({});

  useEffect(() => {
    const itemProduct = materials.find((item) => item.id === +id);
    setMaterials(itemProduct);
  }, [materials, id]);
  return (
    <>
      <DetailsContainer>
        <h1> Material details page: </h1>
        <h1>Materials page {id} </h1>
        <NavBar />
        <Outlet/>
      </DetailsContainer>
      
    </>
  );
};

const DetailsContainer = styled.div`
  width: 1130px;
  height: 500px;
  background-color: white;
  margin-left: 300px;
  margin-top: 50px;

  h1{
    padding: 20px 20px;

  }

`;
export default Details;
