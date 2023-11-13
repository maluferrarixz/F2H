import {
  FormContainer,
  FormForm,
  TextContainer,
  TittleContainer,
  Button
} from "./Styled";
// import SectionAnother from "../../components/SectionAnother/SectionAnother";
import { Checkbox } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Formulario1() {
  const [formData, setFormData] = useState({
    HipHop: false,
    Ballet: false,
    Contemporâneo: false,
    Jazz: false,
    "Dança do vêntre": false,
    Funk: false,

  });

  // Função para atualizar o estado e o localStorage
  const handleChange = (event) => {
    const { name, type, checked, value } = event.target;

    // Se a opção atualmente marcada for desmarcada, ou se a opção não estava marcada
    if (!checked || !formData[name]) {
      const updatedFormData = {
        ...formData,
        HipHop: false,
        Ballet: false,
        Contemporâneo: false,
        Jazz: false,
        "Dança do vêntre": false,
        Funk: false,
        [name]: checked,
      };

      setFormData(updatedFormData);

      // Salvar os dados atualizados no localStorage
      localStorage.setItem("formData", JSON.stringify(updatedFormData));
    }
  };

  // Carregar os dados do localStorage quando o componente for montado
  useEffect(() => {
    const savedFormData = localStorage.getItem("formData");
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
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
          <Checkbox
            size="lg"
            colorScheme="purple"
            name="HipHop"
            isChecked={formData.HipHop}
            onChange={handleChange}
          >
            HipHop
          </Checkbox>
          <Checkbox
            size="lg"
            colorScheme="purple"
            name="Ballet"
            isChecked={formData.Ballet}
            onChange={handleChange}
          >
            Ballet
          </Checkbox>
          <Checkbox
            size="lg"
            colorScheme="purple"
            name="Contemporâneo"
            isChecked={formData.Contemporâneo}
            onChange={handleChange}
          >
            Contemporâneo
          </Checkbox>
          <Checkbox
            size="lg"
            colorScheme="purple"
            name="Jazz"
            isChecked={formData.Jazz}
            onChange={handleChange}
          >
            Jazz
          </Checkbox>
          <Checkbox
            size="lg"
            colorScheme="purple"
            name="Dança do vêntre"
            isChecked={formData["Dança do vêntre"]}
            onChange={handleChange}
          >
            Dança do vêntre
          </Checkbox>
          <Checkbox
            size="lg"
            colorScheme="purple"
            name="Funk"
            isChecked={formData.Funk}
            onChange={handleChange}
          >
            Funk
          </Checkbox>
        </FormForm>
      </FormContainer>
      <FormContainer>
        <FormForm>
          <Button>
            <Link to="/formulario2">Próximo</Link>
          </Button>
        </FormForm>
      </FormContainer>
    </>
  );
}

export default Formulario1;
