const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

//routes
const authRouter = require("./routes/authRoutes");

//midllewares - travas do meio de projeto e acesso

//config
const dbName="partyTime"
const port=3000;

const app=express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

//atrelando a primeira rota

app.get("/",(req,res)=>{
    res.json({message : "Rota de teste será trocada!!!"});
});

app.listen(port, ()=>{
    console.log(`O backend está rodando na porta ${port}`)
    });

//conexão mongodb

mongoose.connect(
    `mongodb://127.0.0.1:27017/${dbName}`, {
    useNewUrlParser : true,
    UseUnifiedTopology : true,
    serverSelectionTimeoutMS : 10000
    })

//atrelar as rotas ao express

app.use("/api/auth", authRouter);
    
    