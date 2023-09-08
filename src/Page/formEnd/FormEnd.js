import { ImgContainer, TextContainer, TittleContainer, Img, FormContainer, FormForm, Button} from "./Styled"
import FormEnd from "../../Assets/FormEnd.png"

function formEnd(){

    return(
        <>
        <TittleContainer>Formulário</TittleContainer>
        <TextContainer>Agora que terminamos seu formulário, desejamos que se sinta mais a vontade em seu perfil, e que possa compartilhar e ser ajudado com pessoas que pensam da mesma forma que você!</TextContainer>
        <ImgContainer>
            <Img src={FormEnd} alt="Mulher dançando"/>
        </ImgContainer>
        <FormContainer>
                <FormForm>
                <Button>Próximo</Button>
                </FormForm>
        </FormContainer>
        </>
    )
}
export default formEnd