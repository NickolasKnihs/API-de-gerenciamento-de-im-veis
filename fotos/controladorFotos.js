const express = require('express');
const router = express.Router();
const Fotos = require('./modeloFotos');

//Rota GET FOTOS
router.get('/fotos', async (requisicao, resposta) => {
    const fotos = await Fotos.findAll();
    resposta.send(fotos); 
})

//Rota POST FOTOS
router.post('/fotos', (requisicao, resposta) => {
    const chaveAws = requisicao.body.chaveAws;
    const codImovel = requisicao.body.codImovel;

    Fotos.create ({chaveAws: chaveAws, 
        codImovel: codImovel}).then(() => {
            resposta.send('Cadastrado com sucesso.');
        }).catch((erro) => {
            resposta.send('Ocorreu um erro: ' + erro);
        });
});

//Rota PUT FOTOS    
router.put('/fotos/:fotosId', (requisicao, resposta) => {
    const codigoFotos = requisicao.params.fotosId;
    const chaveAws = requisicao.body.chaveAws;
    const codImovel = requisicao.body.codImovel;

    Fotos.update ({chaveAws: chaveAws, 
        codImovel: codImovel},
            { where: {
                codFotos: codigoFotos
            }   
        }).then(() => {
            resposta.send('Atualizado com sucesso.');
        }).catch((erro) => {
            resposta.send('Ocorreu um erro: ' + erro);
        });
});

//Rota DELETE FOTOS
router.delete('/fotos/:fotosId', (requisicao, resposta) => {
    const codigoFotos = requisicao.params.fotosId;
    Fotos.destroy ({ where: {codFotos: codigoFotos} }).then(() => {
        resposta.send('Removido com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

//Rota GET individual FOTOS
router.get('/fotos/:fotosId', async (requisicao, resposta) => {
    const fotosId = requisicao.params.fotosId;
    resposta.json(await Fotos.findByPK(fotosId));
});

module.exports = router;