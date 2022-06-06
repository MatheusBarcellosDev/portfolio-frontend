import { Link } from "react-router-dom";
import {Container} from "./styled";


const TextAboutMe = () => {
    return (
        <Container>
            <div className="title-profession">
                <p>Desenvolvedor Full-Stack</p>
            </div>

            <div className="title-name">
                <h1>Matheus Barcellos</h1>
            </div>

            <div className="about">
                <p>
                Sou estudante de programação, tentando obter o máximo de conhecimento na área, acredito que uma base sólida me ajudara muito lá na 
                frente então procuro não pular etapas em relação aos estudos respeitando sempre o momento que estou.<br/><br/>

                Ainda não tenho experiência profissional nesta área, mas sou determinado e o mais importante amo o que estudo e cada dia mais me surpreendo 
                com o rumo da tecnologia, espero conseguir entrar no mercado de trabalho para poder me desenvolver como programador.
                </p>
            </div>
            <div className="container-btns">
                <div className="btns">
                    <button className="btn-cv">
                        Download CV
                    </button>
                    <button className="btn-contact">
                        <Link to="/contact">
                            Contact
                        </Link>
                    </button>
                </div>
            </div>
        </Container>
    )
}

export default TextAboutMe;
