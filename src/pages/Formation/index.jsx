import React from "react";
import Header from "../../Components/Header";
import { Container } from "./styled";
import FormationContent from "../../Components/FormationContent";
import SubHeader from "../../Components/SubHeaderFormation";

const divStyles = {
}

const Formation = () => {
  return (
    <div style={divStyles}>
      <Header />
      <SubHeader />
      <Container>
        <FormationContent />
      </Container>
    </div>
  );
};

export default Formation;
