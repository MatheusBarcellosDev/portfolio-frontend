import { Container } from "./styled";


const CardSkills = ({icone, title, content}) => {
    return (
        <Container>
            <div className="container-content">
                <div className="container-icon">
                    <span>
                       {icone}             
                    </span>
                </div>
                <div className="container-text">
                    <h4>{title}</h4>
                    <p>{content}</p>
                </div>
            </div>
        </Container>
    )
}

export default CardSkills;