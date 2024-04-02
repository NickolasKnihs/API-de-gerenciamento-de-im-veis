const express = require('express');
const router = express.Router();
const Corretor = require('./modeloCorretor');

//Rota GET CORRETOR
router.get('/corretor', async (requisicao, resposta) => {
    const corretor = await Corretor.findAll();
    resposta.send(corretor); 
})

//Rota POST CORRETOR
router.post('/corretor', (requisicao, resposta) => {
    const nome = requisicao.body.nome;
    const cpf = requisicao.body.cpf;
    const cnpj = requisicao.body.cnpj;
    const dataNascimento = requisicao.body.dataNascimento;
    const codEndereco = requisicao.body.codEndereco;

    Corretor.create ({nome: nome, 
        cpf: cpf, 
        cnpj: cnpj, 
        dataNascimento: dataNascimento, 
        codEndereco: codEndereco}).then(() => {
            resposta.send('Cadastrado com sucesso.');
        }).catch((erro) => {
            resposta.send('Ocorreu um erro: ' + erro);
        });
});

//Rota PUT CORRETOR
router.put('/corretor/:corretorId', (requisicao, resposta) => {
    const codigoCorretor = requisicao.params.corretorId;
    const nome = requisicao.body.nome;
    const cpf = requisicao.body.cpf;
    const cnpj = requisicao.body.cnpj;
    const dataNascimento = requisicao.body.dataNascimento;
    const codEndereco = requisicao.body.codEndereco;

    Corretor.update ({nome: nome, 
        cpf: cpf,
        cnpj: cnpj,
        dataNascimento: dataNascimento,
        codEndereco: codEndereco},
            { where: {
                codCorretor: codigoCorretor
            }   
        }).then(() => {
            resposta.send('Atualizado com sucesso.');
        }).catch((erro) => {
            resposta.send('Ocorreu um erro: ' + erro);
        });
});

//Rota DELETE CORRETOR
router.delete('/corretor/:corretorId', (requisicao, resposta) => {
    const codigoCorretor = requisicao.params.corretorId;
    Corretor.destroy ({ where: {codCorretor: codigoCorretor} }).then(() => {
        resposta.send('Removido com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

//Rota GET individual CORRETOR
router.get('/corretor/:corretorId', async (requisicao, resposta) => {
    const corretorId = requisicao.params.corretorId;
    resposta.json(await Corretor.findByPK(corretorId));
});

module.exports = router;