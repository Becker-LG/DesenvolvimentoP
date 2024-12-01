import express from "express"
import bodyparser from "body-parser"
import cors from "cors"
import db from "./db.js"

const app = express()
app.use(bodyparser.json())
app.use(cors())

//cadastro geral ==================================================================================================================

app.post("/cadastro", function(req, res){
    console.log('cadastro', req.body)
    db.serialize(function(){
        db.run("insert into users(name, email, pass) values(?, ?, ?)", [req.body.name, req.body.email, req.body.pass])
    })
    db.close()
    res.send('dale')
})

app.post("/login", function(req, res){
    db.serialize(function(){
        db.all("SELECT id FROM users WHERE email = ? and pass = ?", [req.body.email, req.body.pass], function(err, rows) {
            if(err) return res.sendStatus(401);
            if(rows && rows[0] && rows[0].id) return res.sendStatus(200);
            res.sendStatus(401);
        });	
    })
    //db.close();
})

//cadastro empresas ==================================================================================================================

app.post("/cadastroEmpresa", function(req, res){
    console.log('cadastro empresa', req.body)
    db.serialize(function(){
        db.run("insert into company(name, email, cnpj) values(?, ?, ?)", [req.body.name, req.body.email, req.body.cnpj])
    })
    db.close()
    res.send('dale')
})

//cadastro clientes ==================================================================================================================

app.post("/cadastroCliente", function(req, res){
    console.log('cadastro cliente', req.body)
    db.serialize(function(){
        db.run("insert into client(name, email, cpf) values(?, ?, ?)", [req.body.name, req.body.email, req.body.cpf])
    })
    db.close()
    res.send('dale')
})

//cadastro estoque ==================================================================================================================

app.post("/cadastroEstoque", function(req, res){
    console.log('cadastro estoque', req.body)
    db.serialize(function(){
        db.run("insert into storage(name, quantity, price) values(?, ?, ?)", [req.body.name, req.body.quantity, req.body.price])
    })
    db.close()
    res.send('dale')
})

/*app.get("/games/:id", function(req, res){
    const id = req.params.id
})*/

app.listen(3000,function(){console.log('Servidor iniciado!')})