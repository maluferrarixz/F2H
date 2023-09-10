import { ButtonHeader, ColumnDiv, ImgButton, SectionHeader, TextBetweenButton } from "./styled"
import FilterFeed from "../../Assets/FilterFeed.png"
import PublicSave from "../../Assets/PublicSaveFeed.png"

function HeaderFeed(){

    return(

        <>
        <SectionHeader>
        <ColumnDiv>
       <ButtonHeader>
        <ImgButton src={FilterFeed}/>
       </ButtonHeader>
       </ColumnDiv>
       <ColumnDiv>
       <TextBetweenButton>receba um pouco de inspiração!</TextBetweenButton>
       </ColumnDiv>
       <ColumnDiv>
        <ButtonHeader>
        <ImgButton src ={PublicSave}/>
        </ButtonHeader>
        </ColumnDiv>
        </SectionHeader>
        </>
    )
}
export default HeaderFeed