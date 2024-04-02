const express = require('express');
const router = express.Router();
const Imovel = require('./modeloImovel');

//Rota GET IMOVEL
router.get('/imovel', async (requisicao, resposta) => {
    const imovel = await Imovel.findAll();
    resposta.send(imovel); 
})

//Rota POST IMOVEL
router.post('/imovel', (requisicao, resposta) => {
    const descricao = requisicao.body.descricao;
    const areaMetros = requisicao.body.areaMetros;
    const codTipoImovel = requisicao.body.codTipoImovel;
    const codEndereco = requisicao.body.codEndereco;

    Imovel.create ({descricao: descricao, 
        areaMetros: areaMetros, 
        codTipoImovel: codTipoImovel,  
        codEndereco: codEndereco}).then(() => {
            resposta.send('Cadastrado com sucesso.');
        }).catch((erro) => {
            resposta.send('Ocorreu um erro: ' + erro);
        });
});

//Rota PUT IMOVEL
router.put('/imovel/:imovelId', (requisicao, resposta) => {
    const codigoImovel = requisicao.params.imovelId;
    const descricao = requisicao.body.descricao;
    const areaMetros = requisicao.body.areaMetros;
    const codTipoImovel = requisicao.body.codTipoImovel;
    const codEndereco = requisicao.body.codEndereco;

    Imovel.update ({descricao: descricao, 
        areaMetros: areaMetros, 
        codTipoImovel: codTipoImovel,  
        codEndereco: codEndereco},
            { where: {
                codImovel: codigoImovel
            }   
        }).then(() => {
            resposta.send('Atualizado com sucesso.');
        }).catch((erro) => {
            resposta.send('Ocorreu um erro: ' + erro);
        });
});

//Rota DELETE IMOVEL
router.delete('/imovel/:imovelId', (requisicao, resposta) => {
    const codigoImovel = requisicao.params.imovelId;
    Imovel.destroy ({ where: {codImovel: codigoImovel} }).then(() => {
        resposta.send('Removido com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

//Rota GET individual IMOVEL
router.get('/imovel/:imovelId', async (requisicao, resposta) => {
    const imovelId = requisicao.params.imovelId;
    resposta.json(await Imovel.findByPK(imovelId));
});

module.exports = router;