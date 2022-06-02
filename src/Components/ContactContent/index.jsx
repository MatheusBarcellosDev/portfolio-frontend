import { Container } from "./styled";
import { AiOutlineMail } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';
import { GiSmartphone } from 'react-icons/gi'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const schema = yup.object({
    mensagem: yup.string().required("A mensagem é obrigatória"),
    name: yup.string().required("O nome é obrigatório"),
    email: yup.string().email("Digite um email valido").required("O email é obrigatório"),
    assunto: yup.string().required("O assunto é obrigatório"),
}).required();



const ContactContent = () => {


    const {
        register,
        formState,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    });
    

    return (
        <Container>
            <div className="contact-info">
                <div className="contact-tel icons">
                    <GiSmartphone size={35} color={"007ced"} />
                    <p>(53) 99922-2959</p>
                </div>
                <div className="contact-cit icons">
                    <BiMap size={35} color={"007ced"} />
                    <p>São José SC</p>
                </div>
                <div className="contact-email icons">
                    <AiOutlineMail size={35} color={"007ced"} />
                    <p>matheusbarcellosdev@gmail.com</p>
                </div>
            </div>
            <form className="contact-form" 
                action="https://formsubmit.co/matheusbarcellosdev@gmail.com" 
                method="POST"
                >
                <input type="hidden" name="_captcha" value="false"></input>
                <input type="hidden" name="_next" value="https://portfoliofrontendv2.herokuapp.com/thanks"></input>
                <div>
                    <h4>Como posso ajudar voce?</h4>
                    <div className="form-group">
                        <input placeholder="Nome" {...register("name", { required: true })} />
                        {errors.name &&
                            <span className="error-name">{errors.name?.message}</span>
                        }
                    </div>
                    <div className="form-group">
                        <input placeholder="Email" {...register("email", { required: true })} />
                        {errors.email &&
                            <span className="error-email">{errors.email?.message}</span>
                        }
                    </div>
                    <div className="form-group">
                        <input placeholder="Assunto" {...register("assunto", { required: true })} />
                        {errors.email &&
                            <span className="error-assunto">{errors.assunto?.message}</span>
                        }
                    </div>
                </div>
                <div className="container-message">
                    <div className="form-group message">
                        <textarea
                            placeholder="Mensagem"
                            style={{ resize: "none" }}
                            {...register("mensagem", { required: true })} />
                        {errors.mensagem &&
                            <span className="error-mensagem">{errors.mensagem?.message}</span>
                        }
                    </div>

                    <button
                        type="submit"
                        disabled={!formState.isValid}
                    >
                        Enviar
                    </button>
                </div>
            </form>
        </Container>
    )
}

export default ContactContent;