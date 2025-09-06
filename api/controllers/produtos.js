import { db } from "../db.js";

export const getProdutos = (_, res) => {
    const q = "SELECT * FROM tb_produtos;";

    db.query(q, (err, data) => {
        if (err) {
            console.error("Erro ao buscar produtos:", err);
            return res.status(500).json(err);
        }
        return res.status(200).json(data);
    });
};

export const addProduto = (req, res) => {
    const q = "INSERT INTO tb_produtos(`nome`, `preco`, `codigo_produto`, `quantidade`) VALUES (?)";

    const values = [
        req.body.nome,
        req.body.preco,
        req.body.codigo_produto,
        req.body.quantidade,
    ];

    db.query(q, [values], (err) => {
        if (err) {
            console.error("Erro ao cadastrar produto:", err);
            return res.status(500).json(err);
        }
        return res.status(200).json("Produto cadastrado com sucesso!");
    });
}

export const atualizarProduto = (req, res) => {
    const q = "UPDATE tb_produtos SET `nome` = ?, `preco` = ?, `codigo_produto` = ?, `quantidade` = ? WHERE codigo_produto = ?";

    const values = [
        req.body.nome,
        req.body.preco,
        req.body.codigo_produto,
        req.body.quantidade,
    ];

    db.query(q, [...values, req.params.codigo_produto], (err) => {
        if (err) {
            console.error("Erro ao atualizar produto:", err);
            return res.status(500).json(err);
        }
        
        return res.status(200).json("Produto atualizado com sucesso!");
    });
}

export const deletarProduto = (req, res) => {
    const q = "DELETE FROM tb_produtos WHERE codigo_produto = ?";

    db.query(q, [req.params.codigo_produto], (err) => {
        if (err) {
            console.error("Erro ao deletar produto:", err);
            return res.status(500).json(err);
        }
        
        return res.status(200).json("Produto deletado com sucesso!");
    });
}