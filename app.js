const { Chocolate } = require("./Chocolate");
const {Usuario} = require("./Usuario");
const {Venda} = require("./Venda");

async function testaInsert(){
    // CHOCOLATE
    //const chocolate = new Chocolate("Trufa", 27.99, "Trufas de chocolate ao leite de 85g");
    //await chocolate.insert();
    
    //USUARIO
    const usuario = new Usuario("Thiago", "thiago@fakemail.com.br", "segredo");
    //await usuario.insert();
    // await Usuario.update("Clever", { nome:"Cadu" });
    //await Usuario.find({nome: "Thiago"});
    //await Usuario.delete("thiago@fakemail.com.br");

    const chocolate = new Chocolate("bombom", 23.90, "Uma caixa de bombons sortidos");
    // await chocolate.insert();    
    // await Chocolate.update("bombom", { sabor: "Bomons"});
    // await Chocolate.find({sabor: "Trufa"});
    // dar throw no tratamento de excessões e pegar aqui e tratar, dps re executar a funcão com o novo parametros q o usuario informar
    // await Chocolate.delete("Trufa");

    const venda = new Venda("Chocolates sortidos", "Bruno", "Avenida Castelo Branco", 47.69);
    //await venda.insert();
    // await Venda.find({usuario: "Cadu"});
    // await Venda.update("Cadu", {produto: "Bombom e Trufas", valor: 99.95});
    // await Venda.delete("Bruno");

    console.log("fim");
}

testaInsert();
