const Sequelize = require ('sequelize');
const conexao = require ('../conexao/conexao');
const Endereco = conexao.define('endereco', {
    codEndereco: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    estado: {
        type: Sequelize.CHAR(2),
        allowNull: false
    },
    cidade: {
        type: Sequelize.STRING(65),
        allowNull: false
    },
    bairro: {
        type: Sequelize.STRING(70),
        allowNull: false
    },
    rua: {
        type: Sequelize.STRING(70),
        allowNull: false
    },
    complemento: {
        type: Sequelize.STRING(70),
        allowNull: false
    },
    cep: {
        type: Sequelize.CHAR(8),
        allowNull: false
    }    
}, {timestamps: false});

Endereco.sync({
    alter: true
});

module.exports = Endereco;


