const Sequelize = require ('sequelize');
const conexao = require ('../conexao/conexao');
const Cliente = conexao.define('cliente', {
    codCliente: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING(150),
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING(11),
        allowNull: false
    },
    cnpj: {
        type: Sequelize.STRING(14),
        allowNull: false
    },
    dataNascimento: {
        type: Sequelize.DATE,
        allowNull: false
    },
    codEndereco: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: endereco,
            key: 'codEndereco'
        },
        onDelete: 'CASCADE'
    }    
}, {timestamps: false});

Cliente.sync({
    alter: true
});

module.exports = Cliente;