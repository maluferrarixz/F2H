import { SavePublicationCard,  SharePublicationCard, ReadPublicCard, DivCardInteraction, ImgCard, DivImgCard, SectionCard, DivCard, DivProfileCard, ProfileImgCard, ProfileTextCard } from "./Styled"
import HomePage from "../../Assets/ProfileImgCard.jpg"
// import WrittenPublication from "../../Assets/paragraph.svg"
// import SendPublication from "../../Assets/Send.png"
import AlertToShare from "../../components/AlertToShare/AlertToShare"
import AlertToSave from "../AlertToSave/AlertToSave"
import ParagraphCard from "../../components/ParagraphCard/ParagraphCard"
// import { Link, useNavigate } from "react-router-dom";
// const navigate = useNavigate();




// import axios from "axios"
// import { useState,useEffect } from "react"
// import { api } from "../../services/api"
    
function CardFeed( {postContent} ){
    const images = 'http://localhost:8000/uploads/';

    // const [userData, setUserData] = useState('');
    
    // // pega as informações do usuário baseadas no email
    // useEffect(() => {
    //   // pega o email do localstorage e tira as aspas
    //   const userEmail = localStorage.getItem("user").replace(/"/g, '');
      
    //   // função get para pegar as informações
    //   axios.get(`${api.defaults.baseURL}/user/information/${userEmail}`)
    //   .then(response => {
    //       const userDataFromServer = response.data; 
    //       setUserData(userDataFromServer.data);
    //       console.log('aaaaaaaaaaaaaaaaaa', response.data)
    //   })
    //   .catch(error => {
    //       console.error('Erro ao buscar dados do usuário:', error);
    //   });
    // }, []);

    return(
        <>
  {postContent && postContent.map && postContent.map((post, index) => (
        <SectionCard key={post.id_post}>
        <DivCard > 
        <DivProfileCard>
        <ProfileImgCard src={HomePage}/>   
        <ProfileTextCard>
        @{post.name}
        </ProfileTextCard> 
        </DivProfileCard>
        <DivImgCard>
        <ImgCard src={images+post.imagem}/>
        </DivImgCard>
        <DivCardInteraction>
            <ReadPublicCard>  
            <ParagraphCard conteudo={post.conteudo}/>
            </ReadPublicCard>
            <SharePublicationCard>
             <AlertToShare id_post={post.id_post}/>
            </SharePublicationCard>
            <SavePublicationCard>
            <AlertToSave id_post={post.id_post}/>
            </SavePublicationCard>
        </DivCardInteraction>
        </DivCard>
        </SectionCard>
     ))}  

        </>
    )
}
export default CardFeed