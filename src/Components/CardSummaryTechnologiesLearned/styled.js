import styled from "styled-components";

export const ContainerDate = styled.div`
    position: absolute;
    margin-top: 20px;
    display: flex;

    .date {
        span {
            padding: 0.2rem 0.5rem;
            border: 2px solid #007CED;
            border-radius: 40px;
            background-color: #222222;
            font-size: 0.5rem;
            margin-right: 0.8rem;

            @media(min-width: 768px){
                font-size: 0.8rem;
            }
        }
    }

    .school {
        span {
            color: #AAAAAA;
            font-size: 0.9rem;
        }
    }
`;

export const ContainerContent = styled.div`


    border-left: 1px solid #353535;
    border-bottom: 1px solid #353535;
    text-align: left;
    margin-left: 20px;
    font-size: 0.8rem;
    
    @media(min-width: 700px) {
        height: 330px;
        font-size: 0.7rem;
    }

    @media(min-width: 1000px) {
        height: 330px;
        font-size: 0.9rem;
    }


    .container-content {
        padding-top: 3.5rem;
        padding-left: 1.5rem;

        .technology{
            span {
                color: #007CED;
                font-size: 0.9rem;
                font-weight: bold;
            }
        }

        .resume{ 
            margin-top: 0.6rem;
        }

    }
`;