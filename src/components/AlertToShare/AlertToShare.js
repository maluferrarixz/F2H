import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
    Button,
    useDisclosure,

  } from '@chakra-ui/react'
  import React from "react";
import SendInteraction from "../../Assets/SendCardFeed.svg"
import { ImgFilter } from './styled';


function TransitionExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
  
    return (
      <>
        <Button colorScheme='teal' variant='ghost' onClick={onOpen}>
            <ImgFilter src={SendInteraction}/>
        </Button>
        <AlertDialog
          motionPreset='slideInBottom'
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          isOpen={isOpen}
          isCentered
        >
          <AlertDialogOverlay />
  
          <AlertDialogContent>
            <AlertDialogHeader>Deseja republicar?</AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>
              Se desejar republicar, esta publicação aparecerá em seu perfil para que outras pessoas possam ver.
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                No
              </Button>
              <Button colorScheme='red' ml={3}>
                Yes
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </>
    )
  }
export default TransitionExample