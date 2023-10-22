import { useToast,Button } from '@chakra-ui/react'
import React from "react";
import SendInteraction from "../../Assets/SendCardFeed.svg"
import { ImgFilter } from './styled';


function AlertToSave() {
  const toast = useToast()
  return (
    <Button colorScheme='teal' variant='ghost'
      onClick={() =>
        toast({
          title: 'Salvo!',
          description: "O conteudo foi salvo na aba dos favoritos",
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
      }
    >
          <ImgFilter src={SendInteraction}/>
    </Button>
  )
}
export default AlertToSave