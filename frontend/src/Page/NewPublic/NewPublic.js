import HeaderNewPublic from "../../components/HeaderNewPublic/HeaderNewPublic"
import { InputImg, DivPage, NewImgDiv, InputNewPublic, ButtonNewPublic } from "./styled"
import MenuFeed from "../../components/MenuFeed/MenuFeed"
// import PublicHashtagDance from "../../components/PublicHashtagDance/PublicHashtagDance"
// import PublicHashtagProblem from "../../components/PublicHashtagProblem/PublicHashtagProblem"
import React, { useState, useEffect } from 'react';
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

function NewPublic(){
    const navigate = useNavigate();

    const [image, setImage] = useState('');
    const [preview, setPreview] = useState('');
    const [content, setContent] = useState('');


    // useEffect(() => {
    //     // Define a imagem inicial.
    //     const initialImageUrl = selectedImage2;
    //     setPreview(initialImageUrl);
    // }, []); 
    
    function handleImageChange(e) {
        setImage(e.target.files[0]);
        setPreview(URL.createObjectURL(e.target.files[0]));
    }
    
    useEffect(() => {
        console.log('image', image);
    }, [image]);
    
    useEffect(() => {
        console.log('preview', preview);
    }, [preview]);


    const handleSubmit = async (e) => {
        // Evita que o envio do formulário seja tratado de maneira padrão pelo navegador e faz com que você possa determinar as ações futuras.
        e.preventDefault();
        console.log(image)
        
        let formData = new FormData();
        formData.append('conteudo', content);
        // formData.append('cate', category)
        formData.append('userId', localStorage.getItem('id'));
        formData.append('file', image);

        
        try {
            const response = await api.post('/post/createPost', formData);
            navigate('/Feed')
      
            console.log('Post criado com sucesso:', response.data);
        } catch (error) {
            console.error('Erro ao criar o post:', error);
        }
    };

    const handleImageClick = () => {
        // Ativar click no input que está oculto.
        document.getElementById('imageInput').click();        
    };

    return(
        <>
        <HeaderNewPublic/>       
        <DivPage>
        <NewImgDiv onClick={handleImageClick} >
        <InputImg 
        type="file"
        name="image" 
        accept="image/*" 
        multiple={false} 
        // value={image}
        onChange={ handleImageChange }  id="imageInput"/>    
        </NewImgDiv>
        <InputNewPublic
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="DEIXE AQUI SUA MENSAGEM!"/>        
        {/* <PublicHashtagDance/>
        <PublicHashtagProblem/> */}
        <ButtonNewPublic  onClick={handleSubmit} type="submit">Publicar
        </ButtonNewPublic>
        </DivPage>
        <MenuFeed/>
        </>
    )
}
export default NewPublic