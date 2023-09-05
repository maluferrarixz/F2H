
import { TituloHeader, FormContainer,FormLabel, FormInput, FormForm } from "./styled"

function Cadastro(){

    return (
        <>
        <TituloHeader>Cadastre-se</TituloHeader>
        <FormContainer>
                <FormLabel for ="usuario">User name
                <FormInput type="text" id="usuario" placeholder="Digite seu User Name"/>
                </FormLabel>
                <FormLabel for ="usuario">Senha
                <FormInput type="text" id="usuario" placeholder="Digite seu User Name"/>
                </FormLabel>
                <FormLabel for ="usuario">Confirmar senha
                <FormInput type="text" id="usuario" placeholder="Digite seu User Name"/>
                </FormLabel>
                <FormLabel for ="usuario">Email 
                <FormInput type="text" id="usuario" placeholder="Digite seu User Name"/>
                </FormLabel>
                <FormForm input id='envio' type="submit" value="Entrar">Entrar</FormForm>
        </FormContainer>
        </>
    )
}
export default Cadastro
