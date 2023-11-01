import styled from "styled-components";


export const FormContainer = styled.form`
    width: 80%;
    display: flex;
    align-items:center;
    flex-direction:column;
    padding-left:10vw;
`
export const FormInput = styled.input`
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 2px solid $gray;
    outline: 0;
    font-size: 1.3rem;
    color: $white;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;

    text-align: left; /* Alinhamento horizontal */
    padding-left: 10px;

  padding-bottom: 6px;  
  font-weight: 700;
  border-width: 3px;
  border-image: linear-gradient(to right, $primary,$secondary);
  border-image-slice: 1;
  
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
    height:04vh;
    margin-top:20vw;
    display: flex;
    justify-content: center; /* Centraliza horizontalmente */
    align-items: center; 
    `