import styled from "styled-components";

export const Container = styled.div`

    margin-top: 1rem;
    background-color: #252525;
    border-bottom: 1px solid #2F2F2F;
    border-top: 1px solid #2F2F2F;
    
    .title-page {
        padding: 2rem 0;
        margin-left: 1rem;
        text-align: left;
        
        h1 {
            letter-spacing: 0.10rem;
            font-size: 2.0rem;
        }

        @media(min-width: 1600px){
            margin-left: 150px;
        }
    }
`;