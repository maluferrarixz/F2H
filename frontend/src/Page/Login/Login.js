// import { Link } from "react-router-dom"
import { FormContainer,FormLabel, FormInput, FormForm, SignUp } from "./Styled"
import TituloHeader from "../../components/Header/Header"
import axios from "axios"
import {useState} from "react"
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';




function Login(){

    const navigate = useNavigate()
    const goToHome = () => {
      navigate('home')
    }
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState ('')

    const hadleSubmit = (event) =>{
        event.preventDefault();

            const credentials ={email, password}

            axios.post('http://localhost:8000/login', credentials,{
        headers:{
            'Content-Type': 'application/json',
        },
        })
        .then(response =>{
            alert(response.data.message)
            goToHome()
        })
        .catch(error => console.log(error))

    }

    return (
        <>
        <TituloHeader/>
        <FormContainer onSubmit={hadleSubmit}>
                <FormLabel>Email
                <FormInput type="email" placeholder="Digite seu Email"
                value ={email} onChange ={(e) =>setEmail(e.target.value)}
                />
                </FormLabel>
                <FormLabel>Senha
                <FormInput type="password"  placeholder="Digite seu User Name"
                value ={password} onChange ={(e) =>setPassword(e.target.value)}/>
                </FormLabel>
                <FormForm type="submit">Entrar
                    {/* <Link to= "/Home">Entrar
                    </Link> */}
                </FormForm>
        </FormContainer>
            <SignUp>
            <Link to= "/Cadastro">
            Não tem conta? Se inscreva
            </Link>
            </SignUp>
        </>
    )
}
export default Login
