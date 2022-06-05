import styled from "styled-components";

export const Container = styled.div`

    display: block;
    margin: 0 auto;
    padding: 1rem 0;
    width: 300px;
    @media(min-width: 768px){
        width: 400px;
        margin-left: 1.5rem;
        display: inline-block;
        transition: all 0.3s ease-in-out;
    }

    a{
        text-decoration: none;
    }

    :hover {
        transform: scale(1.05);
    }

    .card-projects-header{

        margin: 0 auto;

        @media(min-width: 768px){
            max-width: 400px;
        }
        
        h3 {
            font-size: 1rem;
            margin: 0;
            text-align: left;
            color: #D2D2D2;
        }
    }

    .card-projects-content{
        display: inline-block;
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
        background-color: #292929;
        max-width: 300px;
        border-radius: 8px;

        .card-projects-description{
            height: 100px;
            width: 80%;
            margin: 0 auto;
            padding: 1rem 0;
        }

        @media(min-width: 768px){
            max-width: 400px;
        }


        img{
            border-radius: 8px 8px 0 0;
            width: 100%;
            
            @media(min-width: 768px){
                height: 200px;
            }
        }

        p{
            font-size: 0.8rem;
            font-style: italic;
            color: #999999;
            word-wrap: break-word;
            text-align: left;

            @media(min-width: 768px){
                font-size: 0.9rem;
            }
            
        }

        span{
            font-size: 0.9rem;
        }
    }


`;

