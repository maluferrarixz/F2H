import HeaderNewPublic from "../../components/HeaderNewPublic/HeaderNewPublic"
import { InputImg, DivPage, NewImgDiv, InputNewPublic, ButtonNewPublic } from "./styled"
import MenuFeed from "../../components/MenuFeed/MenuFeed"


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
        <ButtonNewPublic type="submit">Publicar
        </ButtonNewPublic>
        </DivPage>
        <MenuFeed/>
        </>
    )
}
export default NewPublic