import HeaderSavePublication from "../../components/HeaderSavePublication/HeaderSavePublication"
import CardFeed from "../../components/CardFeed/CardFeed"


import axios from "axios"
import { useState,useEffect } from "react"
import { api } from "../../services/api"



function SavePublication (){
    const [posts, setPosts] = useState([]);
    
    // pega as informações do usuário baseadas no email

    useEffect(() => {
      const fetchData = async () => {
          try {
              const userID = localStorage.getItem("id");
              console.log("ID do usuário:", userID);

              if (!userID) {
                  console.error("ID do usuário não encontrado no localStorage");
                  return;
              }

              const response = await api.get(`/list/save/${userID}`);
              console.log("Resposta da API:", response);

              const postList = response.data.data;
              console.log("Lista de posts:", postList);

              setPosts(postList.results);
          } catch (error) {
              console.error("Erro ao obter os posts:", error.message);
          }
      };

      fetchData();
  }, []);
    return(
        <>
        <HeaderSavePublication/>
        <CardFeed postContent={posts}/>
        </>
    )

}

export default SavePublication