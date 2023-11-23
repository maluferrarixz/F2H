import {TextBetweenButton, SectionHeader, ColumnDiv, ButtonHeader, ImgButton} from "./styled"

import BackToFeed from "../../Assets/backTofeed.png"

import { Link } from 'react-router-dom';

function HeaderSavePublication (){

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
       <TextBetweenButton>Veja as publicações que você salvou!</TextBetweenButton>
       </ColumnDiv>
        </SectionHeader>
        </>
    )

}

export default HeaderSavePublication