import styled from "styled-components";

export const Container = styled.section`

    .title-testimonials{
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

    .tests{
        width: 700px;
        margin: 0 auto;
        height: 300px;
    }

    .btn-testimonials{
        margin: 20px auto;
        display: flex;
        width: 700px;
        justify-content: end;
    }

    .btn-testimonials button{
        background-color: #007ced;
        color: #fff;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        font-size: 1.1rem;
        font-weight: bold;
        letter-spacing: 0.10rem;
        cursor: pointer;
        transition: 0.3s;
    }

    .btn-testimonials button:hover{
        background-color: #fff;
        color: #007ced;
        border: 1px solid #007ced;
    }

    .container-robo {
        margin: 50px;
    }

`;