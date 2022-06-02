import styled from "styled-components";

export const Container = styled.section`

    .title-profession{
        font-size: 1rem;
        color: #AAAAAA;
        margin-top: 30px;
    }

    .title-profession p{ 
        margin: 0;
    }
    
    .title-name h1 {
        font-size: 2rem;
        font-weight: bold;
        
        @media(min-width: 768px){
            font-size: 2.5rem;
        }
    }

    .about p {
        font-size: 0.90rem;
        text-align: left;
        padding: 2rem;
        color: #D5D5D5;
    }

    .container-btns {
        .btns button {

            margin-right: 10px;
            border-radius: 50px;
            padding: 3px 20px;
            font-size: 1rem;
            color: #D5D5D5;
            background-color: #2F2F2F;
            border: none;
            cursor: pointer;

            @media(min-width: 768px){
                padding: 6px 30px;
            }
        }

        .btns {
            .btn-cv {
                border: 2px solid #007ced;
            }

            .btn-cv:hover {
                background-color: #007ced;
            }

            .btn-contact {
                border: 2px solid #D5D5D5;

                a{
                    text-decoration: none;
                    color: #D5D5D5;
                }
            }

            .btn-contact:hover {
                background-color: #D5D5D5;
                color: #2F2F2F;

                a{
                    color: #2F2F2F;
                }
            }
        }

`;