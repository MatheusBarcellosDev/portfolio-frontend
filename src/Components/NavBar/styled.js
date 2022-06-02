import styled from "styled-components";

export const Nav = styled.nav`
    width: 200px;
    min-height: 500px;
    background-color: #2F2F2F;
    position: fixed;
    height: 60%;
    border-radius: 20px 0 0 20px;
    top: 50px;
    padding: 0 30px;
    transition: 0.6s;
    text-align: left;
    right: ${props => (props.show ? 0 : "-100%")};
    z-index: 1;

    @media(min-width: 768px){
        min-height: 0;
    }


    .iconReact {
        font-size: 3rem;
        display: flex;
        justify-content: center;
    }

    @media{
        .iconReact{
            animation: slideIn infinite 20s linear;
        }
    }

    @keyframes slideIn {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    
    &.open {
        right: 0;
    }

    ul {
        padding: 0;
    }

    ul li {
        list-style-type: none;
        margin: 45px 0;
    }

    ul li a {
        color: #AAAAAA;
        text-decoration: none;
        font-size: 1.1rem;
        font-weight: 400;
        display: block;
        cursor: pointer;
        padding: 10px 15px;
        border-radius: 6px;
    }

    ul li a:hover,
    ul li a.active {
        background: ;
        color: #F5F5F5;
        /* border-bottom: 2px solid #2A54E9; */
    }

    @media (min-width: 768px) {
      width: 500px;
      background-color: #222222;
      position: relative;
      height: 80px;
      left: 0;
      top: 0;
      padding: 0;
      transition: 0s;

        ul{
            display: flex;
            align-items: center;
            width: 100%;
            height: 80px;
            justify-content: space-between;
        }

        .iconReact {
            display: none;
        }

    }

`;