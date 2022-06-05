import { Container } from "./styled";
import Header from "../../Components/Header";
import SubHeader from "../../Components/SubHeaderFormation";
import ProjectsContent from "../../Components/ProjectsContent";


const Projetos = () => {
    return (
        <div>
        <Header/>
            <SubHeader
                title="Projetos"
            />

        <Container>
            <ProjectsContent />
        </Container>
        </div>
    )
}

export default Projetos;