// import { Link } from "react-router-dom"
import { FormContainer,FormLabel, FormInput, FormForm, SignUp } from "./Styled"
import TituloHeader from "../../components/Header/Header"
import {useState} from "react"
import { Link, useNavigate } from 'react-router-dom';
import { api } from "../../services/api";

function Login () {
    const navigate = useNavigate()

    const [email, setEmail] = useState("");
    const [senha, setPassword] = useState("");
    const [setUser] = useState(null);
    // const { signIn, signed } = useContext(AuthContext);
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = {
        email,
        senha
      };

      try {
        const response = await api.post("/auth/login", data);
        if (response.data.error) {
          alert(response.data.error);
        } else {
          localStorage.setItem("@Auth:user", JSON.stringify(response.data.data[0].email));
          localStorage.setItem("@Auth:token", response.data.data[0].token)
          setUser(response.data.data[0]);

          navigate("/home")
        }
      } catch (error) {
        console.log(error);
      };

    }
    return (
        <>
        <TituloHeader/>
        <FormContainer onSubmit={handleSubmit}>
                <FormLabel>Email
                <FormInput  
                // className={email !== "" ? "has-val input" : "input"}
                type="email" 
                placeholder="Digite seu Email"
                value ={email} 
                onChange ={(e) =>setEmail(e.target.value)}
                />
                </FormLabel>
                <FormLabel>Senha
                <FormInput 
                // className={password !== "" ? "has-val input" : "input"}
                type="password"  
                placeholder="Digite seu User Name"
                value ={senha} 
                onChange ={(e) =>setPassword(e.target.value)}/>
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
    );
};

export default Login