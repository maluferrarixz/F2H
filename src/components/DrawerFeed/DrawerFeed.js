import {
    Drawer,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
   
  } from '@chakra-ui/react'
  import { Select } from '@chakra-ui/react'
  import FilterFeed from "../../Assets/FilterFeed.png"
  import React from "react";
import {ImgFilter} from "./styled"

  function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
         <Button ref={btnRef} colorScheme='teal' variant='ghost' onClick={onOpen} >
            <ImgFilter src={FilterFeed}/>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Selecione o que deseja ver</DrawerHeader>
  
            <Select colorScheme='teal' variant='ghost' placeholder='Selecione a dança'>
            <option value='option1'>HipHop</option>
            <option value='option2'>Jazz</option>
            <option value='option3'>Ballet</option>
            </Select>
            <Select colorScheme='teal' variant='ghost' placeholder='Selecione a melhoria'>
            <option value='option1'>Ansiedade</option>
            <option value='option2'>Depressão</option>
            <option value='option3'>Financeiro</option>
            </Select>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Fechar
              </Button>
              <Button colorScheme='blue'>Filtrar</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }
export default DrawerExample