import { ButtonNext, FormContainer, FormForm, LabelContainer, InputContainer } from "./styled"
import { Link } from "react-router-dom"

function SectionAnother(){

    return(
        <>
    <FormContainer>
    <FormForm>
        <LabelContainer>Se for outro, digite qual!</LabelContainer>
    </FormForm>  
    </FormContainer>
    <FormContainer>
    <FormForm>
    <InputContainer type="text" placeholder="Digite o estilo de dança!"></InputContainer>
    </FormForm>
    </FormContainer>
    <FormContainer>
                <FormForm>
                <ButtonNext>
                <Link to= "/Formulario2">   
                    Próximo
                </Link>
                </ButtonNext>
                </FormForm>
            </FormContainer>

        </>
    )
}
export default SectionAnother