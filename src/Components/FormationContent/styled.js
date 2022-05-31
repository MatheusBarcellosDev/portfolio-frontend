import styled from "styled-components";

export const Container = styled.section`



    .title-section {

        margin-top: 2rem;
        text-align: left;

        h3{
            font-size: 1.4rem;
            font-weight: bold;
            letter-spacing: 0.10rem;
            position: relative;
            display: inline-block;
            padding-bottom: 0.40rem;
        }

        h3:before{
            display: block;
            position: absolute;
            content: '';
            width: 100%;
            background-color: #353535;
            height: 2px;
            bottom: 0;
        }

        h3:after{
            content: '';
            position: absolute;
            display: block;
            width: 30px;
            height: 2px;
            background-color: #007ced;
            bottom: 0;
        }
    }

    .title-module{

        display: inline-block;
        display: flex;
        align-items: center;
        gap: 0.5rem;

        .arrow{
            margin-bottom: 0.4rem;
        }
        

        h4 {
            font-size: 1rem;
            letter-spacing: 0.10rem;
            padding: 1rem 0;
            color: #AAAAAA;
        }

        h4:hover {
            color: #007CED;
            cursor: pointer;

        }
    }

    .container-summaryTechnologies {
        
        max-width: 1200px;
        /* margin: 0 auto; */
        display: grid;
        padding: 0 2rem;
        
        @media(min-width: 700px) {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    .certificate {
        margin-bottom: 2.5rem;
    }

    .container-carousel {
        max-width: 600px;
        margin: 0 auto;
    }
`;