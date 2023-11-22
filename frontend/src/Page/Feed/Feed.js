import CardFeed from "../../components/CardFeed/CardFeed";
import HeaderFeed from "../../components/HeaderFeed/HeaderFeed";
import MenuFeed from "../../components/MenuFeed/MenuFeed";
import React, { useEffect, useState } from 'react';
import { api } from "../../services/api";

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const selectedProblemId = localStorage.getItem('selectedProblemId');
        const selectedDanceId = localStorage.getItem('selectedDanceId');

        const fetchData = async () => {
            try {
                const response = await api.get(`/post/post/${selectedDanceId}/${selectedProblemId}`);
                console.log("Resposta da API:", response);

                const postList = response.data.data;
                console.log("Lista de posts:", postList);
  
                setPosts(postList);
            } catch (error) {
                console.error("Erro ao obter os posts:", error.message);
            }
        };

        fetchData();
    }, [/* Dependências para o useEffect, se necessário */]);

    return (
        <>
            <HeaderFeed />
            <CardFeed postContent={posts} />
            <MenuFeed />
        </>
    );
}

export default Feed;
