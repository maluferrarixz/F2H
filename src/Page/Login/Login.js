import { Link } from "react-router-dom"
import { TituloHeader, FormContainer,FormLabel, FormInput, FormForm } from "./Styled"

function Login(){
 
    return (
        <>
        <TituloHeader>Log In</TituloHeader>
        <FormContainer>
                <FormLabel for ="usuario">User Name
                <FormInput type="text" id="usuario" placeholder="Digite seu User Name"/>
                </FormLabel>
                <FormLabel for ="usuario">Senha
                <FormInput type="text" id="usuario" placeholder="Digite seu User Name"/>
                </FormLabel>
                <FormForm input id='envio' type="submit" value="Entrar">
                    <Link to= "/Home">Entrar
                    </Link>
                </FormForm>
        </FormContainer>
        </>
    )
}
export default Login
