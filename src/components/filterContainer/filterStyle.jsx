import styled from "styled-components";

export const FilterContainerStyled = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: row;
justify-content: flex-end;

input {
    width: 500px;
    height: 40px;
    margin-top: 30px;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 10px;
    background-color: #f9f9f9;
}

.SearchIcon {
    position: absolute;
    top: 20.5%;
    margin-right: 10px;

    color: #ccc;
    font-size: 20px;
    transition: color 0.3s;
}


`;
