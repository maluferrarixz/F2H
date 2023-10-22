import { useToast,Button } from '@chakra-ui/react'
  import React from "react";
import SendInteraction from "../../Assets/SendCardFeed.svg"
import { ImgFilter } from './styled';


function ToastExample() {
  const toast = useToast()
  return (
    <Button colorScheme='teal' variant='ghost'
      onClick={() =>
        toast({
          title: 'Republicado',
          description: "O conteudo foi republicado em seu perfil",
          status: 'success',
          duration: 500,
          isClosable: true,
        })
      }
    >
          <ImgFilter src={SendInteraction}/>
    </Button>
  )
}
export default ToastExample