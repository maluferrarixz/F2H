import React from 'react';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  Button,
} from '@chakra-ui/react';
import SignOutt from '../../Assets/signout.svg';
import { ImgFilter } from './styled';
// import { useState } from 'react';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';

function SignOut() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const [userData, setUserdata] = useState([]);
  const navigate = useNavigate();

  //  const id = localStorage.getItem("id")
  //   const formData = {
  //       id: id
  //   }
    const handleSubmit = (e) => {
      e.preventDefault();
      const id = localStorage.getItem('id');
         if (id){
          try{      
            const response = api.delete(`/user/${id}`)
            localStorage.clear()
            console.log(response)
            navigate('/')
          } catch(error){
           console.log(error)
          }           
  }}

  return (
    <>
      <Button colorScheme='teal' variant='ghost' onClick={onOpen}>
        <ImgFilter src={SignOutt} />
      </Button>

      <AlertDialog isOpen={isOpen} leastDestructiveRef={undefined} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Sair da conta
            </AlertDialogHeader>

            <AlertDialogBody>Tem certeza de que deseja sair da conta?</AlertDialogBody>

            <AlertDialogFooter>
              <Button onClick={onClose}>Voltar</Button>
              <Button colorScheme='red'onClick = {handleSubmit} ml={3}>
                Sair
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

export default SignOut;
