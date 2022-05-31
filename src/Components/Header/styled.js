import styled from "styled-components";

export const Nav = styled.header`
    background: #222222;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px;
    z-index: 10;
    color: #fff;
    font-size: 1.2rem;

    h2 {
        font-weight: bold;
    }

    .main-name{
        white-space: nowrap;
    }

    .first-letter{
        border-color: #007ced;
        background-color: #007ced;
        width: 32px;
        height: 32px;
        line-height: 32px;
        font-size: 18px;
        font-weight: bold;
        margin-top: 0;
        float: left;
        border-radius: 100%;
    }

    .second-name{
        font-weight: 400;
        margin-left: 5px;
        color: rgba(255,255,255,0.7);
    }

    .container-name{
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .hamburger {
        font-size: 1.5rem;
    }

    @media (min-width: 768px) {

        font-size: 1.3rem;

        .hamburger {
            display: none;
        }

    }
`;



