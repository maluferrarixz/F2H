import {ButtonContainer, FormContainer, FormForm, LabelContainer, InputContainer } from "./styled"
import { Link } from "react-router-dom"

function SectionAnother(){

    return(
        <>
    <FormContainer>
    <FormForm>
        <LabelContainer class="Tittle">Se for outro, digite qual!</LabelContainer>
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
                <Link to= "/Formulario2">Próximo
                </Link>
                </ButtonContainer>
                </FormForm>
            </FormContainer>

</>
    )
}
export default SectionAnother