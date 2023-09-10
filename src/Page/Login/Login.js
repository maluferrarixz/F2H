import { Link } from "react-router-dom"
import { FormContainer,FormLabel, FormInput, FormForm, SignUp } from "./Styled"
import TituloHeader from "../../components/Header/Header"

function Login(){
 
    return (
        <>
        <TituloHeader/>
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
            <SignUp>
            <Link to= "/Cadastro">
            Não tem conta? Se inscreva
            </Link>
            </SignUp>
        </>
    )
}
export default Login
