import HeaderConfiguration from "../../components/HeaderConfiguration/HeaderConfiguration"
import MenuFeed from "../../components/MenuFeed/MenuFeed"
import {  FormContainer,FormLabel, FormInput, FormForm } from "./styled"
import {ImgDivProfile, ImgProfile} from "../../Page/Profile/styled"
import ProfileImg from "../../Assets/ProfileImgCard.jpg"
import { useState, useEffect } from "react";
import axios from "axios";
import { api } from "../../services/api";
import {  useNavigate } from 'react-router-dom';


function ConfigurationProfile(){
  const [  setSenha] = useState();
  const [  setEmail] = useState();
  const [  setNome] = useState();
  const [userData, setUserdata] = useState([]);


  const userId = parseInt(localStorage.getItem("id"), 10)
  const navigate = useNavigate()

  const [userEditName, setEditUserName] = useState('');
  const [userEditEmail, setEditUserEmail] = useState('');
  const [userEditPassword, setEditUserPassword] = useState('');


  const fetchData = async () => {
    const id = localStorage.getItem('id');
    //alert(id);
    if (id) {
      try {
        const response = await api.get('/user/' + id);
        console.log(response);
        
        setUserdata(response.data.data[0]);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }

    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    setEditUserName(e.target.value);
  };

  const handleInputChange2 = (e) => {
    setEditUserEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
                        
    const user_Id = parseInt(localStorage.getItem('id'));
    localStorage.setItem('name', userEditName)
    localStorage.setItem('user', userEditEmail)
                  
    const paramsForm = {
      nome: userEditName,
      email: userEditEmail,
      user_Id: user_Id
    }

    console.log('aaaaaaaaaaaaaaaaaaaaaaaa')
    
    console.log('77777777777777777777777777 formData :', paramsForm);

    try{
        const response = await api.post("/user/update", paramsForm);
        console.log('Usuário editado com sucesso:', response.data);
        navigate('/profile')
    } catch (error) {
        console.error('Erro ao criar o post:', error);
    }
};

  return(
      <>        
      <HeaderConfiguration />      
        <FormContainer  >
          <ImgDivProfile>
            <ImgProfile src={ProfileImg} />
          </ImgDivProfile>
          <FormLabel>User name
            <FormInput                           
             value={userEditName}
             onChange={handleInputChange}
              type="text"
            />
          {/* </FormLabel>
          <FormLabel>Senha
            <FormInput
              type="password" // Corrija o tipo para "password"
            /> */}
          </FormLabel>
          <FormLabel>Email
            <FormInput
              value={userEditEmail}
              type="email"
              placeholder="marialuizinha167@gmail.com"
              onChange={handleInputChange2}
            />
          </FormLabel>
          <FormForm onClick={handleSubmit}
          >Salvar alterações
          </FormForm>
          <MenuFeed />
        </FormContainer>
    </> 
  )
}

export default ConfigurationProfile