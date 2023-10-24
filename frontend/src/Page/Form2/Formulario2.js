import { Button, ButtonContainer, FormContainer, FormForm, InputContainer, LabelContainer, TextContainer, TittleContainer } from "./Styled"
import { Link } from "react-router-dom"
import { Checkbox } from '@chakra-ui/react'


function Formulario1(){

    return(
        <>
        <TittleContainer>Formulário</TittleContainer>
        <TextContainer>Agora que optou suas escolhas para dança, diga que problemas estão relacionados a sua melhora!</TextContainer>
            <FormContainer>
            <FormForm>
            <ButtonContainer>
            <Checkbox  size='lg' colorScheme='purple' >Ansiedade</Checkbox>
            <Checkbox  size='lg' colorScheme='purple' >Depressão</Checkbox>
            </ButtonContainer>
            <ButtonContainer>
            <Checkbox  size='lg' colorScheme='purple' >Baixa autoestima</Checkbox>
            <Checkbox  size='lg' colorScheme='purple' >Fobia Social</Checkbox>
            </ButtonContainer>
            <ButtonContainer>
            <Checkbox  size='lg' colorScheme='purple' >Vergonha</Checkbox>
            <Checkbox  size='lg' colorScheme='purple' >Perfeccionismo</Checkbox>
            </ButtonContainer>
            <ButtonContainer>
            <Checkbox  size='lg' colorScheme='purple' >Irritação</Checkbox>
            <Checkbox  size='lg' colorScheme='purple' >Distorção</Checkbox>
            </ButtonContainer>
            </FormForm>
           </FormContainer>
           <FormContainer>
            <FormForm>
                <LabelContainer>Se for outro, digite qual!</LabelContainer>
              </FormForm>  
            </FormContainer>
            <FormContainer>
            <FormForm>
            <InputContainer type="text" class="input" placeholder="Digite o seu problema"></InputContainer>
            </FormForm>
            </FormContainer>
            <FormContainer>
                <FormForm>
                <Button>
                <Link to= "/FormEnd">   
                    Próximo
                </Link>
                </Button>
                </FormForm>
            </FormContainer>
        </>
    )
}
export default Formulario1