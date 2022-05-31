import { Container } from "./styled";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container>
      <div className="container-content">
        <div className="container-social-midia">
          <span>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/matheusbarcellos/" rel="noreferrer"
            >
              Linkedin
            </a>
          </span>
          <span>
            <a target="_blank" href="https://github.com/MatheusBarcellosDev" rel="noreferrer">
              Github
            </a>
          </span>
          <span>
              <a target="_blank" href="https://www.instagram.com/matheusbarcelloos/" rel="noreferrer">
                Instagram
              </a>
              
              </span>
        </div>
        <div className="container-text">
          <p>© 2022 All rights reserved</p>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
