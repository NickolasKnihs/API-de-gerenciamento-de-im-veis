const Sequelize = require ('sequelize');
const conexao = require ('../conexao/conexao');
const Proprietario = conexao.define('proprietario', {
    codProprietario: {
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

Proprietario.sync({
    alter: true
});

module.exports = Proprietario;