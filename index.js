const espresso = require ('express');

const meuServidor = espresso();
meuServidor.use(espresso.json());

//REQUIRE CLIENTE
const rotasCliente = require ('./cliente/controladorCliente');
meuServidor.use(rotasCliente); 

//REQUIRE CORRETOR
const rotasCorretor = require ('./corretor/controladorCorretor');
meuServidor.use(rotasCorretor);

//REQUIRE ENDERECO
const rotasEndereco = require ('./endereco/controladorEndereco');
meuServidor.use(rotasEndereco); 

//REQUIRE FOTOS
const rotasFotos = require ('./fotos/controladorFotos');
meuServidor.use(rotasFotos);

//REQUIRE HISTORICO
const rotasHistorico = require ('./historico/controladorHistorico');
meuServidor.use(rotasHistorico)

//REQUIRE IMOVEL
const rotasImovel = require ('./imovel/controladorImovel');
meuServidor.use(rotasImovel);

//REQUIRE PROPRIETARIO
const rotasProprietario = require ('./proprietario/controladorProprietario');
meuServidor.use(rotasProprietario);

//REQUIRE TIPO IMOVEL
const rotasTipoImovel = require ('./tipoImovel/controladorTipoImovel');
meuServidor.use(rotasTipoImovel);

//REQUIRE VISITA
const rotasVisita = require ('./visita/controladorVisita');
meuServidor.use(rotasVisita);


meuServidor.listen(4300, () => {
    console.log('Meu primeiro servidor na porta 4300.');
});