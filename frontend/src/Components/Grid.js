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
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

const Grid = ({ produtos, setProdutos, setOnEdit }) => {

    const handleDelete = async (codigo) => {
        await axios
            .delete("http://localhost:8800/produtos/" + codigo)
            .then(({ data }) => {
                const newArray = produtos.filter((produto) => produto.codigo_produto !== codigo);
                setProdutos(newArray);
                toast.success(data);
            })
            .catch(({ data }) => toast.error(data));
        setOnEdit(null);
    };

    const handleEdit = (item) => {
        setOnEdit(item);
    }


    return (
        <Table>
            <Thead>
                <Tr>
                    <Td>Nome</Td>
                    <Td>Preço</Td>
                    <Td onlyWeb>Código</Td>
                    <Td>Quantidade</Td>
                </Tr>
            </Thead>
            <Tbody>
                {produtos.map((item, i) => (
                    <Tr key={i}>
                        <Td width="30%">{item.nome}</Td>
                        <Td width="20%">{item.preco}</Td>
                        <Td onlyWeb width="20%">{item.codigo_produto}</Td>
                        <Td width="20%">{item.quantidade}</Td>
                        <Td alignCenter width="5%">
                            <FaEdit onClick={() => handleEdit(item)} />
                        </Td>
                        <Td alignCenter width="5%">
                            <FaTrash onClick={() => handleDelete(item.codigo_produto)} />
                        </Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    )
}

export default Grid