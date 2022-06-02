import React from "react";
import Header from "../../Components/Header";
import { Container } from "./styled";
import FormationContent from "../../Components/FormationContent";
import SubHeader from "../../Components/SubHeaderFormation";
import Footer from "../../Components/Footer";


const Formation = () => {
  return (
    <div>
      <Header />
      <SubHeader 
      title="Formações"
      />
      <Container>
        <FormationContent />
      </Container>
      <Footer/>
    </div>
  );
};

export default Formation;
