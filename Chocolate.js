const {connect} = require("./db");
const { Logger } = require("./Logger");
const rd = require("readline")


class Chocolate{
    constructor(sabor, preco, descricao){
        this.sabor = sabor;
        this.preco = preco;
        this.descricao = descricao;
    }

    async insert(){
        try{
            const {db, client} = await connect();
            const result = await db.collection("chocolates").insertOne({
                sabor: this.sabor,
                preco: this.preco,
                descricao: this.descricao,
            })
            console.log("Chocolate inserido", result.insertedId);
            client.close();
        }catch(err){
            Looger.log("Erro ao inserir chocolates: ", err);
            //console.error("ERRO: ", err);
        }
    }

    static async update(filter, newData){
        try{
            const {db, client} = await connect();
            const result = await db.collection("chocolates").updateMany(filter, { $set: newData })
            console.log("Chocolates atualizados", result.modifiedCount);
            client.close();
        }catch(err){
            Logger.log("Erro ao atualizar chocolates: ", err);
            //console.log("ERRO: ", err);
        }
    }

    static async find(filter={}){
        try{
            const {db, client} = await connect();
            const usuarios = await db.collection("chocolates").find(filter).toArray();
            console.log("Chocolates encontrados", usuarios);
            client.close();
        }catch(err){
            Logger.log("Erro ao achar chocolates: ", err);
            
            // console.log("Erro: ", err);
            let retry;
            const consoleIn = rd.createInterface({
                input: process.stdin,
                outuput: process.stdout
            });

            consoleIn.question("Erro ao encontrar chocolate, insira novamente", (retry)=> {
                
            })
        }
    }

    static async delete(sabor) {
        try{
            const {db, client} = await connect();
            const sabor = {sabor: `${sabor}`};
            const result = await db.collection("sabor").deleteOne(sabor);
            console.log("Sabores removidos: ", result.deletedCount);
            client.close();
        }catch(err){
            Logger.log("Erro ao deletar sabor: ", err);
            //console.log("Erro ao deletar usuarios: ", err);
        }
    }
}

module.exports = { Chocolate };