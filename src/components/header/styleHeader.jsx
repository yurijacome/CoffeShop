import styled from "styled-components";

export const HeaderContainer = styled.header`

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    height: 100px;
    background-color:rgb(10, 10, 10);
    
    .CoffeLogo {
        width: 100px;
        height: 150px;
        cursor: pointer;
        margin-left: 60px;
    }
   

    .navigateArea {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 60px;
    }

    .nav-link {
        color: white;
        font-size: 20px;
        font-weight: 600;
        text-decoration: none;
        padding: 10px 20px;
        gap: 20px;
    }
    .nav-link:hover {
        color:rgb(255, 170, 0);
        
    }

    .searchArea{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;

        align-items: center;
        gap: 60px;
    }


    .searchInput {
    height: 40px;
    padding: 10px;
    border-radius: 20px;
    border: none;
    }
    .searchInput:focus {
    outline: none;
    
}
    .SearchIcon {
        color: white;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
    }
    .SearchIcon:hover {
        color:rgb(255, 174, 0);
    }

    
    cartArea{
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }


    .cartIcon {
        width: 40px;
        height: 40px;
        color: white;
        cursor: pointer;
        margin-right: 60px;
    }
    .cartIcon:hover {
    color:rgb(255, 174, 0);
    }


        }

`