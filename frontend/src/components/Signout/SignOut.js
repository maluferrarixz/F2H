import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    useDisclosure,
    Button,

  } from '@chakra-ui/react'
import React from 'react'
import SignOutt from "../../Assets/signout.svg"
import { ImgFilter } from './styled'
// import { useNavigate } from "react-router-dom"
// import axios from "axios"
// import { baseUrl } from "../../services/api"
// import { useToast } from "@chakra-ui/react"




  function SignOut() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
  
    return (
      <>
        <Button colorScheme='teal' variant='ghost' onClick={onOpen}>
        <ImgFilter src={SignOutt}/>
        </Button>
  
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                Sair da conta
              </AlertDialogHeader>
  
              <AlertDialogBody>
                Tem certeza de que deseja sair da conta?
              </AlertDialogBody>
  
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                Voltar
                </Button>
                <Button colorScheme='red' onClick={onClose} ml={3}>
                  Sair
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    )
  }
export default SignOut