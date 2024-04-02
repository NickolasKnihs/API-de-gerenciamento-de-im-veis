const express = require('express');
const router = express.Router();
const Visita = require('./modeloVisita');

//Rota GET VISITA
router.get('/visita', async (requisicao, resposta) => {
    const visita = await Visita.findAll();
    resposta.send(visita); 
})

//Rota POST VISITA
router.post('/visita', (requisicao, resposta) => {
    const dataVisita = requisicao.body.dataVisita;
    const visitaRealizada = requisicao.body.visitaRealizada;

    Visita.create ({dataVisita: dataVisita, 
        visitaRealizada: visitaRealizada}).then(() => {
            resposta.send('Cadastrado com sucesso.');
        }).catch((erro) => {
            resposta.send('Ocorreu um erro: ' + erro);
        });
});

//Rota PUT VISITA
router.put('/visita/:visitaId', (requisicao, resposta) => {
    const codigoVisita = requisicao.params.visitaId;
    const dataVisita = requisicao.body.dataVisita;
    const visitaRealizada = requisicao.body.visitaRealizada;

    Visita.update ({dataVisita: dataVisita, 
        visitaRealizada: visitaRealizada,},
            { where: {
                codVisita: codigoVisita
            }   
        }).then(() => {
            resposta.send('Atualizado com sucesso.');
        }).catch((erro) => {
            resposta.send('Ocorreu um erro: ' + erro);
        });
});

//Rota DELETE VISITA
router.delete('/visita/:visitaId', (requisicao, resposta) => {
    const codigoVisita = requisicao.params.visitaId;
    Visita.destroy ({ where: {codVisita: codigoVisita} }).then(() => {
        resposta.send('Removido com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

//Rota GET individual VISITA
router.get('/visita/:visitaId', async (requisicao, resposta) => {
    const visitaId = requisicao.params.visitaId;
    resposta.json(await Visita.findByPK(visitaId));
});

module.exports = router;