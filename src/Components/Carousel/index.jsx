import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import certificadoAlura1 from "../../assets/images/certificadoAlura1.png";
import certificadoAlura2 from "../../assets/images/certificadoAlura2.png";
import certificadoAlura3 from "../../assets/images/certificadoAlura3.png";
import certificadoAlura4 from "../../assets/images/certificadoAlura4.png";
import certificadoAlura5 from "../../assets/images/certificadoAlura5.png";
import certificadoAlura6 from "../../assets/images/certificadoAlura6.png";
import certificadoAlura7 from "../../assets/images/certificadoAlura7.png";
import certificadoAlura8 from "../../assets/images/certificadoAlura8.png";
import certificadoAlura9 from "../../assets/images/certificadoAlura9.png";
import certificadoAlura10 from "../../assets/images/certificadoAlura10.png";
import certificadoAlura11 from "../../assets/images/certificadoAlura11.png";
import certificadoAlura12 from "../../assets/images/certificadoAlura12.png";
import certificadoAlura13 from "../../assets/images/certificadoAlura13.png";
import certificadoAlura14 from "../../assets/images/certificadoAlura14.png";
import certificadoAlura15 from "../../assets/images/certificadoAlura15.png";
import certificadoAlura16 from "../../assets/images/certificadoAlura16.png";
import certificadoAlura17 from "../../assets/images/certificadoAlura17.png";
import certificadoAlura18 from "../../assets/images/certificadoAlura18.png";

const DemoCarousel = () => {
  return (
    <Carousel
      autoPlay={true}
      showArrows={false}
      dynamicHeight={true}
      emulateTouch={true}
      infiniteLoop={true}
      showIndicators={false}
      showThumbs={false}
      width="100%"
    >
      <div>
        <img src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/44598887" />
      </div>
      <div>
        <img src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/49606228" />
      </div>
      <div>
        <img src={certificadoAlura1} />
      </div>
      <div>
        <img src={certificadoAlura2} />
      </div>
      <div>
        <img src={certificadoAlura3} />
      </div>
      <div>
        <img src={certificadoAlura4}/>
      </div>
      <div>
        <img src={certificadoAlura5}/>
      </div>
      <div>
        <img src={certificadoAlura6}/>
      </div>
      <div>
        <img src={certificadoAlura7}/>
      </div>
      <div>
        <img src={certificadoAlura8}/>
      </div>
      <div>
        <img src={certificadoAlura9}/>
      </div>
      <div>
        <img src={certificadoAlura10}/>
      </div>
      <div>
        <img src={certificadoAlura11}/>
      </div>
      <div>
        <img src={certificadoAlura12}/>
      </div>
      <div>
        <img src={certificadoAlura13}/>
      </div>
      <div>
        <img src={certificadoAlura14}/>
      </div>
      <div>
        <img src={certificadoAlura15}/>
      </div>
      <div>
        <img src={certificadoAlura16}/>
      </div>
      <div>
        <img src={certificadoAlura17}/>
      </div>
      <div>
        <img src={certificadoAlura18}/>
      </div>
      
    </Carousel>
  );
};

export default DemoCarousel;
