import {TextBetweenButton, SectionHeader, ColumnDiv, ButtonHeader, ImgButton} from "./styled"
import BackToFeed from "../../Assets/backTofeed.png"
import { Link } from 'react-router-dom';


function HeaderNewPublic(){

    return(

        <>
        <SectionHeader>
        <ColumnDiv>
       <ButtonHeader>
        <Link to ="/Feed">
        <ImgButton src={BackToFeed}/>
        </Link>
       </ButtonHeader>
       </ColumnDiv>
       <ColumnDiv>
       <TextBetweenButton>Crie uma publicação!</TextBetweenButton>
       </ColumnDiv>
        </SectionHeader>

        </>
    )
}
export default HeaderNewPublic