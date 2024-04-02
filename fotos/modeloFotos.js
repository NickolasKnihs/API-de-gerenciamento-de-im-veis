const Sequelize = require ('sequelize');
const conexao = require ('../conexao/conexao');
const Fotos = conexao.define('fotos', {
    codImagem: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    chaveAws: {
        type: Sequelize.CHAR(36),
        allowNull: false
    },
    codImovel: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Imovel,
            key: 'codImovel'
        },
        onDelete: 'CASCADE'
    }    
}, {timestamps: false});

Fotos.sync({
    alter: true
});

module.exports = Fotos;


