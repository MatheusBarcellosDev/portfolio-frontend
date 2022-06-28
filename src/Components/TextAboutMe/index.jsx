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
                    <iframe name="iframe_download" class="hidden"></iframe>
                    <a className="btn-cv btn" target="iframe_download" href='https://drive.google.com/u/0/uc?id=1m6fcLm4QovGO041HkwgOMWSTM5464Z1H&export=download'>
                        Download CV
                    </a>
                    <button className="btn-contact btn">
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
