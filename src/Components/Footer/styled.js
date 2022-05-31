import styled from "styled-components";

export const Container = styled.footer`
    padding: 1rem;
    margin-top: 1.5rem;
    border-top: 2px solid #2F2F2F;
    background-color: #252525;

    width: 100%;
    

    .container-social-midia{
        display: flex;
        justify-content: center;
        gap: 1.7rem;
        
        a {
            text-decoration: none;
            color: #AAAAAA;
            font-size: 0.9rem;
        }

        a:hover {
            color: #F5F5F5;
        }
        
    }
    
    .container-text{

        margin-top: 0.5rem;

        p{
            margin: 0;
            font-size: 0.8rem;
            color: #D5D5D5;
        }
    }
`;