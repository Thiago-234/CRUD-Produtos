import axios from "axios";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
  outline: none;
  font-size: 1rem;
`;

const Label = styled.label``;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

const Form = ({ onEdit, setOnEdit, getProdutos }) => {
  const formRef = useRef();

  useEffect(() => {
    if (onEdit && formRef.current) {
      const form = formRef.current;
      form.nome.value = onEdit.nome;
      form.preco.value = onEdit.preco;
      form.codigo.value = onEdit.codigo_produto;
      form.quantidade.value = onEdit.quantidade;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const nome = form.nome.value.trim();
    const preco = form.preco.value.trim();
    const codigo = form.codigo.value.trim();
    const quantidade = form.quantidade.value.trim();

    if (!nome || !preco || !codigo || !quantidade) {
      return toast.warn("Preencha todos os campos!");
    }

    const produtoData = {
      nome,
      preco: parseFloat(preco),
      codigo_produto: codigo,
      quantidade: parseInt(quantidade),
    };

    console.log("Enviando dados:", produtoData);

    try {
      if (onEdit) {
        await axios.put(`http://localhost:8800/produtos/${onEdit.codigo_produto}`, produtoData);
        toast.success("Produto atualizado com sucesso!");
      } else {
        await axios.post("http://localhost:8800/produtos", produtoData);
        toast.success("Produto cadastrado com sucesso!");
      }

      setOnEdit(null);
      getProdutos();
    } catch (err) {
      toast.error("Erro ao salvar produto.");
    }
  };

  return (
    <FormContainer ref={formRef} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Nome</Label>
        <Input name="nome" type="text" />
      </InputArea>
      <InputArea>
        <Label>Preço</Label>
        <Input name="preco" type="number" step="0.50" min="0.50" />
      </InputArea>
      <InputArea>
        <Label>Código do Produto</Label>
        <Input name="codigo" />
      </InputArea>
      <InputArea>
        <Label>Quantidade</Label>
        <Input name="quantidade" type="number" min="0" />
      </InputArea>
      <Button type="submit">
        {onEdit ? "Atualizar" : "Salvar"}
      </Button>
    </FormContainer>
  );
};

export default Form;