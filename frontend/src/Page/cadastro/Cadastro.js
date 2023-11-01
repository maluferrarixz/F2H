import TituloHeader from "../../components/Header2/Header"
import {  FormContainer,FormLabel, FormInput, FormForm } from "./styled"
// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import {  useNavigate } from 'react-router-dom';


function Cadastro(){
  
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Verifique se existem valores no localStorage e carregue-os
    const savedName = localStorage.getItem("name");
    const savedPassword = localStorage.getItem("password");
    const savedEmail = localStorage.getItem("email");

    if (savedName) {
      setName(savedName);
    }
    if (savedPassword) {
      setPassword(savedPassword);
    }
    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  useEffect(() => {
    // Salve os valores das variáveis no localStorage sempre que houver alterações
    localStorage.setItem("name", name);
    localStorage.setItem("password", password);
    localStorage.setItem("email", email);
  }, [name, password, email]);
    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = {
        name,
        password,
        email
      };
      await api.post("/user/create", data);
      alert("Usuário criado com sucesso!");
      navigate("/home")
    };
  
    return (
        <>
        <TituloHeader/>
        <FormContainer onSubmit={handleSubmit}>
                <FormLabel>User name
                <FormInput 
                // className={name !== "" ? "has-val input" : "input"}
                type="text"
                value ={name} 
                onChange={(e) => setName(e.target.value)}
                placeholder="Digite seu User Name"/>
                </FormLabel>
                <FormLabel>Senha
                <FormInput
                // className={password !== "" ? "has-val input" : "input"}
                type="text" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite seu User Name"/>
                </FormLabel>
                <FormLabel>Confirmar senha
                <FormInput type="text" id="usuario" placeholder="Digite seu User Name"/>
                </FormLabel>
                <FormLabel>Email 
                <FormInput 
                type="text" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu User Name"/>
                </FormLabel>
                <FormForm type="submit">Cadastrar</FormForm>
        </FormContainer>
        </>
    )
  }
export default Cadastro
