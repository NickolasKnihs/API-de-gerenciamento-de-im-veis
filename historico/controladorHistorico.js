const express = require('express');
const router = express.Router();
const Historico = require('./modeloHistorico');

//Rota GET HISTORICO
router.get('/historico', async (requisicao, resposta) => {
    const historico = await Historico.findAll();
    resposta.send(historico); 
})

//Rota POST HISTORICO
router.post('/historico', (requisicao, resposta) => {
    const dataNegociacao = requisicao.body.dataNegociacao;
    const percentualComissao = requisicao.body.percentualComissao;
    const codImovel = requisicao.body.codImovel;
    const codCliente = requisicao.body.codCliente;
    const codCorretor = requisicao.body.codCorretor;

    Historico.create ({dataNegociacao: dataNegociacao, 
        percentualComissao: percentualComissao, 
        codImovel: codImovel, 
        codCliente: codCliente, 
        codCorretor: codCorretor}).then(() => {
            resposta.send('Cadastrado com sucesso.');
        }).catch((erro) => {
            resposta.send('Ocorreu um erro: ' + erro);
        });
});

//Rota PUT HISTORICO
router.put('/historico/:historicoId', (requisicao, resposta) => {
    const codigoHistorico = requisicao.params.historicoId;
    const dataNegociacao = requisicao.body.dataNegociacao;
    const percentualComissao = requisicao.body.percentualComissao;
    const codImovel = requisicao.body.codImovel;
    const codCliente = requisicao.body.codCliente;
    const codCorretor = requisicao.body.codCorretor;

    Historico.update ({dataNegociacao: dataNegociacao, 
        percentualComissao: percentualComissao, 
        codImovel: codImovel, 
        codCliente: codCliente, 
        codCorretor: codCorretor},
            { where: {
                codHistorico: codigoHistorico
            }   
        }).then(() => {
            resposta.send('Atualizado com sucesso.');
        }).catch((erro) => {
            resposta.send('Ocorreu um erro: ' + erro);
        });
});

//Rota DELETE HISTORICO
router.delete('/historico/:historicoId', (requisicao, resposta) => {
    const codigoHistorico = requisicao.params.historicoId;
    Historico.destroy ({ where: {codHistorico: codigoHistorico} }).then(() => {
        resposta.send('Removido com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

//Rota GET individual HISTORICO
router.get('/historico/:historicoId', async (requisicao, resposta) => {
    const historicoId = requisicao.params.historicoId;
    resposta.json(await Historico.findByPK(historicoId));
});

module.exports = router;