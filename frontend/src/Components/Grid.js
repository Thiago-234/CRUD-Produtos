import React from "react";
import axios from "axios";
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
  word-break: break-all;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

export const Td = styled.td`
  padding-top: 15px;
  text-align: start;
  width: ${(props) => (props.width ? props.width : "auto")};

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

const IconButton = styled.div`
  cursor: pointer;
  padding: 5px;
  border-radius: 3px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0 2px;
  
  &:hover {
    background-color: #f0f0f0;
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

const EditIcon = styled(IconButton)`
  color: #006effff;
  
  &:hover {
    background-color: #e3f2fd;
  }
`;

const DeleteIcon = styled(IconButton)`
  color: #ff0000ff;
  
  &:hover {
    background-color: #ffebee;
  }
`;

const Grid = ({ produtos, setProdutos, setOnEdit }) => {

    const handleDelete = async (codigo) => {
        try {
            const response = await axios.delete(`http://localhost:8800/produtos/${codigo}`);
            const newArray = produtos.filter((produto) => produto.codigo_produto !== codigo);
            setProdutos(newArray);
            toast.success(response.data);
            setOnEdit(null);
        } catch (err) {
            const errorMessage = err.response?.data || "Erro ao deletar produto";
            toast.error(errorMessage);
        }
    };

    const handleEdit = (item) => {
        setOnEdit(item);
    }

    return (
        <Table>
            <Thead>
                <Tr>
                    <Th>Nome</Th>
                    <Th>Preço</Th>
                    <Th onlyWeb>Código</Th>
                    <Th>Quantidade</Th>
                    <Th>Ações</Th>
                </Tr>
            </Thead>
            <Tbody>
                {produtos.map((item, i) => (
                    <Tr key={i}>
                        <Td width="30%">{item.nome}</Td>
                        <Td width="20%">R$ {parseFloat(item.preco).toFixed(2)}</Td>
                        <Td onlyWeb width="20%">{item.codigo_produto}</Td>
                        <Td width="15%">{item.quantidade}</Td>
                        <Td alignCenter width="15%">
                            <EditIcon onClick={() => handleEdit(item)}>
                                <FaEdit />
                            </EditIcon>
                            <DeleteIcon onClick={() => handleDelete(item.codigo_produto)}>
                                <FaTrash />
                            </DeleteIcon>
                        </Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    )
}

export default Grid;