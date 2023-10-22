import HeaderConfiguration from "../../components/HeaderConfiguration/HeaderConfiguration"
import MenuFeed from "../../components/MenuFeed/MenuFeed"
import {  FormContainer,FormLabel, FormInput, FormForm } from "./styled"
import {ImgDivProfile, ImgProfile} from "../../Page/Profile/styled"
import ProfileImg from "../../Assets/ProfileImgCard.jpg"


function ConfigurationProfile(){

    return(
       <>
       <HeaderConfiguration/>
               <FormContainer>              
                <ImgDivProfile>
              <ImgProfile src={ProfileImg} />
                </ImgDivProfile> 
                <FormLabel for ="usuario">User name
                <FormInput type="text" id="usuario" placeholder="Maria Luiza Ferrari"/>
                </FormLabel>
                <FormLabel for ="usuario">Senha
                <FormInput type="text" id="usuario" placeholder="********"/>
                </FormLabel>
                <FormLabel for ="usuario">Email 
                <FormInput type="text" id="usuario" placeholder="marialuizinha167@gmail.com"/>
                </FormLabel>
                <FormForm input id='envio' type="submit" value="Entrar">Salvar alterações</FormForm>
        <MenuFeed/>
        </FormContainer>

       </>
    )
}
export default ConfigurationProfile
