import styled from "styled-components";

export const ContainerPhoto = styled.div`

    .main-photo{
        
        margin-top: 60px;

        img {
            width: 260px;
            height: 260px;
            border-radius: 50%;
            object-fit: cover;
            border: 10px solid #353535;
            }


    }

    @media (min-width: 768px) {
        .main-photo{
            img {
                width: 350px;
                height: 350px;
            }

`