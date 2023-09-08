import { Button, ButtonContainer, FormContainer, FormForm, InputContainer, LabelContainer, TextContainer, TittleContainer } from "./Styled"
import { Link } from "react-router-dom"

function Formulario1(){

    return(
        <>
        <TittleContainer>Formulário</TittleContainer>
        <TextContainer>Agora que optou suas escolhas para dança, diga que problemas estão relacionados a sua melhora!</TextContainer>
            <FormContainer>
            <FormForm>
                <ButtonContainer>
                    <Button>Ansiedade</Button>
                    <Button>Baixa Autoestima</Button>
                </ButtonContainer>
                <ButtonContainer>
                    <Button>Fobia social</Button>
                    <Button>Estresse</Button>
                </ButtonContainer>
                <ButtonContainer>
                    <Button>Vergonha</Button>
                    <Button>Irritação</Button>
                </ButtonContainer>
                <ButtonContainer>
                    <Button>Sintomas físicos</Button>
                    <Button>Perfeccionismo</Button>
                </ButtonContainer>
                <ButtonContainer>
                    <Button>Impaciência</Button>
                    <Button>Financeiro</Button>
                </ButtonContainer>
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
                <Button>
                <Link to= "/Formulario1">   
                    Próximo
                </Link>
                </Button>
                </FormForm>
            </FormContainer>
        </>
    )
}
export default Formulario1