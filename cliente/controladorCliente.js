const express = require('express');
const router = express.Router();
const Cliente = require('./modeloCliente');

//Rota GET CLIENTE
router.get('/cliente', async (requisicao, resposta) => {
    const cliente = await Cliente.findAll();
    resposta.send(cliente); 
})

//Rota POST CLIENTE
router.post('/cliente', (requisicao, resposta) => {
    const nome = requisicao.body.nome;
    const cpf = requisicao.body.cpf;
    const cnpj = requisicao.body.cnpj;
    const dataNascimento = requisicao.body.dataNascimento;
    const codEndereco = requisicao.body.codEndereco;

    Cliente.create ({nome: nome, 
        cpf: cpf, 
        cnpj: cnpj, 
        dataNascimento: dataNascimento, 
        codEndereco: codEndereco}).then(() => {
            resposta.send('Cadastrado com sucesso.');
        }).catch((erro) => {
            resposta.send('Ocorreu um erro: ' + erro);
        });
});

//Rota PUT CLIENTE
router.put('/cliente/:clienteId', (requisicao, resposta) => {
    const codigoCliente = requisicao.params.clienteId;
    const nome = requisicao.body.nome;
    const cpf = requisicao.body.cpf;
    const cnpj = requisicao.body.cnpj;
    const dataNascimento = requisicao.body.dataNascimento;
    const codEndereco = requisicao.body.codEndereco;

    Cliente.update ({nome: nome, 
        cpf: cpf,
        cnpj: cnpj,
        dataNascimento: dataNascimento,
        codEndereco: codEndereco},
            { where: {
                codCliente: codigoCliente
            }   
        }).then(() => {
            resposta.send('Atualizado com sucesso.');
        }).catch((erro) => {
            resposta.send('Ocorreu um erro: ' + erro);
        });
});

//Rota DELETE CLIENTE
router.delete('/cliente/:clienteId', (requisicao, resposta) => {
    const codigoCliente = requisicao.params.clienteId;
    Cliente.destroy ({ where: {codCliente: codigoCliente} }).then(() => {
        resposta.send('Removido com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

//Rota GET individual CLIENTE
router.get('/cliente/:clienteId', async (requisicao, resposta) => {
    const clienteId = requisicao.params.clienteId;
    resposta.json(await Cliente.findByPK(clienteId));
});

module.exports = router;