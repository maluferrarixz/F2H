import {
  FormContainer,
  FormForm,
  TextContainer,
  TittleContainer,
  Button
} from "./Styled";
import { Checkbox } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { api } from "../../services/api";

function Formulario1() {
  const [dancas, setDancas] = useState([]);
  const [selectedDance, setSelectedDance] = useState(null);
  const storedUserId = localStorage.getItem("id"); // Obtém o ID do usuário armazenado localmente
  const [userId, setUserId] = useState(storedUserId ? parseInt(storedUserId, 10) : null);
  const [selectedDanceId, setSelectedDanceId] = useState(null);

  const handleCheckboxChange = (dancaId) => {
    console.log('Checkbox Selecionado:', dancaId);
    
    // Armazena o ID da dança no localStorage
    localStorage.setItem('selectedDanceId', dancaId);
  
    setSelectedDance((prevSelected) => {
      console.log('Prev Selected:', prevSelected);
      const newSelected = prevSelected === dancaId ? null : dancaId;
      console.log('New Selected:', newSelected);
      return newSelected;
    });
  };

  const handleSubmit = async () => {
    try {
      if (userId !== null && selectedDance) {
        console.log('ID de Dança Selecionado:', selectedDance);
  
        // Faz uma requisição para a sua API para atualizar o ID de dança do usuário
        await axios.post(`${api.defaults.baseURL}/updateUserDanceId/updateUserDanceId`, {
          id_user: userId, // Use o ID do usuário do localStorage
          id_danca: selectedDance, // Use o ID da dança selecionada
        });
  
        console.log('resposta enviada com sucesso!');
  
        // Limpa o estado após o envio bem-sucedido
        setSelectedDance(null);
      }
    } catch (error) {
      console.error("Erro ao enviar para o back-end:", error);
      // Trate o erro conforme necessário
    }
  };
  
  const fetchDances = async () => {
    try {
      const response = await axios.get(`${api.defaults.baseURL}/dances/dances`);
      console.log(response.data.data);
      setDancas(response.data.data);
    } catch (error) {
      console.error('Erro ao buscar danças:', error);
    }
  };

  useEffect(() => {
    fetchDances();
  }, []);

  return (
    <>
      <TittleContainer>Formulário</TittleContainer>
      <TextContainer>
        Agora que fizeste tua conta, precisamos saber um pouco dos seus gostos
        para dança, para que assim seu perfil possa ficar a sua cara!
      </TextContainer>
      <TextContainer>
        De início, escolha a dança que você gostaria de saber mais ou ver em
        seu feed!
      </TextContainer>
      <FormContainer>
        <FormForm>
          {dancas.map((danca) => (
            <Checkbox
              key={danca.id_danca}
              size="lg"
              colorScheme="purple"
              isChecked={selectedDance === danca.id_danca}
              onChange={() => handleCheckboxChange(danca.id_danca)}
            >
              {danca.nome}
            </Checkbox>
          ))}
        </FormForm>
      </FormContainer>
      <FormContainer>
        <FormForm>
          <Button onClick={handleSubmit}>
            <Link to="/formulario2">Próximo</Link>
          </Button>
        </FormForm>
      </FormContainer>
    </>
  );
}

export default Formulario1;
