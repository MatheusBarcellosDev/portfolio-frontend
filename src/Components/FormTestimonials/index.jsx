import { useForm } from "react-hook-form";

import { Container } from "./styled";

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import React from "react";


import api from "../../api/Api";


const schema = yup.object({
    comentario: yup.string().required("O comentario é obrigatorio"),
    name: yup.string().required("O nome é obrigatorio"),
    email: yup.string().email("Digite um email valido").required("O email é obrigatorio"),
}).required();

const FormTestimonials = ({ handleModalClose, handleModalisOpen2 }) => {

    const handleModalOpen = () => {
        handleModalClose(true);
        handleModalisOpen2(true);
    }


    const {
        register,
        handleSubmit,
        formState,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    const createTestimonial = async (data) => {
            await api.post(process.env.REACT_APP_URL_CREATE_TESTIMONIAL, {
                message: data.comentario,
                name: data.name,
                email: data.email,
            },
            );
    }

    const onSubmit = (data) => {
        handleModalOpen();
        createTestimonial(data);
    };


        return (
            <Container onSubmit={handleSubmit(onSubmit)}>
                <h2>Deixe seu comentário</h2>
                <label>
                    Comentário
                    <div className="form-group">
                        <textarea
                            style={{ resize: "none" }}
                            {...register("comentario", { required: true })} />
                        {errors.comentario &&
                            <span className="error-comentario">{errors.comentario?.message}</span>
                        }
                    </div>
                </label>
                <label>
                    Nome
                    <div className="form-group">
                        <input {...register("name", { required: true })} />
                        {errors.name &&
                            <span className="error-name">{errors.name?.message}</span>
                        }
                    </div>
                </label>
                <label>
                    Email
                    <div className="form-group">
                        <input {...register("email", { required: true })} />
                        {errors.email &&
                            <span className="error-email">{errors.email?.message}</span>
                        }
                    </div>
                </label>
                <button
                    type="submit"
                    disabled={!formState.isValid}
                >
                    Enviar
                </button>
            </Container>
        );
    };

    export default FormTestimonials;
