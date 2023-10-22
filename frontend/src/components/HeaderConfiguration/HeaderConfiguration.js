import {TextBetweenButton, SectionHeader, ColumnDiv, ButtonHeader, ImgButton} from "./styled"
import BackToFeed from "../../Assets/backTofeed.png"
import { Link } from 'react-router-dom';


function HeaderConfiguration(){

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
       <TextBetweenButton>Edite seu perfil</TextBetweenButton>
       </ColumnDiv>
        </SectionHeader>

        </>
    )
}
export default HeaderConfiguration