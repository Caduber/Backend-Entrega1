const { connect } = require("./db");
const { Logger } = require("./Logger");

class Usuario {
    constructor(nome, email, senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }
    
    async insert() {
        try {
            const { db, client } = await connect();
            const result = await db.collection("usuarios").insertOne({
                nome: this.nome,
                email: this.email,
                senha: this.senha,
            });
            console.log("Usuário inserido:", result.insertedId);
            client.close();
        }catch (err) {
            Looger.log("Erro ao inserir usuarios: ", err);
            console.error("ERRO: ", err);
        }
    }

    static async update(filter, newData){
        try{
            const {db, client} = await connect();
            const result = await db.collection("usuarios").updateMany({nome: filter}, { $set: newData })
            console.log("Usuarios atualizados", result.modifiedCount);
            client.close();
        }catch(err){
            Logger.log("Erro ao atualizar usuarios: ", err);
            console.log("ERRO: ", err);
        }
    }

    static async find(filter={}){
        try{
            const {db, client} = await connect();
            const usuarios = await db.collection("usuarios").find(filter).toArray();
            console.log("Usuarios encontrados", usuarios);
            client.close();
        }catch(err){
            Logger.log("Erro ao achar usuarios: ", err);
            // console.log("Erro: ", err);
        }
    }

    static async delete(email) {
        try{
            const {db, client} = await connect();
            const usuario = {email: `${email}`};
            const result = await db.collection("usuarios").deleteOne(usuario);
            console.log("Usuarios removidos: ", result.deletedCount);
            client.close();
        }catch(err){
            Logger.log("Erro ao deletar usuarios: ", err);
            //console.log("Erro ao deletar usuarios: ", err);
        }
    }
}

module.exports = {Usuario};