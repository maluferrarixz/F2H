import styled from "styled-components"

export const DivPage = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    gap:4vh;
`
export const NewImgDiv = styled.div`
width: 80vw;
height: 30vh;
transform: rotate(0.061deg);
flex-shrink: 0;
margin-top:10vh;


border-radius: 10px;
background: #D9D9D9;
`

export const InputNewPublic = styled.input`
    background-color: #D9D9D9;
    border: 1px solid #D9D9D9;
    border-radius: 10px;
    font-weight: 300;
    width:70vw;
    height: 05vh;
    margin-top:1.4vw;
    font-family: 'Rubik', sans-serif;


    text-align: left; /* Alinhamento horizontal */
    padding-left: 10px;

`

export const ButtonNewPublic = styled.button`
    display: flex;
    flex-direction: column;
    background-color: #72567A;
    color: #F9F9F9;
    border: 1px solid #EDEDED;
    border-radius: 10px;
    font-weight: 300;
    width:40vw;
    height:05vh;
    margin-top:3vw;
    display: flex;
    justify-content: center; /* Centraliza horizontalmente */
    align-items: center; 
    margin-top:5vh;
    font-family: 'Rubik', sans-serif;


`
export const InputImg = styled.input`
    align-self:center;
    display:flex;
    justify-content:center;

`