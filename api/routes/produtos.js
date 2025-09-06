import express from "express";
import { addProduto, deletarProduto, getProdutos, atualizarProduto } from "../controllers/produtos.js";

const router = express.Router();

router.get("/", getProdutos);

router.post("/", addProduto);

router.put("/:codigo_produto", atualizarProduto);

router.delete("/:codigo_produto", deletarProduto);


export default router;