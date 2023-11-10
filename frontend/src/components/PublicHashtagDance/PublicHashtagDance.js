import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    PopoverAnchor,
    Radio,
    HStack,
    Button,
    Input,
    RadioGroup,
    useBoolean,
  } from '@chakra-ui/react'

  import React from 'react';
  import { useState, useEffect } from 'react';
  import { api } from "../../services/api";
  import { useNavigate } from "react-router-dom";

  function PublicHashtagDance() {
    const [isEditing, setIsEditing] = useBoolean()
    const [color, setColor] = React.useState('purple')
    const [category, setCategory] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      // Evita que o envio do formulário seja tratado de maneira padrão pelo navegador e faz com que você possa determinar as ações futuras.
      e.preventDefault();
      
      let formData = new FormData();
      formData.append('category', category)
      try {
          const response = await api.post('/createPost', formData);    
          console.log('Post criado com sucesso:', response.data);
      } catch (error) {
          console.error('Erro ao criar o post:', error);
      }
  };

  
    return (
      <Popover
        isOpen={isEditing}
        onOpen={setIsEditing.on}
        onClose={setIsEditing.off}
        closeOnBlur={false}
        isLazy
        lazyBehavior='keepMounted'
      >
        <HStack>
          <PopoverAnchor>
            <Input
              color={color}
              w='30vh'
              display='inline-flex'
              isDisabled={!isEditing}
              defaultValue='Dança que abordou na postagem:'
            />
          </PopoverAnchor>
  
          <PopoverTrigger>
            <Button h='40px' colorScheme='purple'>
              {isEditing ? 'Save' : 'Edit'}
            </Button>
          </PopoverTrigger>
        </HStack>
  
        <PopoverContent>
          <PopoverBody>
            Selecione a dança que abordou na postagem:
            <RadioGroup  onClick={handleSubmit}
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}>
              <Radio value='HipHop'>Hiphop</Radio>
              <Radio value='Jazz'>Jazz</Radio>
              <Radio value='ballet'>ballet</Radio>
              <Radio value='Contemporaneo'>Contemporaneo</Radio>
              <Radio value='dança do ventre'>Dança do ventre</Radio>
            </RadioGroup >
          </PopoverBody>
        </PopoverContent>
      </Popover>
    )
  }

export default PublicHashtagDance
