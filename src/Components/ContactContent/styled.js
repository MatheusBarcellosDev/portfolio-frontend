import styled from "styled-components";

export const Container = styled.section`
  padding: 1rem 0;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }

  .icons {
    display: flex;
    gap: 1rem;
    padding: 1rem 0;

    @media (min-width: 768px) {
       margin-bottom: 1rem;
    }

    p {
      font-size: 1rem;
      margin-top: 0.4rem;

    }
  }

  .contact-info {
    padding: 1rem;

    text-align: left;

    .contact-email{
        p {
            font-size: 0.9rem;
        }
    }

    @media (min-width: 768px) {
      width: 50%;
      padding: 5rem;
    }
  }

  .contact-form {
    text-align: left;
    padding: 0 1rem;

    @media (min-width: 768px) {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    h4 {
      font-size: 1.2rem;
      font-weight: bold;
      letter-spacing: 0.1rem;
      position: relative;
      display: inline-block;
      padding-bottom: 0.4rem;
      margin-bottom: 1.8rem;
    }

    h4:before {
      display: block;
      position: absolute;
      content: "";
      width: 100%;
      background-color: #353535;
      height: 2px;
      bottom: 0;
    }

    h4:after {
      content: "";
      position: absolute;
      display: block;
      width: 30px;
      height: 2px;
      background-color: #007ced;
      bottom: 0;
    }

    .form-group {
      margin-bottom: 1.9rem;

      textarea {
          @media (min-width: 768px) {
            height: 186px;
            width: 90%;
          }
      }

      input,
      textarea {
        padding: 0.5rem;
        border-radius: 0.3rem;
        border: 2px solid #555555;
        background-color: #222222;
        color: #fff;
        display: block;
        margin-bottom: 1px;
        font-size: 0.9rem;

        @media (max-width: 768px) {
            width: 100%;
        }
      }

      input:focus,
      textarea:focus {
        outline: none;
      }

      span {
        color: red;
        font-size: 0.8rem;
        position: absolute;
      }
    }

    button {
      background-color: #007ced;
      color: #fff;
      border: none;
      padding: 0.4rem 0.9rem;
      border-radius: 5px;
      font-size: 0.7rem;
      font-weight: bold;
      letter-spacing: 0.1rem;
      cursor: pointer;
      transition: 0.3s;
      float: right;

      @media (min-width: 768px) {
        font-size: 1rem;
        margin-right: 2.9rem;
      }
    }

    button:hover {
      background-color: #fff;
      color: #007ced;
      border: 1px solid #007ced;
    }

    button:disabled {
      background-color: #ccc;
      color: #fff;
      border: 1px solid #ccc;
      cursor: not-allowed;
    }

    .container-message{
        

        @media (min-width: 768px) {
            padding-top: 75px;
            width: 90%;
        }

        .message {

            margin-bottom: 1rem;
            
            @media (min-width: 768px) {
                margin-bottom: 0.5rem;
            }
        }
    }
  }
`;
