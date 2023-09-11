import { SavePublicationImgCard, SavePublicationCard, ReadPublicImgCard, SharePublicationCard, ReadPublicCard, DivCardInteraction, ImgCard, DivImgCard, SectionCard, DivCard, DivProfileCard, ProfileImgCard, ProfileTextCard } from "./Styled"
import HomePage from "../../Assets/ProfileImgCard.jpg"
import WrittenPublication from "../../Assets/chatCard.svg"
// import SendPublication from "../../Assets/Send.png"
import SavePublication from "../../Assets/SaveCard.svg"
import AlertToShare from "../../components/AlertToShare/AlertToShare"
function CardFeed(){

    return(
        <>
        <SectionCard>
        <DivCard> 
        <DivProfileCard>
        <ProfileImgCard src={HomePage}/>   
        <ProfileTextCard>
        Maria Luiza Ferrari
        </ProfileTextCard> 
        </DivProfileCard>
        <DivImgCard>
        <ImgCard/>
        </DivImgCard>
        <DivCardInteraction>
            <ReadPublicCard>  
            <ReadPublicImgCard src={WrittenPublication}/>
            </ReadPublicCard>
            <SharePublicationCard>
             <AlertToShare/>
            </SharePublicationCard>
            <SavePublicationCard>
            <SavePublicationImgCard src={SavePublication}/>
            </SavePublicationCard>
        </DivCardInteraction>
        </DivCard>
        </SectionCard>
        </>
    )
}
export default CardFeed