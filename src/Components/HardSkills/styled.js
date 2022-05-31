import styled from "styled-components";

export const Container = styled.section`

    margin-top: 70px;

    .title-hardSkills{
        text-align: left;
        padding: 0 2rem 1.1rem;
        
        h2{
            font-size: 1.4rem;
            font-weight: bold;
            letter-spacing: 0.10rem;
            position: relative;
            display: inline-block;
            padding-bottom: 0.40rem;
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



    }

    .container-hardSkills{
        max-width: 1200px;
        /* margin: 0 auto; */
        display: grid;
        padding: 0 2rem;

        @media(min-width: 600px) {
            grid-template-columns: repeat(2, 1fr);
        }
    }

`;