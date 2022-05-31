import { Container } from "./styled";
import CardTestimonials from "../../Components/CardTestimonials";

import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import Modal from 'react-modal';
import FormTestimonials from "../FormTestimonials";

import {AuthContext} from '../../providers/auth';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#282828',
        color: '#fff',
    },
};

const customStyles2 = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'transparent',
        color: '#fff',
    },
};

const Testimonials = () => {

    const { user } = React.useContext(AuthContext);

    user.map(u => {
        console.log(u.user.name); 
})



    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalIsOpen2, setModalIsOpen2] = useState(false);

    const handleModalisOpen = () => {
        setModalIsOpen(true);
    }

    const handleModalClose = () => {
        setModalIsOpen(false);
    }

    const handleModalClose2 = () => {
        setModalIsOpen2(false);
    }

    const handleModalisOpen2 = () => {
        setModalIsOpen2(true);
    }

    return (
        <Container>
            <div className="title-testimonials">
                <h2>Testimonials</h2>
            </div>
            <div className="tests">
                <Carousel
                    emulateTouch={true}
                    infiniteLoop={true}
                    showArrows={false}
                    showStatus={false}
                    showThumbs={false}
                > 
                {user.length > 0 ? user.map(u => (
                    <CardTestimonials
                        name={u.user.name}
                        comentario={u.menssage}
                        email={u.user.email}
                    />
                )) : (
                    <CardTestimonials
                        name="Robô"
                        comentario="Por favor deixe seu comentario!"
                        email="Email"
                    />
                )}
                </Carousel>
            </div>

            <div className="btn-testimonials">
                <button onClick={handleModalisOpen}>
                    Comentar
                </button>
            </div>
            <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={handleModalClose}
                    style={customStyles}
                >
                    <div className="container-form">
                        <FormTestimonials 
                            handleModalClose={handleModalClose}
                            handleModalisOpen2={handleModalisOpen2}
                        />
                    </div>
                    
            </Modal>
            <Modal
                isOpen={modalIsOpen2}
                onRequestClose={handleModalClose2}
                style={customStyles2}
            >
                    <div className="container-robo">
                        <CardTestimonials
                            name="Robô"
                            comentario="Seu comentario esta sendo analizado pelo nosso time de robôs, 
                                        volte mais tarde!"
                            email="Email"
                        />
                    </div>
            </Modal>

        </Container>
    );
};

export default Testimonials;
