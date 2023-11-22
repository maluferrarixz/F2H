import { useToast, Button } from '@chakra-ui/react';
import React, { useEffect, useState } from "react";
import SendInteraction from "../../Assets/SaveCard.svg";
import { ImgFilter } from './styled';

import { api } from "../../services/api";

function AlertToSave(props) {
  const toast = useToast();

  // const [isSave, setIsSave] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const id_user = parseInt(localStorage.getItem('id'));

  useEffect(() => {
    // Lógica adicional pode ser adicionada aqui, se necessário
  }, [props.id_post]);

  const handleClick = async () => {
    try {
      const formData = {
        id_user: id_user,
        PostID: props.id_post,
      };
      await api.post(`${api.defaults.baseURL}/save/save/action`, formData);

      // Altera o estado do botão clicado
      setButtonClicked(true);

      // Após o clique, busca o novo status do like se necessário
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Button
      colorScheme='red'
      variant='ghost'
      onClick={() => {
        handleClick();

        // Verifica se o botão já foi clicado antes de exibir a mensagem
        if (buttonClicked) {
          toast({
            title: 'Removido dos Salvos',
            description: 'O conteúdo foi salvo na pagina de salvos.',
            status: 'success',
            duration: 500,
            isClosable: true,
          });
        } else {
          toast({
            title: 'Salvo',
            description: 'O conteúdo foi removido da pagina de salvos.',
            status: 'success',
            duration: 500,
            isClosable: true,
          });
        }
      }}
    >
      <ImgFilter src={SendInteraction} />
    </Button>
  );
}

export default AlertToSave;
