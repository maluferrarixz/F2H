import { ButtonContainer, ContainerText, ItemText, SectionBody } from "./styled"
import { Link, useNavigate } from "react-router-dom"
import React, { useState, useEffect } from "react";
import axios from "axios";
import { api } from "../../services/api";

function Home() {
    const [userData, setUserData] = useState('');
    const navigate = useNavigate();

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
            } catch (error) {
                console.error("Erro ao buscar dados do usuário ou posts do perfil:", error);
            }
        };

        fetchData();
    }, []);

    // const handleGoToFeed = async () => {
    //     try {

    //         const response = await api.get(`/post/getAllPostsStart`);
    //         console.log("Resposta da API:", response);

    //         const postList = response.data.data;
    //         console.log("Lista de posts:", postList);

    //         // Aqui você pode fazer algo com os dados obtidos antes de navegar para Feed

    //         // Navega para a rota /Feed
    //         navigate("/Feed");
    //     } catch (error) {
    //         console.error("Erro ao obter os posts:", error.message);
    //     }
    // };

    return (
        <>
            <SectionBody>
                <ContainerText>
                    <ItemText>
                        {userData.nome},
                        Permita que a dança seja sua aliada na resolução de problemas internos e na superação de bloqueios, encontrando uma conexão profunda com seu corpo e mente.
                    </ItemText>
                    <ButtonContainer>
                        <Link to="/Formulario1">
                            Fazer formulário
                        </Link>
                    </ButtonContainer>
                    <ButtonContainer>
                        <button>
                            Ir para Feed
                        </button>
                    </ButtonContainer>
                </ContainerText>
            </SectionBody>
        </>
    )
}

export default Home;
