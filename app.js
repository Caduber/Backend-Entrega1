const { Chocolate } = require("./Chocolate");
const {Usuario} = require("./Usuario");

async function testaInsert(){
    // CHOCOLATE
    //const chocolate = new Chocolate("Trufa", 27.99, "Trufas de chocolate ao leite de 85g");
    //await chocolate.insert();
    
    //USUARIO
    const usuario = new Usuario("Thiago", "thiago@fakemail.com.br", "segredo");
    //await usuario.insert();
    // ******************await Usuario.update("nome: Matheus");
    //await Usuario.find({nome: "Thiago"});
    //await Usuario.delete("thiago@fakemail.com.br");

    const chocolate = new Chocolate("bombom", 23.90, "Uma caixa de bombons sortidos");
    // await chocolate.insert();    
    await Chocolate.find("bombom");

    console.log("fim");
}

testaInsert();
