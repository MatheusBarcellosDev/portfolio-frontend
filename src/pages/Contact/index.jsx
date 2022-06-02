import ContactContent from "../../Components/ContactContent";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import MyLocation from "../../Components/MyLocation";
import SubHeader from "../../Components/SubHeaderFormation";
import { Container } from "./styled";

const Contact = () => {
    return ( 
        <div>
            <Header/>
            <SubHeader title="Contato" />
            <Container>
                <MyLocation/>
                <ContactContent />
            </Container>
            <Footer/>
        </div>
        );
}

export default Contact;