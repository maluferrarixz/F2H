import HeaderNewPublic from "../../components/HeaderNewPublic/HeaderNewPublic"
import { InputImg, DivPage, NewImgDiv, InputNewPublic, ButtonNewPublic, ImgPreview } from "./styled"
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
        e.preventDefault();
        console.log(image);

    
        const selectedProblemId = localStorage.getItem('selectedProblemId');
        const selectedDanceId = localStorage.getItem('selectedDanceId');
        
        
        let formData = new FormData();        
        formData.append('id_user', localStorage.getItem('id'));
        formData.append('file', image);
        formData.append('conteudo', content);
        formData.append('selectedProblemId', selectedProblemId);
        formData.append('selectedDanceId', selectedDanceId);
        formData.append('name', localStorage.getItem('name'));

        try {
            const response = await api.post('/post/createPost', formData);
            navigate('/Feed');
    
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
        {preview &&(
            <div>
                <ImgPreview src={preview} alt="imagem selecionda"/>
            </div>
        )}
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