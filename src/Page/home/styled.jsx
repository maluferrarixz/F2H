import styled from "styled-components";
import img from "../../Assets/HomePage.jpg ."



export const SectionBody =styled.section`
    background: url(${img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position:102%;
    margin:0;
    padding:0;
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Três colunas de largura igual */
    gap: 10px; 
    place-items: center; /* Isso centralizará horizontal e verticalmente os filhos */
    height: 100vh


`
export const ContainerText = styled.div`
    width: 77vw;
    height: 30vh;
    border-radius: 9%;
    background-color: #ffffff1c;
    backdrop-filter: blur(11px);
    --webkit-backdrop-filter: blur(13.5px);
    margin-bottom: 60vh;
    box-shadow: 6px 3px 7px #00000060;
    margin-top:10vh;
    text-align: center; /* Centraliza o conteúdo horizontalmente na div */
    padding: 10px;
    border: 1px solid #ffffff;
    margin-left:05vh;


`
export const ItemText = styled.p`
    font-weight: 500;
    /* font-size: 2.3vh; */
    line-height: 20px;
    text-align:left;
    padding: 03vh;
    padding-top: 04vh;
    color: black;
    font-family: 'Poppins', sans-serif;
    padding: 10px; /* Espaçamento interno dentro das colunas */

`

export const ButtonContainer = styled.button`
    
    box-shadow: 2px 3px 7px #00000060;
    background: #72567A;
    color: #F9F9F9;
    border: 1px solid #72567A;
    border-radius: 10px;
    font-weight: 300;
    height: 4vh;
    width: 29vw;
    margin-top:9%;


`