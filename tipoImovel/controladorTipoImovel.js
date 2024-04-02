const express = require('express');
const router = express.Router();
const TipoImovel = require('./modeloTipoImovel');

//Rota GET TIPO IMOVEL
router.get('/tipoImovel', async (requisicao, resposta) => {
    const tipoImovel = await TipoImovel.findAll();
    resposta.send(tipoImovel); 
})

//Rota POST TIPO IMOVEL
router.post('/tipoImovel', (requisicao, resposta) => {
    const descricao = requisicao.body.descricao;

    TipoImovel.create ({descricao: descricao}).then(() => {
            resposta.send('Cadastrado com sucesso.');
        }).catch((erro) => {
            resposta.send('Ocorreu um erro: ' + erro);
        });
});

//Rota PUT TIPO IMOVEL
router.put('/tipoImovel/:tipoImovelId', (requisicao, resposta) => {
    const codigoTipoImovel = requisicao.params.tipoImovelId;
    const descricao = requisicao.body.descricao;

    TipoImovel.update ({descricao: descricao},
            { where: {
                codigoTipoImovel: codigoTipoImovel
            }   
        }).then(() => {
            resposta.send('Atualizado com sucesso.');
        }).catch((erro) => {
            resposta.send('Ocorreu um erro: ' + erro);
        });
});

//Rota DELETE TIPO IMOVEL
router.delete('/tipoImovel/:tipoImovelId', (requisicao, resposta) => {
    const codigoTipoImovel = requisicao.params.tipoImovelId;
    TipoImovel.destroy ({ where: {codTipoImovel: codigoTipoImovel} }).then(() => {
        resposta.send('Removido com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

//Rota GET individual TIPO IMOVEL
router.get('/tipoImovel/:tipoImovelId', async (requisicao, resposta) => {
    const tipoImovelId = requisicao.params.tipoImovelId;
    resposta.json(await TipoImovel.findByPK(tipoImovelId));
});

module.exports = router;