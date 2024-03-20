import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./database.db", function(error){
    if(error){
        console.log('Erro ao conectar com o banco de dados!')
    }
    else{
        console.log('Conectado ao banco de dados!')
    }
})

export default db