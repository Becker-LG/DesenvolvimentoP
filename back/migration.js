import db from "./db.js"

db.serialize(function(){
    db.run("create table if not exists users(id integer primary key autoincrement, name varchar(255), email varchar(255), pass varchar(255))")
    //db.run("create table if not exists storage(id integer primary key autoincrement, name varchar(255), quantity integer, price real")
    //db.run("create table if not exists client(id integer primary key autoincrement, name varchar(255), email varchar(255), cnpj(18)")
})
/*
db.serialize(function(){
    db.run("create table if not exists stock(id integer primary key autoincrement, name varchar(255), quantity int(), price real()")
})

db.serialize(function(){
    db.run("create table if not exists client(id integer primary key autoincrement, name varchar(255), email varchar(255), cnpj(18)")
})*/
db.close()