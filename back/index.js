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
        db.run("insert into users(name, email, pass) values(?, ?, ?)", [req.body.name, req.body.email, req.body.pass])
    })
    db.close()
    res.send('dale')
})

/*db.serialize(function(){
    db.all("SELECT id FROM users WHERE email = ? and pass = ?", [email, pass], function(err, rows) {
        if(err) return;
        rows.forEach(function (row) {
            console.log(row.id);
        })
	});	
})
db.close();*/
/*
app.get("/login", function(req, res){
    db.serialize(function(){
        db.all("SELECT * FROM users", function(err, rows) {
            rows.forEach(function (row) {
                console.log(row.email, row.pass);
            })
        });	
    })
    db.close();
})
*/
/*app.get("/games/:id", function(req, res){
    const id = req.params.id
})*/

app.listen(3000,function(){console.log('Servidor iniciado!')})