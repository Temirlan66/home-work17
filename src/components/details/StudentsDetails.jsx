import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const StudentsDetails = ({ students }) => {
  const { id } = useParams();

  const [MaterialsStudents, setMaterialsStudents] = useState({});

  useEffect(() => {
    const itemProduct = students.find((item) => item.id === +id);
    setMaterialsStudents(itemProduct);
  }, [students, id]);

  return (
    <>
      <DetailsContainer>
        <h1> Sdudents details page: </h1>
        <h1>Students page {id} </h1>
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

  h1 {
    padding: 20px 20px;
  }
`;
export default StudentsDetails;
