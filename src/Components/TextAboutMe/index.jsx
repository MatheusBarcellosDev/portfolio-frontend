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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque euismod, nisi eu aliquam consectetur,
                    nisl nunc consequat nisi, euismod aliquam nisl nunc
                    vitae nisl.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque euismod, nisi eu aliquam consectetur,
                    nisl nunc consequat nisi, euismod aliquam nisl nunc
                    vitae nisl.

                </p>
            </div>
            <div className="container-btns">
                <div className="btns">
                    <button className="btn-cv">
                        Download CV
                    </button>
                    <button className="btn-contact">
                        Contact
                    </button>
                </div>
            </div>
        </Container>
    )
}

export default TextAboutMe;
