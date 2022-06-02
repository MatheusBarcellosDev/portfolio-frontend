import styled from "styled-components";

export const Container = styled.div`

    max-width: 1320px;
    min-width: 300px;
    margin: 0 auto;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .container-content{
        border: 1px solid #444444;
        display: relative;
        background-color: #282828;
        border-radius: 8px;
        width: 65%;
        margin: 0 auto;

       
    }

    .test {

        display: relative;


    .container-avatar {
        margin-top: -50px;
        margin-left: -100%;
    

    @media(min-width: 768px){
        left: 35px;
    }

    img {
        border-radius: 100%;
    }

    }


    .card-test {


    .card-content {
        text-align:left;
        padding: 1.5rem;

        @media(min-width: 768px){
            width: 100%;
            margin-left: 1rem;
        }

        .card-testimonials{
            font-size: 0.9rem;
            font-style: italic;
            color: #D5D5D5;
        }

        .card-testimonials-name{
            font-size: 1rem;
            font-weight: bold;
            color: #fff;
            padding-top: 1rem;
        }

        .card-testimonials-sociais {
            display: flex;
            justify-content: space-between;
        

            .card-testimonials-sociais-content{
                display: flex;
                gap: 1rem
            }
            

            a {
                text-decoration: none;
                color: #fff;
            }

            a:hover {
                color: #007CED;
            }
        }
    }

    }
    }

    `;