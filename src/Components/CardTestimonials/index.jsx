import { Container } from "./styled";

import React from "react";

import md5 from 'crypto-js/md5';

const CardTestimonials = ({comentario, name, email}) => {

    const gravatar = md5(email).toString();

    return (
        <Container>

            <div className="test">

            <div className="container-avatar">
                <div>
                    <img src={`https://www.gravatar.com/avatar/${gravatar}?d=robohash`} alt="avatar"/>
                </div>
            </div>


            <div className="card-test">
                <div className="card-content">
                    <div className="card-testimonials">
                        <p>{comentario}</p>
                    </div>
                    <div className="card-testimonials-name">
                        <p>{name}</p>
                    </div>
                </div>
                
            </div>

            </div>
        </Container>
);
};

export default CardTestimonials;
