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
                <FormLabel >User name
                <FormInput type="text" id="usuario" placeholder="Maria Luiza Ferrari"/>
                </FormLabel>
                <FormLabel >Senha
                <FormInput 
                type="senha" 
                />
                </FormLabel>
                <FormLabel>Email 
                <FormInput 
                type="email" 
                placeholder="marialuizinha167@gmail.com"/>
                </FormLabel>
                <FormLabel>Biografia do Perf.
                <FormInput type="text" id="usuario" placeholder="Oii, sou a Malu amo dançar e cantar!!"/>
                </FormLabel>
                <FormForm input id='envio' type="submit" value="Entrar">Salvar alterações</FormForm>
        <MenuFeed/>
        </FormContainer>

       </>
    )
}
export default ConfigurationProfile
