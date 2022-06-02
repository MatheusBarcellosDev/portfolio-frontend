import { Container } from "./styled"

const SubHeader = ({title}) => {
    return (
        <Container>
            <div className="title-page">
                <h1>{title}</h1>
            </div>
        </Container>
    )
}

export default SubHeader;