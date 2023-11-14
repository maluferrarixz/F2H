import CardFeed from "../../components/CardFeed/CardFeed"
import HeaderFeed from "../../components/HeaderFeed/HeaderFeed"
import MenuFeed from "../../components/MenuFeed/MenuFeed"
import React, { useEffect, useState } from 'react';
import { api } from "../../services/api";

function Feed(){

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('/posts');
                console.log(response)
                const postList = response.data.data;
                setPosts(postList);
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
    }, []);
    return(

        <>
        <HeaderFeed/>
        <CardFeed postContent={posts}/>
        <MenuFeed/>
        </>
    )
}
export default Feed