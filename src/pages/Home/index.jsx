import React from "react";
import Header from "../../Components/Header";
import MainPhoto from "../../Components/MainPhoto";
import TextAboutMe from "../../Components/TextAboutMe";
import HardSkills from "../../Components/HardSkills";

import { Container } from "./styled"
import SoftSkills from "../../Components/SoftSkills";
import Footer from "../../Components/Footer";
import Testimonials from "../../Components/Testimonials";

const Home = () => {
    return (
        <>
            <Header/>
            <Container>
                <MainPhoto/>
                <TextAboutMe/>
                <HardSkills/>
                <SoftSkills/>
                <Testimonials/>
            </Container>
            <Footer/>
        </>
        
    )
}

export default Home;