import db from "./db.js"

db.serialize(function() {
    db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(255), email VARCHAR(255), pass VARCHAR(255))");
    db.run("CREATE TABLE IF NOT EXISTS storage (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(255), quantity INTEGER, price REAL)");
    db.run("CREATE TABLE IF NOT EXISTS client(id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(255), email VARCHAR(255), cpf VARCHAR(14))")
    db.run("CREATE TABLE IF NOT EXISTS company(id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(255), email VARCHAR(255), cnpj VARCHAR(18))")
});
db.close();