import HeaderNewPublic from "../../components/HeaderNewPublic/HeaderNewPublic"
import { InputImg, DivPage, NewImgDiv, InputNewPublic, ButtonNewPublic } from "./styled"
import MenuFeed from "../../components/MenuFeed/MenuFeed"
import PublicHashtagDance from "../../components/PublicHashtagDance/PublicHashtagDance"
import PublicHashtagProblem from "../../components/PublicHashtagProblem/PublicHashtagProblem"


function NewPublic(){

    return(
        <>
        <HeaderNewPublic/>       
        <DivPage>
        <NewImgDiv>
        <InputImg 
        type="file"
        />    
        </NewImgDiv>
        <InputNewPublic placeholder="DEIXE AQUI SUA MENSAGEM!"/>        
        <PublicHashtagDance/>
        <PublicHashtagProblem/>
        <ButtonNewPublic type="submit">Publicar
        </ButtonNewPublic>
        </DivPage>
        <MenuFeed/>
        </>
    )
}
export default NewPublic