import React from "react";

import Carousel from 'react-bootstrap/Carousel';
import Banner01 from "../../assets/banner01.png";
import Banner02 from "../../assets/banner02.png";
import Banner03 from "../../assets/banner03.png";

import { BannerContainer } from "./bannerStyle";

export const Banner = () => {
    return (

        <BannerContainer>
        <Carousel className="MainContent">

        <Carousel.Item>
            <img src={Banner01} alt="1" />
            <Carousel.Caption>
                <h1>Café Café Café Café </h1>
                <h3>O melhor café do Brasil</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>

      <Carousel.Item>
      <img src={Banner02} alt="1" />

        <Carousel.Caption>
            <h1>Produtos </h1>
            <h3>second slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
       </Carousel.Item>

       
      <Carousel.Item>
      <img src={Banner03} alt="1" />

        <Carousel.Caption>
            <h1>Produtos </h1>
            <h3>second slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
       </Carousel.Item>

        </Carousel>
        </BannerContainer>




/*         <BannerContainer>
            <div className="MainContent">
                <h1>Café Café Café Café </h1>
                <h2>O melhor café do Brasil</h2>
                <p>Explore nossos produtos e aproveite as melhores ofertas.</p>
                <a href='/products'>Ver produtos</a> 
            </div>


        </BannerContainer> */
       

    );
}
