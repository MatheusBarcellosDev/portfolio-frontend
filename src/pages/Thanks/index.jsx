import { Container } from "./styled";

import md5 from "crypto-js/md5";


import { TbArrowBackUp } from "react-icons/tb";

const Thanks = () => {
    const gravatar = md5("matheusbarcellos61@gmail.com").toString();

    return (
        <Container>
            <div className="test">
                <div className="container-content">
                    <div className="container-avatar">
                    <img
                        src={`https://www.gravatar.com/avatar/${gravatar}?d=robohash`}
                        alt="avatar"
                    />
                    </div>
                    <div className="card-test">
                        <div className="card-content">
                            <div className="card-testimonials">
                                <p>Olá! Agradeço o seu contato. Essa é uma mensagem automática. Retornarei o mais breve possível. 
                                    Você também pode entrar em contato pelas minhas redes socias!</p>
                            </div>
                            <div className="card-testimonials-sociais">
                                <div className="card-testimonials-sociais-content">
                                <a href="https://www.linkedin.com/in/matheus-barcellos-de-viana-a9a8a01a6/">
                                    <p>Linkedin</p>
                                </a>
                                <a href="https://www.instagram.com/matheusbarcellosdev/">
                                    <p>Instagram</p>
                                </a>
                                </div>
                                <div>
                                    <a href="/">
                                    <TbArrowBackUp size={40} />
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Thanks;
