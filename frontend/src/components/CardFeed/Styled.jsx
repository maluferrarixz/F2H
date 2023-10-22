import styled from "styled-components";
import CardFeedPost from "../../Assets/CardFeedPost.jpg"

export const SectionCard = styled.section`

    display: flex;
    flex-direction:column;
    justify-content: center;


`
export const DivCard = styled.div`

    background-color: #d0c1dc;
    height: 40vh;
    width: 80vw;
    align-items: center;
    margin: 4vh;
    border-radius: 3vh;
    overflow: hidden;
    position: relative;
`
export const DivProfileCard = styled.div`
    display: flex;
    flex-direction:row;
    gap:2vh;
`
export const ProfileImgCard = styled.img`

    width:50px;
    height:50px;
    border-radius:20px;
    margin-left:25px;
    margin-top:10px;

`

export const ProfileTextCard = styled.p`
    margin-top:20px;
    font-family: 'Poppins', sans-serif;  
    font-weight:bold; 

`
export const DivImgCard = styled.div`

    height: 40vh;
    align-items: center;
    overflow: hidden;
    background: url(${CardFeedPost});
    background-size: cover; /* Ajusta a imagem para cobrir todo o fundo */
    background-repeat: no-repeat; /* Impede a repetição da imagem */
    background-position: 100%;
    margin-top:1vh;
    position: relative;

` 
export const ImgCard = styled.img`

`

export const DivCardInteraction = styled.div`
    height: 07vh;
    width:40vh; 
    transform: rotate(0.061deg);
    padding: 10px 84px 10px 17px;


    background: rgba(0, 0, 0, 0.30);
    backdrop-filter: blur(10.094486236572266px);
    position: absolute;
    bottom: 0; 
    left: 0;

    display: flex;
    flex-direction:row;
    justify-content: center;
    flex:1; /* Defina a largura das colunas */
    border: none; /* Adicione uma borda para separar as colunas */
    align-items:center;
    gap:3vh;

`

export const ReadPublicCard = styled.button`
   margin-left:4vh;
`
export const ReadPublicImgCard = styled.img`

    width:8vw;
    height:9vh;
    color:#ffffff;
`

export const SharePublicationCard = styled.button`
    background:none;
    border: #ffffff;
`

export const SharePublicationImgCard = styled.img`
    width:4vw;
    height:2vh;
`

export const SavePublicationCard = styled.button`
`

export const SavePublicationImgCard = styled.img`
    width:7vw;
`