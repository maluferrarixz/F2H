import styled from "styled-components";


export const TittleContainer = styled.h1`
    font-size: xx-large;
    font-weight:300;
    color: #72567A;
    padding-top: 8vh;
    padding-bottom: 03vh;
    text-align: center;
    font-family: 'Poppins', sans-serif;   


`

export const TextContainer = styled.p`
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
export const FormForm = styled.form`
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* 3 colunas com largura igual */
    gap: 10px; 
    margin-bottom: 10px;

`
export const ButtonContainer = styled.button`
    background-color:  rgb(114, 86, 122, 0.3);;
    border: 1px solid  rgb(114, 86, 122, 0.1);;
    height: 7vh;
    width: 20vh;
    border-radius: 10px;
    font-weight: 300;
    box-shadow: 2px 3px 7px #00000060;
    font-family: 'Poppins', sans-serif;   


    color: rgb(255, 255, 255);
    border: 1px solid var(--blue);
    border-radius: 50px;
    background-color: #896594 ;

`
export const LabelContainer = styled.label`
    font-size:medium;
    padding-bottom: 2vh;
    padding-top: 3vh;
    font-family: 'Poppins', sans-serif;  
    display:flex;
    text-align: center;
    color: black;
    

    
`

export const InputContainer = styled.input`
    background-color: rgb(114, 86, 122, 0.1);
    border: 1px solid #ffffff;
    height: 45px;
    border-radius: 10px;
    font-weight: 300;
    height: 06vh;
    margin-bottom: 2vh; 
`