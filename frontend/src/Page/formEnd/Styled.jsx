import styled from "styled-components";


export const TittleContainer = styled.h1`
    font-size: xx-large;
    font-weight:300;
    color: #72567A;
    padding-top: 8vh;
    padding-bottom: 01vh;
    text-align: center;
    font-family: 'Poppins', sans-serif;   


`

export const TextContainer = styled.p`
    font-size: larger;
    padding-left: 05vh;
    padding-right: 05vh;
    text-align: center;
    line-height: 03vh;
    font-weight: 500;
    margin-bottom: 03vh;
    font-family: 'Poppins', sans-serif;   
`

export const FormContainer = styled.div`
    width: auto;
    display: flex;
    flex-direction:column;
    /* justify-content: center; */
    align-items:center;
    padding-top: 1.9vh;

`
export const ImgContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`
export const Img= styled.img`

    height:35vh;

`
export const FormForm = styled.form`
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* 3 colunas com largura igual */
    gap: 10px; 
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;

`
export const Button = styled.button`
    background-color:  rgb(114, 86, 122, 0.3);;
    border: 1px solid  rgb(114, 86, 122, 0.1);;
    height: 4vh;
    width: 20vh;
    border-radius: 10px;
    font-weight: 300;
    box-shadow: 2px 3px 7px #00000060;
    font-family: 'Poppins', sans-serif;   


    color: rgb(255, 255, 255);
    border: 1px solid var(--blue);
    border-radius: 30px;
    background-color: #896594 ;

`
