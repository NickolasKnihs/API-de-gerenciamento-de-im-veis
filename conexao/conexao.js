const Sequelize = require ('sequelize');

const conexao = new Sequelize('nodejs', 'root', 'Santos$1001', {
    host: '127.0.0.1',
    dialect: 'mysql',
    port: '3307'
});

conexao.authenticate().then(() => {
    console.log('Conectado com sucesso.');
}).catch((erro) => {
    console.log('Deu erro: ', erro);
});

module.exports = conexao;