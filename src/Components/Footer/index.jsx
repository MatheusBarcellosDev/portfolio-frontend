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
              href="https://www.linkedin.com/in/matheusbarcellos/"
            >
              Linkedin
            </a>
          </span>
          <span>
            <a target="_blank" href="https://github.com/MatheusBarcellosDev">
              Github
            </a>
          </span>
          <span>
              <a target="_blank" href="https://www.instagram.com/matheusbarcelloos/">
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
