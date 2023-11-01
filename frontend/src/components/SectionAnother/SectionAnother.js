import { ButtonNext, FormContainer, FormForm, LabelContainer, InputContainer } from "./styled"
import { Link } from "react-router-dom"
import React, { useState, useEffect } from "react";

function SectionAnother(){

  const [formData, setFormData] = useState({
    Outro:""
  });

  // Função para atualizar o estado e o localStorage
  const handleChange = (event) => {
    const { name, type, checked, value } = event.target;
    const updatedFormData = {
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    };

    setFormData(updatedFormData);

    // Salvar os dados atualizados no localStorage
    localStorage.setItem("formData", JSON.stringify(updatedFormData));
  };

  // Carregar os dados do localStorage quando o componente for montado
  useEffect(() => {
    const savedFormData = localStorage.getItem("formData");
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
  }, []);



    return(
        <>
    <FormContainer>
    <FormForm>
        <LabelContainer>Se for outro, digite qual!</LabelContainer>
    </FormForm>  
    </FormContainer>
    <FormContainer>
    <FormForm>
    <InputContainer 
    type="text"
    name="Outro"
    value={formData.Outro}
    onChange={handleChange}
    className="input"
    placeholder="Digite o seu problema"
    ></InputContainer>
    </FormForm>
    </FormContainer>
    <FormContainer>
                <FormForm>
                <ButtonNext>
                <Link to= "/Formulario2">   
                    Próximo
                </Link>
                </ButtonNext>
                </FormForm>
            </FormContainer>

        </>
    )
}
export default SectionAnother