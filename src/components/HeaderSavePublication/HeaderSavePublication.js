import {SectionHeader, ColumnDiv, ButtonHeader, ImgButton} from "./styled"
import BackToFeed from "../../Assets/backTofeed.png"

function HeaderSavePublication (){

    return(
        <>
        <SectionHeader>
        <ColumnDiv>
       <ButtonHeader>
        <ImgButton src={BackToFeed}/>
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