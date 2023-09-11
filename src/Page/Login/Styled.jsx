import styled from "styled-components"

export const ContainerMain = styled.main`
    min-height: 95vh;
    display: flex;
    color:green;
`

export const TituloHeader = styled.header`
    font-size: xx-large;
    padding-top: 05vh;
    font-weight:300;
    color: #72567A;
    text-align:center;
    font-family: 'Rubik', sans-serif;
    display:flex;
    flex-direction:column;

`
export const FormContainer = styled.form`
    width: 80%;
    padding-top: 7vh;
    display: flex;
    align-items:center;
    flex-direction:column;
    padding-left:10vw;
`
export const FormInput = styled.input`
    background-color: #dcd3d3;
    border: 1px solid #EDEDED;
    border-radius: 10px;
    font-weight: 300;
    width:60vw;
    height: 05vh;
    margin-top:1.4vw;

    text-align: left; /* Alinhamento horizontal */
    padding-left: 10px;
`
export const FormLabel = styled.label`
    font-size: larger;
    font-family: 'Rubik', sans-serif;
    display:flex;
    align-items:start;
    flex-direction:column;
    color:black;
    margin-bottom:3vh;
`
export const FormForm = styled.button`
    display: flex;
    flex-direction: column;
    background-color: #72567A;
    color: #F9F9F9;
    border: 1px solid #EDEDED;
    border-radius: 10px;
    font-weight: 300;
    width:60vw;
    height:05vh;
    margin-top:3vw;
    display: flex;
    justify-content: center; /* Centraliza horizontalmente */
    align-items: center; 

`
export const SignUp = styled.a`
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:5vh;    
    
    
    a:visited {
        color: purple; /* Isso faz com que o link adote a cor do seu elemento pai */
    }

`