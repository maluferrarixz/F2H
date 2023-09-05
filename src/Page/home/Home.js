import { ContainerText, Container, ButtonContainer, ItemText } from "./styled"
import { Link } from "react-router-dom"


function Home(){
    // let nome = document.querySelector('#item')
    // nome.textContent = 'Olá, '+ localStorage.getItem('usuario') + '!. Permita que a dança seja sua aliada na resolução de problemas internos e na superação de bloqueios, encontrando uma conexão profunda com seu corpo e mente.'
    
    return(
        <>
        <ContainerText>
            <ItemText ></ItemText>
            <Container>
                <ButtonContainer type = "submit" value = "Entrar">
                <Link to= "/Formulario1">
                    Entrar
                </Link>
                </ButtonContainer>
            </Container>
        </ContainerText>
        </>
    )
}
export default Home