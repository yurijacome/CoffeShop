import React from "react";
import { BannerContainer } from "./bannerStyle";

export const Banner = () => {
    return (
        <BannerContainer>
            <div className="MainContent">
                <h1>Café Café Café Café </h1>
                <h2>O melhor café do Brasil</h2>
                <p>Explore nossos produtos e aproveite as melhores ofertas.</p>
                <a href='/products'>Ver produtos</a> 
            </div>


        </BannerContainer>
    );
}