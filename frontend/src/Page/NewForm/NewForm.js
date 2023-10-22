import {  ButtonNewForm,DivNewForm,  ImgNewForm, TextNewForm, TittleNewForm } from "./styled"
import NewFormm from "../../Assets/NewForm.png"
import MenuFeed from "../../components/MenuFeed/MenuFeed"
import { Link } from 'react-router-dom';


function NewForm(){

    return(

        <>
        <TittleNewForm>
            Formulário
        </TittleNewForm>
        <TextNewForm>
        Se dejesar personalizar seu perfil, adicionando gostos e danças diferentes, 
        poderá clicar a baixo, assim mudaremos seu perfil para ficar ainda mais sua cara!</TextNewForm>
        <DivNewForm>
        <ImgNewForm src={NewFormm}/>        
        <ButtonNewForm>
        <Link to ="/formulario1">
            Personalizar
        </Link>
        </ButtonNewForm>
       </DivNewForm>
       <MenuFeed/>
        </>
    )
}
export default NewForm