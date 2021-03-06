import styled from "styled-components";

export const Container = styled.div`

    padding: 50px;
    display: inline-block;
    width: 375px;

    @media(min-width: 768px){
        width: 550px;
    }

    .test {

        display: relative;


    .container-avatar {
        width: 80px;
        height: 80px;
        border-radius: 100%;
        position: absolute;
        top: 20px;
        left: 15px;
        background-color: white;

        @media(min-width: 768px){
            left: 35px;
        }

        img {
            border-radius: 100%;
        }
        
    }


    .card-test {
        border: 1px solid #444444;
        background-color: #282828;
        padding: 30px 30px 20px 20px;
        border-radius: 8px;


        .card-content {
            width: 250px;
            height: 160px;
            text-align:left;
            padding-top: 1rem;        

            p{
                margin: 0;
            }
            

            @media(min-width: 768px){
                width: 400px;
                margin-left: 1rem;

                p{
                    margin-bottom: 1rem;
                }
            }

            .card-testimonials{
                font-size: 0.8rem;
                font-style: italic;
                color: #D5D5D5;
           }

            .card-testimonials-name{
                font-size: 1rem;
                font-weight: bold;
                color: #fff;
            }
        }

    }

}

`