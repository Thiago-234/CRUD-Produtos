import express from "express";
import { getProdutos } from "../controllers/produtos.js";

const router = express.Router();

router.get("/", getProdutos);

export default router;