const { connect } = require("./db");
const { Logger } = require("./Logger");

class Venda {
    constructor(produto, usuario, endereco, valor) {
        this.produto = produto;
        this.usuario = usuario;
        this.endereco = endereco;
        this.valor = valor;
    }

    async insert() {
        try {
            const { db, client } = await connect();
            const result = await db.collection("vendas").insertOne({
                produto: this.produto,
                usuario: this.usuario,
                endereco: this.endereco,
                valor: this.valor,
            });
            console.log("Venda inserida:", result.insertedId);
            client.close();
        } catch (err) {
            Logger.log("Erro ao inserir venda: ", err);
            console.error("ERRO: ", err);
        }
    }

    static async update(filter, newData) {
        try {
            const { db, client } = await connect();
            const result = await db.collection("vendas").updateMany(filter, { $set: newData });
            console.log("Vendas atualizadas:", result.modifiedCount);
            client.close();
        } catch (err) {
            Logger.log("Erro ao atualizar vendas: ", err);
            console.error("ERRO: ", err);
        }
    }

    static async find(filter = {}) {
        try {
            const { db, client } = await connect();
            const vendas = await db.collection("vendas").find(filter).toArray();
            console.log("Vendas encontradas:", vendas);
            client.close();
        } catch (err) {
            Logger.log("Erro ao buscar vendas: ", err);
            console.error("ERRO: ", err);
        }
    }

    static async delete(filter) {
        try {
            const { db, client } = await connect();
            const result = await db.collection("vendas").deleteMany(filter);
            console.log("Vendas removidas:", result.deletedCount);
            client.close();
        } catch (err) {
            Logger.log("Erro ao deletar vendas: ", err);
            console.error("ERRO: ", err);
        }
    }
}

module.exports = { Venda };
