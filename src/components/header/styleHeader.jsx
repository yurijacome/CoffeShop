import styled from "styled-components";

export const HeaderContainer = styled.header`

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    height: 100px;
    background-color:rgb(10, 10, 10);
    box-shadow: 0px 1px 5px rgba(241, 241, 241, 0.33);
    position: fixed;
    
    .imgLogo {
        width: 150px;
        height: 180px;
    }

    .navigateArea {
        height: 100px;
        width: 50%;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 60px;
    }

    .searchArea{
    width: 50%;
        height: 100px;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;

        align-items: center;
        gap: 60px;
    }

    .CoffeLogo {
        width: 100px;
        height: 150px;
        cursor: pointer;
        margin-left: 60px;
    }

    .linksArea {
        display: flex;
        align-items: center;
    
        a {

            color: white;
            font-size: 22px;
            font-weight: 600;
            text-decoration: none;
            padding: 10px 20px;
        }
    }

    .cartIcon {
        width: 50px;
        height: 50px;
        color: white;
        cursor: pointer;
        margin-right: 60px;
    }


        }

`