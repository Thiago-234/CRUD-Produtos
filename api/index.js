import express from "express";
import produtosRoutes from "./routes/produtos.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/produtos", produtosRoutes);

app.listen(8800);