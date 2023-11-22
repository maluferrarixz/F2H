// import React, { useState, useEffect } from 'react';
import { Button,  FormContainer, FormForm, TextContainer, TittleContainer } from "./Styled";
import { Checkbox } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { api } from "../../services/api";


// import { api } from "../../services/api";

function Formulario1() {
  const [problemas, setProblemas] = useState([]);
  const [selectedDance, setSelectedDance] = useState(null);
  const storedUserId = localStorage.getItem("id"); // Obtém o ID do usuário armazenado localmente
  const [userId] = useState(storedUserId ? parseInt(storedUserId, 10) : null);
  const navigate = useNavigate();

  const handleCheckboxChange = (dancaId) => {
    console.log('Checkbox Selecionado:', dancaId);
    
    // Armazena o ID da dança no localStorage
    localStorage.setItem('selectedProblemId', dancaId);
  
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
        await axios.post(`${api.defaults.baseURL}/updateUserProblemId/updateUserProblemId`, {
          id_user: userId, // Use o ID do usuário do localStorage
          id_problema: selectedDance, // Use o ID da dança selecionada
        });
  
        console.log('resposta enviada com sucesso!');
        navigate('/FormEnd')
  
        // Limpa o estado após o envio bem-sucedido
        setSelectedDance(null);
      }
    } catch (error) {
      console.error("Erro ao enviar para o back-end:", error);
      // Trate o erro conforme necessário
    }
  };


  const fetchProblems = async () => {
    try {
      const response = await axios.get(`${api.defaults.baseURL}/problems/problems`);
      console.log(response.data.data);
      setProblemas(response.data.data);
    } catch (error) {
      console.error('Erro ao buscar danças:', error);
    }
  };

  useEffect(() => {
    fetchProblems();
  }, []);

  return (
    <>
      <TittleContainer>Formulário</TittleContainer>
      <TextContainer>Agora que optou sua escolha para dança, diga que problema está relacionado a sua melhora!</TextContainer>
      <FormContainer>
        <FormForm>
        {problemas.map((problema) => (
            <Checkbox
              key={problema.id_problema}
              size="lg"
              colorScheme="purple"
              isChecked={selectedDance === problema.id_problema}
              onChange={() => handleCheckboxChange(problema.id_problema)}
            >
              {problema.nome}
            </Checkbox>
          ))}
        </FormForm>
      </FormContainer>
      <FormContainer>
      </FormContainer>
      <FormContainer>
        <FormForm>
          <Button onClick={handleSubmit}>
            <Link to="/FormEnd">Próximo</Link>
          </Button>
        </FormForm>
      </FormContainer>
    </>
  );
}

export default Formulario1;
