import { Container } from './styled';


const CardProjects = ({title, gif, description, url, status}) => {

    return (
        <Container>
            <a href={url} target="_blanc">
            <div className="card-projects-header">
                <h3>{title}</h3>
            </div>
            <div className="card-projects-content">
                <div className="card-projects-content-gif">
                    <img src={gif} alt="this slowpoke moves" />
                </div>
            <div className="card-projects-description">
                <p>{description}</p>
            </div>
            <span
                    style={status === 'Finalizado' ? {color: '#00ff00'} : {color: '#ff0000'}}
                >{status}</span>
            </div>
            
            </a>
        </Container>
    )
}

export default CardProjects;