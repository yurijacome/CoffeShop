import styled from "styled-components";
import banner01 from "../../assets/banner01.png";

export const BannerContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${banner01});
    background-size: cover;
    background-position: center;

    display: flex;
    flex-direction: column;
    justify-content: center;

    .MainContent{
        display: flex;
        flex-direction: column;
        margin-left: 180px;

        width: 500px;

    }
    h1{
        font-size: 90px;
        font-weight: 700;
        color: white;
    }
    h2{
        font-size: 30px;
        font-weight: 600;
        color: white;

        margin-top: 20px;
    }
    p{
        font-size: 20px;
        font-weight: 400;
        color: white;
    }
    
    a {
        width: 200px;
        height: 50px;

        margin-top: 30px;
        margin-left: 20px;

        display: flex;
        justify-content: center;
        align-items: center;


        border-radius: 5px;
        border: none;
        background-color:rgb(36, 14, 1);
        color: white;

        font-size: 22px;
        font-weight: 600;
        text-decoration: none;



    }



`;