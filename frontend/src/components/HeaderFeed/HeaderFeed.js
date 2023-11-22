import { ButtonHeader, ColumnDiv, ImgButton, SectionHeader, TextBetweenButton } from "./styled"
// import FilterFeed from "../../Assets/FilterFeed.png"
import PublicSave from "../../Assets/PublicSaveFeed.png"
import DrawerFeed from "../../components/DrawerFeed/DrawerFeed"
import { Link } from 'react-router-dom';

function HeaderFeed(){

    return(

        <>
        <SectionHeader>
        <ColumnDiv>
       <ButtonHeader>
        {/* <DrawerFeed/> */}
       </ButtonHeader>
       </ColumnDiv>
       <ColumnDiv>
       <TextBetweenButton>receba um pouco de inspiração!</TextBetweenButton>
       </ColumnDiv>
       <ColumnDiv>
        <ButtonHeader>
        <Link to ="/SavePublication">
        <ImgButton src ={PublicSave}/> 
        </Link>
        </ButtonHeader>
        </ColumnDiv>
        </SectionHeader>
        </>
    )
}
export default HeaderFeed