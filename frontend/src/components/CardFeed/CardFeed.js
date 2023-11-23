import HomePage from "../../Assets/ProfileImgCard.jpg"
import AlertToShare from "../../components/AlertToShare/AlertToShare"
import AlertToSave from "../AlertToSave/AlertToSave"
import ParagraphCard from "../../components/ParagraphCard/ParagraphCard"

import { SavePublicationCard,  SharePublicationCard, ReadPublicCard, DivCardInteraction, ImgCard, DivImgCard, SectionCard, DivCard, DivProfileCard, ProfileImgCard, ProfileTextCard } from "./Styled"

    
function CardFeed( {postContent} ){
    const images = 'http://localhost:8000/uploads/';


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