import { Container } from "./styled";

const MyLocation = () => {
    return (
        <Container>
            <iframe 
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14143.765811286616!2d-48.61586995000001!3d-27.5953447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952749df12f0e63b%3A0xf0228a5bbb579897!2zS29icmFzb2wsIFPDo28gSm9zw6kgLSBTQw!5e0!3m2!1spt-BR!2sbr!4v1654090307755!5m2!1spt-BR!2sbr" 
                >
            </iframe>
        </Container>
    )
}

export default MyLocation;