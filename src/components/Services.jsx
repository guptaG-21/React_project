import React from "react";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from "../assets/3.jpg";
import img2 from "../assets/4.jpg";
const Services = () => {
  return (
    <Carousel className=".service" infiniteLoop autoPlay showArrows={false} showStatus={false} showThumbs={false} interval={1000}>
      <div>
        <img src={img1} alt='Cad design' />
        <p className="legend">Designing different design of the components</p>
      </div>

      <div>
        <img src={img2} alt='Cad design' />
        <p className="legend">Support that make your product efficient</p>
      </div>
    </Carousel>
  );
};

export default Services;
