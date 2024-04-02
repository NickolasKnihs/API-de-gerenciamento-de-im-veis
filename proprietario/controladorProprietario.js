const express = require('express');
const router = express.Router();
const Proprietario = require('./modeloProprietario');

//Rota GET PROPRIETARIO
router.get('/proprietario', async (requisicao, resposta) => {
    const proprietario = await Proprietario.findAll();
    resposta.send(proprietario); 
})

//Rota POST PROPRIETARIO
router.post('/proprietario', (requisicao, resposta) => {
    const nome = requisicao.body.nome;
    const cpf = requisicao.body.cpf;
    const cnpj = requisicao.body.cnpj;
    const dataNascimento = requisicao.body.dataNascimento;
    const codEndereco = requisicao.body.codEndereco;

    Proprietario.create ({nome: nome, 
        cpf: cpf, 
        cnpj: cnpj, 
        dataNascimento: dataNascimento, 
        codEndereco: codEndereco}).then(() => {
            resposta.send('Cadastrado com sucesso.');
        }).catch((erro) => {
            resposta.send('Ocorreu um erro: ' + erro);
        });
});

//Rota PUT PROPRIETARIO
router.put('/proprietario/:proprietarioId', (requisicao, resposta) => {
    const codigoProprietario = requisicao.params.proprietarioId;
    const nome = requisicao.body.nome;
    const cpf = requisicao.body.cpf;
    const cnpj = requisicao.body.cnpj;
    const dataNascimento = requisicao.body.dataNascimento;
    const codEndereco = requisicao.body.codEndereco;

    Proprietario.update ({nome: nome, 
        cpf: cpf,
        cnpj: cnpj,
        dataNascimento: dataNascimento,
        codEndereco: codEndereco},
            { where: {
                codProprietario: codigoProprietario
            }   
        }).then(() => {
            resposta.send('Atualizado com sucesso.');
        }).catch((erro) => {
            resposta.send('Ocorreu um erro: ' + erro);
        });
});

//Rota DELETE PROPRIETARIO
router.delete('/proprietario/:proprietarioId', (requisicao, resposta) => {
    const codigoProprietario = requisicao.params.proprietarioId;
    Proprietario.destroy ({ where: {codProprietario: codigoProprietario} }).then(() => {
        resposta.send('Removido com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

//Rota GET individual PROPRIETARIO
router.get('/proprietario/:proprietarioId', async (requisicao, resposta) => {
    const proprietarioId = requisicao.params.proprietarioId;
    resposta.json(await Proprietario.findByPK(proprietarioId));
});

module.exports = router;

