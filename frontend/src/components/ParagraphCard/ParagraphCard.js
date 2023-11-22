import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
  } from '@chakra-ui/react'

import { ImgFilter } from './Styled'
import Paragraph from "../../Assets/paragraph.svg"

  function BasicUsage( props ) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen} colorScheme='teal' variant='ghost'>
            <ImgFilter src={Paragraph}/>
        </Button>
  
        <Modal style={{margin:"10px"}}isOpen={isOpen} onClose={onClose} >
          <ModalOverlay  />
          <ModalContent>
            <ModalHeader>Parágrafo do usuário</ModalHeader>
            <ModalCloseButton />
            <ModalBody >
              {props.conteudo}
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='purple' mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default BasicUsage