const Sequelize = require ('sequelize');
const conexao = require ('../conexao/conexao');
const Imovel = conexao.define('imovel', {
    codImovel: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    descricao: {
        type: Sequelize.STRING(400),
        allowNull: false
    },
    areaMetros: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    codTipoImovel: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: tipoImovel,
            key: 'codTipoImovel'
        },
        onDelete: 'CASCADE'
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

Imovel.sync({
    alter: true
});

module.exports = Imovel;