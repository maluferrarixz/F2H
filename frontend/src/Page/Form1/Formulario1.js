import { ButtonContainer, FormContainer, FormForm,  TextContainer, TittleContainer } from "./Styled"
import SectionAnother from "../../components/SectionAnother/SectionAnother"

function Formulario1(){

    return(
        <>
        <TittleContainer>Formulário</TittleContainer>
        <TextContainer>Agora que fizeste tua conta, precisamos saber um pouco dos seus gostos para dança, para que assim seu perfil possa ficar a sua cara!</TextContainer>
        <TextContainer>De início, escolha as danças que você gostaria de saber mais ou ver em seu feed!</TextContainer>
            <FormContainer>
            <FormForm>
                <ButtonContainer>Hiphop</ButtonContainer>
                <ButtonContainer>Jazz</ButtonContainer>
                <ButtonContainer>Funk</ButtonContainer>
                <ButtonContainer>Ballet</ButtonContainer>
                <ButtonContainer>Dança do vêntre</ButtonContainer>
                <ButtonContainer>Contemporâneo</ButtonContainer>
                <ButtonContainer>Samba</ButtonContainer>
                <ButtonContainer>Forró</ButtonContainer>
            </FormForm>
           </FormContainer>
            <SectionAnother/>
        </>
    )
}
export default Formulario1