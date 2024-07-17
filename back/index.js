import express from "express"
import bodyparser from "body-parser"
import cors from "cors"
import db from "./db.js"

const app = express()
app.use(bodyparser.json())
app.use(cors())
app.post("/cadastro", function(req, res){
    console.log('cadastro', req.body)
    db.serialize(function(){
        db.run("insert into users(email, pass) values(?, ?)", [req.body.email, req.body.pass])
    })
    db.close()
    res.send('dale')
})

app.get("/login/:id", function(req, res){
    const id = req.params.id
    db.serialize(function(){
        db.run("select")
    })
})

/*app.get("/games/:id", function(req, res){
    const id = req.params.id
})*/

app.listen(3000,function(){console.log('Servidor iniciado!')})