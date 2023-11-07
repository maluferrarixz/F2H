import HeaderConfiguration from "../../components/HeaderConfiguration/HeaderConfiguration"
import MenuFeed from "../../components/MenuFeed/MenuFeed"
import {  FormContainer,FormLabel, FormInput, FormForm } from "./styled"
import {ImgDivProfile, ImgProfile} from "../../Page/Profile/styled"
import ProfileImg from "../../Assets/ProfileImgCard.jpg"
import { useState, useEffect } from "react";
import axios from "axios";
import { api } from "../../services/api";
// import {  useNavigate } from 'react-router-dom';


function ConfigurationProfile(){
  const [senha, setSenha] = useState();
  const [email, setEmail] = useState();
  const [nome, setNome] = useState();
  const [userData, setUserdata] = useState([]);
  const id = localStorage.getItem("@Authid");

  useEffect(() => {
    if (id) {
      const formData = {
        id: id
      };
      axios.post(`/find/findUser`, formData) 
        .then(function (response) {
          setNome(response.data.data.nome);                 
          setEmail(response.data.data.email);                 
          setSenha(response.data.data.senha);             
        })             
        .catch(function (error) {   
            console.log(error);             
        });     
    }   
  }, [id]); 

  const fetchData = async () => {
    const id = localStorage.getItem('id');
    //alert(id);
    if (id) {
      try {
        const response = await api.get('/user/' + id);
        alert(response);
        
        setUserdata(response.data);
        alert(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }

    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  // const handleSave = (nome, email, senha) => {
  //     const data = {
  //       nome,
  //       senha,
  //       email
  //     };
  //     const id = localStorage('@Auth:id');
  //     console.log(id);
  //     const response = api.put('/user/' + id, data);    

  //     if(response.data.success) {
  //       alert('atualizado');
  //     }
  //     const response = api.put('/user/' + id, data);  
  //     console.log(response)  
  //   }
  
  
  return(
      <>        
      <HeaderConfiguration />      
      {/* {userData.map((user) => ( */}
        <FormContainer >
          <ImgDivProfile>
            <ImgProfile src={ProfileImg} />
          </ImgDivProfile>
          <FormLabel>User name
            <FormInput
              defaultValue={nome}
              type="text"
              onChange={(e) => setNome(e.target.value)}
            />
          </FormLabel>
          <FormLabel>Senha
            <FormInput
              defaultValue={senha}
              type="password" // Corrija o tipo para "password"
              onChange={(e) => setSenha(e.target.value)}
            />
          </FormLabel>
          <FormLabel>Email
            <FormInput
              type="email"
              defaultValue={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="marialuizinha167@gmail.com"
            />
          </FormLabel>
          <FormForm
            // onClick={handleSave}
            type="submit"
          >Salvar alterações
          </FormForm>
          <MenuFeed />
        </FormContainer>
        {/* ))} */}
    </> 
  )
}

export default ConfigurationProfile