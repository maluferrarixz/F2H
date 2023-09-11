import styled from "styled-components";


export const FooterMenuFeed = styled.footer`

    width: 46.3vh;
    background-color:#d0c1dc;
    height: 12vh;
    /* display: flex; */
    position: fixed;
    bottom:0;
    left:0;
    border-radius:24px;


    display: flex;
    flex-direction:row;
    justify-content: center;
    flex:1; /* Defina a largura das colunas */
    border: none; /* Adicione uma borda para separar as colunas */
    align-items:center;
    gap:3vh;
    

`
export const FormButtonFooter = styled.button`
    margin-left:4vh;
`
export const FormButtonImgFooter = styled.img`
    width:7vw;

`
export const PublicButtonFooter = styled.button`
`

export const PublicButtonImgFooter = styled.img`
    width:15vw;
    margin-top:5px;
    z-index: 1;
    

`
export const PublicButtonTextFooter = styled.p`
    color:white;
    z-index: 2;


`

export const ProfileButtonFooter = styled.button`

`
export const ProfileButtonImgFooter = styled.img`
    width:10vw;
`

export const NewFormButtonFooter = styled.button`

`
export const NewFormImgButtonFooter = styled.img`
    width:12vw;
`