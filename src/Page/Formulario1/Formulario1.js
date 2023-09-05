import { ButtonContainer, FormContainer, FormForm, InputContainer, LabelContainer, TextContainer, TittleContainer } from "./Styled"

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
           <FormContainer>
            <FormForm>
                <LabelContainer for="Outro" class="Tittle">Se for outro, digite qual!</LabelContainer>
              </FormForm>  
            </FormContainer>
            <FormContainer>
            <FormForm>
            <InputContainer type="text" class="input" placeholder="Digite o estilo de dança!"></InputContainer>
            </FormForm>
            </FormContainer>
            <FormContainer>
                <FormForm>
                <ButtonContainer>Próximo</ButtonContainer>
                </FormForm>
            </FormContainer>
        </>
    )
}
export default Formulario1