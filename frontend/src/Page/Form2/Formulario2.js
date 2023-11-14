import React, { useState, useEffect } from 'react';
import { Button, ButtonContainer, FormContainer, FormForm, TextContainer, TittleContainer } from "./Styled";
import { Link } from "react-router-dom";
import { Checkbox } from '@chakra-ui/react';
// import { api } from "../../services/api";

function Formulario1() {
  const [formData, setFormData] = useState({
    Ansiedade: false,
    Depressão: false,
    "Baixa autoestima": false,
    "Fobia Social": false,
    Vergonha: false,
    Perfeccionismo: false,
    Irritação: false,
    Distorção: false,
  });

  // Função para atualizar o estado e o localStorage
  let teste = {}

  const handleChange = (event) => {
    const { name, type, checked, value } = event.target;

    console.log('value', checked)


    if (checked === true) {
        console.log('name', name, 'value', value)
        teste = {
            ...teste,
            name
        }
    }

    let updatedFormData = {
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    };


    setFormData(updatedFormData);
    console.log('-----------', updatedFormData)

    // Salvar os dados atualizados no localStorage
    localStorage.setItem("formData2", JSON.stringify(updatedFormData));
  };

  // Carregar os dados do localStorage quando o componente for montado
  useEffect(() => {
    const savedFormData = localStorage.getItem("formData2");
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
  }, []);

    // const handleFormSubmit = async (e) => {

    //     e.preventDefault();
    //     console.log('teste', teste)
    //     await api.post("/form", teste)


    // }
  return (
    <>
      <TittleContainer>Formulário</TittleContainer>
      <TextContainer>Agora que optou sua escolha para dança, diga que problema está relacionado a sua melhora!</TextContainer>
      <FormContainer>
        <FormForm>
          <ButtonContainer>
            <Checkbox
              size='lg'
              colorScheme='purple'
              name="Ansiedade"
              isChecked={formData.Ansiedade}
              onChange={handleChange}
            >
              Ansiedade
            </Checkbox>
            <Checkbox
              size='lg'
              colorScheme='purple'
              name="Depressão"
              isChecked={formData.Depressão}
              onChange={handleChange}
            >
              Depressão
            </Checkbox>
          </ButtonContainer>
          <ButtonContainer>
            <Checkbox
              size='lg'
              colorScheme='purple'
              name="Baixa autoestima"
              isChecked={formData["Baixa autoestima"]}
              onChange={handleChange}
            >
              Baixa autoestima
            </Checkbox>
            <Checkbox
              size='lg'
              colorScheme='purple'
              name="Fobia Social"
              isChecked={formData["Fobia Social"]}
              onChange={handleChange}
            >
              Fobia Social
            </Checkbox>
          </ButtonContainer>
          <ButtonContainer>
            <Checkbox
              size='lg'
              colorScheme='purple'
              name="Vergonha"
              isChecked={formData.Vergonha}
              onChange={handleChange}
            >
              Vergonha
            </Checkbox>
            <Checkbox
              size='lg'
              colorScheme='purple'
              name="Perfeccionismo"
              isChecked={formData.Perfeccionismo}
              onChange={handleChange}
            >
              Perfeccionismo
            </Checkbox>
          </ButtonContainer>
          <ButtonContainer>
            <Checkbox
              size='lg'
              colorScheme='purple'
              name="Irritação"
              isChecked={formData.Irritação}
              onChange={handleChange}
            >
              Irritação
            </Checkbox>
            <Checkbox
              size='lg'
              colorScheme='purple'
              name="Distorção"
              isChecked={formData.Distorção}
              onChange={handleChange}
            >
              Distorção
            </Checkbox>
          </ButtonContainer>
        </FormForm>
      </FormContainer>
      <FormContainer>
      </FormContainer>
      <FormContainer>
        <FormForm>
          <Button>
            <Link to="/FormEnd">Próximo</Link>
          </Button>
        </FormForm>
      </FormContainer>
    </>
  );
}

export default Formulario1;
