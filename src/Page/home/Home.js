import { ButtonContainer, ContainerText, ItemText, SectionBody } from "./styled"
// import { Link } from "react-router-dom"


function Home(){
    // let nome = document.querySelector('#item')
    // nome.textContent = 'Olá, '+ localStorage.getItem('usuario') + '!. Permita que a dança seja sua aliada na resolução de problemas internos e na superação de bloqueios, encontrando uma conexão profunda com seu corpo e mente.'
    
    return(
        <>
        <SectionBody>
        <ContainerText>
        <ItemText>
        Permita que a dança seja sua aliada na resolução de problemas internos e na superação de bloqueios, encontrando uma conexão profunda com seu corpo e mente.
        </ItemText>      
        <ButtonContainer>
            Começar
        </ButtonContainer>

        </ContainerText>
        </SectionBody>
        </>
    )
}
export default Home