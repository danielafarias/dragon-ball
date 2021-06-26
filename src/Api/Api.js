// Aplicação onde irá utilizar as 4 operações para manipular dados 
// do banco de dados com a interface web;
// CRUD = Create, Read, Update, Delete = POST, GET, PUT, DELETE

export const Api = {
    baseUrl: 'https://blue-backend-modulo4front.herokuapp.com', /* Acesso ao banco de dados por URL */

    authorization: 'farias.danicris@gmail.com', /* Autorização por e-mail para não misturar os acessos individuais */

    readAllUrl: () => Api.baseUrl + '/', /* Arrow function que lê todos os itens da API */
    readSingleUrl: id => Api.baseUrl + '/' + id, /* Arrow que por ID como parametro que lê apenas um item */
    createUrl: () => Api.baseUrl + '/', /* Criar um item, não necessario um id pois o back retorna id aleatorio */
    updateUrl: id => Api.baseUrl + '/' + id, /* ID como parametro para alterar um único item */
    deleteUrl: id => Api.baseUrl + '/' + id, /* ID como parametro para deletar um único item */
    deleteAllUrl: () => Api.baseUrl + '/', /* Arrow vazia para deletar todos os itens da API */

    // READ & GET / LER
    buildApiGetRequest: url => { // Constroi a request que irá ler/read
        return fetch(url, { // Pega a Url, método e autorização
            method: 'GET', // Método da request
            headers: new Headers({
                Authorization: Api.authorization // Autorização que irá na header para acessar a Api
            })
        })
    },

    // CREATE & POST / CRIAR
    buildApiPostRequest: (url, body) => { // Constroi a request que irá criar/create 
        return fetch(url, { // Pega a Url, método, autorização e body
            method: 'POST', // Método da request
            headers: new Headers({
                Authorization: Api.authorization, // Autorização que irá na header para acessar a Api
                'Content-type': 'application/json' // O Post precisa de um conteúdo do body para a aplicação, aqui define o tipo do conteúdo, que é uma aplicação JSON
            }), 
            body: JSON.stringify(body) // Body que é necessário
        })  
    },

    // UPDATE & PUT / ALTERAR
    buildApiPutRequest: (url, body) => { // Constroi a request que irá alterar/update
        return fetch(url, { // Pega a Url, método, autorização e body
            method: 'PUT', // Método da request
            headers: new Headers({
                Authorization: Api.authorization, // Autorização que irá na header para acessar a Api
                'content-type': 'application/json' // O PUT precisa de um conteúdo do body para a aplicação, aqui define o tipo do conteudo, que é uma aplicação JSON
            }),
            body: JSON.stringify(body) // Body que é necessário
        })
    },

    // DELETE / APAGAR
    buildApiDeleteRequest: url => { // Constroi a request que irá apagar/delete
        return fetch(url, { // Pega a Url, método e autorização
            method: 'DELETE', // Método da request
            headers: new Headers({
                Authorization: Api.authorization // Autorização que irá na header para acessar a Api
            }) 
        })
    }
}