import express from "express";
import produtosRoutes from "./routes/produtos.js";
import cors from "cors";

const app = express();

app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use(express.json());
app.use("/produtos", produtosRoutes);

app.listen(8800);