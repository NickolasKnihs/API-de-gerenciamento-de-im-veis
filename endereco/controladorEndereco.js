const express = require('express');
const router = express.Router();
const Endereco = require('./modeloEndereco');

//Rota GET ENDERECO
router.get('/endereco', async (requisicao, resposta) => {
    const endereco = await Endereco.findAll();
    resposta.send(endereco); 
})

//Rota POST ENDERECO
router.post('/endereco', (requisicao, resposta) => {
    const estado = requisicao.body.estado;
    const cidade = requisicao.body.cidade;
    const bairro = requisicao.body.bairro;
    const rua = requisicao.body.rua;
    const complemento = requisicao.body.complemento;
    const cep = requisicao.body.cep;

    Endereco.create ({estado: estado,
        cidade: cidade,
        bairro: bairro,
        rua: rua,
        complemento: complemento,
        cep: cep}).then(() => {
            resposta.send('Cadastrado com sucesso.');
        }).catch((erro) => {
            resposta.send('Ocorreu um erro: ' + erro);
        });
});

//Rota PUT ENDERECO
router.put('/endereco/:enderecoId', (requisicao, resposta) => {
    const codigoEndereco = requisicao.params.enderecoId;
    const estado = requisicao.body.estado;
    const cidade = requisicao.body.cidade;
    const bairro = requisicao.body.bairro;
    const rua = requisicao.body.rua;
    const complemento = requisicao.body.complemento;
    const cep = requisicao.body.cep;

    Endereco.update ({estado: estado,
        cidade: cidade,
        bairro: bairro,
        rua: rua,
        complemento: complemento,
        cep: cep},
            { where: {
                codEndereco: codigoEndereco
            }   
        }).then(() => {
            resposta.send('Atualizado com sucesso.');
        }).catch((erro) => {
            resposta.send('Ocorreu um erro: ' + erro);
        });
});

//Rota DELETE ENDERECO
router.delete('/endereco/:enderecoId', (requisicao, resposta) => {
    const codigoEndereco = requisicao.params.enderecoId;
    Endereco.destroy ({ where: {codEndereco: codigoEndereco} }).then(() => {
        resposta.send('Removido com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

//Rota GET individual ENDERECO
router.get('/endereco/:enderecoId', async (requisicao, resposta) => {
    const enderecoId = requisicao.params.enderecoId;
    resposta.json(await Endereco.findByPK(enderecoId));
});

module.exports = router;