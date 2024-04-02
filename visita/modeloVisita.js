const Sequelize = require ('sequelize');
const conexao = require ('../conexao/conexao');
const Visita = conexao.define('visita', {
    codImovel: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        references: {
            model: imovel,
            key: 'codImovel'
        },
        onDelete: 'CASCADE'
    },
    codCliente: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        references: {
            model: Cliente,
            key: 'codCliente'
        },
        onDelete: 'CASCADE'
    },
    dataVisita: {
        type: Sequelize.DATE,
        allowNull: false
    },
    visitaRealizada: {
        type: Sequelize.STRING,
        allowNull: false
    } 
}, {timestamps: false});

Visita.sync({
    alter: true
});

module.exports = Visita;