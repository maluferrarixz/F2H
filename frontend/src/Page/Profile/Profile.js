import React, { useState, useEffect } from "react";
import axios from "axios";
import { api } from "../../services/api";
import { TittleProfile, ProfileSection, ImgProfile, ImgDivProfile } from "./styled";
import ProfileImg from "../../Assets/ProfileImgCard.jpg";
import MenuFeed from "../../components/MenuFeed/MenuFeed";
import CardFeed from "../../components/CardFeed/CardFeed";
import SignOut from "../../components/Signout/SignOut";
import { useNavigate } from "react-router-dom"


function Profile() {
  const [profilePosts, setProfilePosts] = useState([]);
  const [republicPosts, setRepublicPosts] = useState([]);
  const [userData, setUserData] = useState('');

  const userId = parseInt(localStorage.getItem("id"), 10)
  const navigate = useNavigate()


  const [userEditName, setEditUserName] = useState('');
  const [userEditEmail, setEditUserEmail] = useState('');
  const [userEditPassword, setEditUserPassword] = useState('');


  useEffect(() => {
    const fetchData = async () => {
      try {
        const userEmail = localStorage.getItem("user").replace(/"/g, '');
        const userResponse = await axios.get(`${api.defaults.baseURL}/user/information/${userEmail}`);
        const userDataFromServer = userResponse.data;
        setUserData(userDataFromServer.data);

        const userID = localStorage.getItem("id");
        if (!userID) {
          console.error("ID do usuário não encontrado no localStorage");
          return;
        }

        const profileResponse = await api.get(`/postProfile/post/profile/${userID}`);
        const profilePostList = profileResponse.data.data;
        setProfilePosts(profilePostList);
      } catch (error) {
        console.error("Erro ao buscar dados do usuário ou posts do perfil:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userID = localStorage.getItem("id");
        console.log("ID do usuário:", userID);

        if (!userID) {
          console.error("ID do usuário não encontrado no localStorage");
          return;
        }

        const response = await api.get(`/list/republic/${userID}`);
        console.log("Resposta da API:", response);

        const republicPostList = response.data.data.results;
        console.log("Lista de posts republicads:", republicPostList);

        setRepublicPosts(republicPostList);
      } catch (error) {
        console.error("Erro ao obter os posts da república:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <ProfileSection>
        <SignOut />
        <ImgDivProfile>
          <ImgProfile src={ProfileImg} />
        </ImgDivProfile>
        <TittleProfile>@{userData.nome}</TittleProfile>
      </ProfileSection>
            <CardFeed postContent={republicPosts} />
            <CardFeed postContent={profilePosts} />
      {/* Renderizar os posts de REPUBLIC aqui */}
      <MenuFeed />
    </>
  );
}

export default Profile;
