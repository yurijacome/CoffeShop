import styled from "styled-components";

export const ProductCardContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 300px;
height: 500px;
background-color: rgb(51, 51, 51);

margin-top: 20px;
margin-left: 30px;
margin-bottom: 10px;

border-radius: 10px;

img {
width: 90%;
height: 200px;

border-radius: 10px 10px 0 0;
margin-top: 10px;
background-color: rgb(255, 255, 255);
}

h2 {
font-size: 24px;
color: #fff;
font-weight: 600;
margin-top: 10px;
}

p {
font-size: 12px;
color: #fff;
font-weight: 400;
margin-top: 10px;

background-color: rgb(153, 153, 153);
width: 90%;
height: 100px;

}

span{
font-size: 18px;
color: #fff;
font-weight: 400;
margin-top: 10px;
}

button {
width: 90%;
height: 40px;
border: none;
border-radius: 2px;
margin-top: 10px;

}

`;