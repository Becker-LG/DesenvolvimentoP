import db from "./db.js"

db.serialize(function(){
    db.run("create table if not exists users(id integer primary key autoincrement, name varchar(255), email varchar(255), pass varchar(255))")
})

db.close()