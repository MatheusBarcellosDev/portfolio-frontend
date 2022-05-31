import styled from "styled-components";

export const Container = styled.form`

    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 1.5rem;

    @media(min-width: 768px){
        width: 100%;
        padding: 4rem 6rem;
    }

    h2{
            font-size: 1.1rem;
            font-weight: bold;
            letter-spacing: 0.10rem;
            position: absolute;
            top: 15px;
            left: 15px;
            display: inline-block;

            @media(min-width: 768px){
                font-size: 1.4rem;
                top: 20px;
                left: 20px;
            }
        }

        h2:before{
            display: block;
            position: absolute;
            content: '';
            width: 100%;
            background-color: #353535;
            height: 2px;
            bottom: 0;
        }

        h2:after{
            content: '';
            position: absolute;
            display: block;
            width: 30px;
            height: 2px;
            background-color: #007ced;
            bottom: 0;
        }


        label{
            color: #AAAAAA;
            margin-top: 0.5rem;
        }

        textarea{
            height: 50px;
            margin-bottom: 1rem;

        }

        input, textarea{
            padding: 0.3rem;
            border: 1px solid #ccc;
            border-radius: 5px;
            border: none;
            margin-bottom: 1rem;
            width: 100%;
        }

        input:focus, textarea:focus{
            outline: none;
        }

    span {
        color: red;
        position: absolute;
        font-size: 0.8rem;

        @media(min-width: 768px){
            font-size: 1rem;
        }
    }

    .form-group {
        display: flex;
    }

    .error-comentario {
        margin-top: 50px;
    }

    .error-name {
        margin-top: 35px;
    }

    .error-email {
        margin-top: 35px;
    }

    button {
        background-color: #007ced;
        color: #fff;
        border: none;
        padding: 0.4rem 0.9rem;
        border-radius: 5px;
        font-size: 0.7rem;
        font-weight: bold;
        letter-spacing: 0.10rem;
        cursor: pointer;
        transition: 0.3s;

        position: absolute;
        bottom: 15px;
        right: 15px;

        @media(min-width: 768px){
            bottom: 20px;
            right: 20px;
            font-size: 1rem;
        }
    }

    button:hover {
        background-color: #fff;
        color: #007ced;
        border: 1px solid #007ced;
    }

    button:disabled {
        background-color: #ccc;
        color: #fff;
        border: 1px solid #ccc;
        cursor: not-allowed;
    }

`;