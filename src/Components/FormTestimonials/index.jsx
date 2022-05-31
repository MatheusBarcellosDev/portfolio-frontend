import { useForm } from "react-hook-form";

import { Container } from "./styled";

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import React from "react";


import api from "../../api/Api";

import { AuthContext } from '../../providers/auth';



const schema = yup.object({
    comentario: yup.string().required("O comentario é obrigatorio"),
    name: yup.string().required("O nome é obrigatorio"),
    email: yup.string().email("Digite um email valido").required("O email é obrigatorio"),
}).required();

const FormTestimonials = ({ handleModalClose, handleModalisOpen2 }) => {

    const { tokenApi } = React.useContext(AuthContext);

    console.log(tokenApi);

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

    const createTestimonial = async (token, data) => {
        if (token) {
            await api.post('https://portfoliobackendv2.herokuapp.com/', {
                comentario: data.comentario,
                name: data.name,
                email: data.email,
            }, {
                headers: {
                    authorization: `${token}`,
                }
            }
            )
        }
    }

    const onSubmit = (data) => {
        handleModalOpen();
        createTestimonial(tokenApi, data);
    };


        return (
            <Container onSubmit={handleSubmit(onSubmit)}>
                <h2>Deixe seu comentario</h2>
                <label>
                    Comentario
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
                /* onClick={handleModalOpen} */
                >
                    Enviar
                </button>
            </Container>
        );
    };

    export default FormTestimonials;
