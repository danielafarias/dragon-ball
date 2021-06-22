export const Api = {
    baseUrl: 'https://blue-backend-modulo4front.herokuapp.com',

    authorization: 'farias.danicris@gmail.com',

    readAllUrl: () => Api.baseUrl + '/',
    readSingleUrl: id => Api.baseUrl + '/' + id,
    createUrl: () => Api.baseUrl + '/',
    deleteAllUrl: () => Api.baseUrl + '/',

    buildApiGetRequest: url => {
        return fetch(url, {
            method: 'GET',
            headers: new Headers({
                Authorization: Api.authorization
            })
        })
    },

    buildApiPostRequest: (url, body) => {
        return fetch(url, {
            method: 'POST',
            headers: new Headers({Authorization: Api.authorization,
            'Content-type': 'application/json'}),

            body: JSON.stringify(body)
        })  
    },

    buildApiDeleteRequest: url => {
        return fetch(url, {
            method: 'DELETE',
            headers: new Headers({Authorization: Api.authorization})
        })
    }
}