const Sequelize = require ('sequelize');
const conexao = require ('../conexao/conexao');
const Corretor = conexao.define('corretor', {
    codCorretor: {
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

Corretor.sync({
    alter: true
});

module.exports = Corretor;