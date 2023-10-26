import { FormContainer, FormForm,  TextContainer, TittleContainer } from "./Styled"
import SectionAnother from "../../components/SectionAnother/SectionAnother"
import { Checkbox } from '@chakra-ui/react'

function Formulario1(){

    return(
        <>
        <TittleContainer>Formulário</TittleContainer>
        <TextContainer>Agora que fizeste tua conta, precisamos saber um pouco dos seus gostos para dança, para que assim seu perfil possa ficar a sua cara!</TextContainer>
        <TextContainer>De início, escolha as danças que você gostaria de saber mais ou ver em seu feed!</TextContainer>
            <FormContainer>
            <FormForm>
            <Checkbox  size='lg' colorScheme='purple' >HipHop</Checkbox>
            <Checkbox  size='lg' colorScheme='purple' >Ballet</Checkbox>
            <Checkbox  size='lg' colorScheme='purple' >Contemporâneo</Checkbox>
            <Checkbox  size='lg' colorScheme='purple' >Jazz</Checkbox>
            <Checkbox  size='lg' colorScheme='purple' >Dança do vêntre</Checkbox>
            <Checkbox  size='lg' colorScheme='purple' >Funk</Checkbox>
            </FormForm>
           </FormContainer>
            <SectionAnother/>
        </>
    )
}
export default Formulario1