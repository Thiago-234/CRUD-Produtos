# 🛍️ Sistema de Gerenciamento de Produtos

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![MySQL](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

**Sistema para gerenciamento de produtos com CRUD funcional**

[Características](#-características) •
[Instalação](#-instalação) •
[Como usar](#-como-usar) •
[API](#-api) •
[Tecnologias](#️-tecnologias) •
[Estrutura do Projeto](#-estrutura-do-projeto) •
[Autor](#-autor)

</div>

---

## 🌟 Características

- ✅ **CRUD Completo** - Criar, Ler, Atualizar e Deletar produtos
- 🔄 **Atualizações em Tempo Real** - Interface atualizada automaticamente
- 🛡️ **Validações** - Validação de dados no frontend e backend
- 🚀 **Performance** - Carregamento rápido e eficiente
- 🎯 **UX Intuitiva** - Interface amigável e fácil de usar

## 🚀 Instalação

### Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [MySQL](https://www.mysql.com/) (versão 8.0 ou superior)
- [Git](https://git-scm.com/)

### Passo a Passo

1. **Clone o repositório**
```bash
https://github.com/Thiago-234/CRUD-Produtos.git
cd CRUD-Produtos
```

2. **Configure o Banco de Dados**
```sql
-- No MySQL Workbench ou terminal MySQL:
CREATE DATABASE produtos;
USE produtos;

CREATE TABLE tb_produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    codigo_produto VARCHAR(100) NOT NULL UNIQUE,
    quantidade INT NOT NULL DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

3. **Instale as dependências do Backend**
```bash
cd api
npm install
```

4. **Configure as variáveis do banco**
```javascript
// Em api/db.js - ajuste as credenciais se necessário
export const db = mysql.createConnection({
    host: "localhost",
    user: "usuario_database",
    password: "sua_senha",
    database: "produtos"
});
```

5. **Instale as dependências do Frontend**
```bash
cd ../frontend
npm install
```

## 🎯 Como Usar

### Iniciar o Sistema

1. **Inicie o Backend** (Terminal 1)
```bash
cd api
npm start
```

2. **Inicie o Frontend** (Terminal 2)
```bash
cd frontend
npm start
```

3. **Acesse a aplicação**
   - Abra seu navegador
   - Vá para: `http://localhost:3000`

## 🔌 API

### Endpoints

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/produtos` | Lista todos os produtos |
| `POST` | `/produtos` | Cria um novo produto |
| `PUT` | `/produtos/:codigo` | Atualiza um produto |
| `DELETE` | `/produtos/:codigo` | Deleta um produto |

## 🛠️ Tecnologias

### Frontend
- **React** - Biblioteca para interfaces de usuário
- **Styled Components** - CSS-in-JS para estilização
- **Axios** - Cliente HTTP para APIs
- **React Toastify** - Notificações elegantes
- **React Icons** - Ícones vetoriais

### Backend
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web minimalista

## 📁 Estrutura do Projeto

```
sistema-produtos/
├── 📁 api/                   
│   ├── 📁 controllers/        
│   │   └── produtos.js        
│   ├── 📁 routes/            
│   │   └── produtos.js       
│   ├── db.js                 
│   ├── index.js              
│   └── package.json         
│
├── 📁 frontend/            
│   ├── 📁 src/
│   │   ├── 📁 Components/    
│   │   │   ├── Form.js     
│   │   │   └── Grid.js      
│   │   ├── 📁 Styles/        
│   │   │   └── global.js     
│   │   ├── App.js          
│   │   └── index.js          
│   └── package.json          
│
└── README.md                 
```

## 👨‍💻 Autor
**Desenvolvido por:**
- GitHub: [@Thiago-234](https://github.com/Thiago-234)
