import jsonServerProvider from 'ra-data-json-server';

import { GET_ONE, UPDATE, fetchUtils, showNotification } from 'react-admin';
import url from './url'

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = localStorage.getItem('token');
    if(token !== undefined) {
        options.headers.set('Authorization', `${token}`);
    }
    return fetchUtils.fetchJson(url, options);
};

const jsonServer = jsonServerProvider(url, httpClient)


export default dispatch => {
    return {
        ...jsonServer,
        getOne: (resource, params) => {
            if(resource === "profile") {
                return Promise.resolve({
                    data: {id: 1, password: "", oldPassword: ""},
                });
            } else {
                return jsonServer.getOne(resource, params)
            }
        },
        update: (resource, params) => {
            if(resource === "profile") 
            {
                const request = new Request(url + '/changePassword', {
                    method: 'POST',
                    body: JSON.stringify({ oldPassword: params.data.oldPassword, password: params.data.password }),
                    headers: new Headers({ 'Content-Type': 'application/json' }),
                });
                return new Promise((resolve, reject) => {    
                    fetch(request).then(resp => {
                        resp.text().then(body => {
                            if(body === "true") {
                                // dispatch(showNotification("Все ок"))
                                resolve({data: {id: 1, password: "", oldPassword: ""}})
                            } else {
                                // dispatch(showNotification("Все не ок", "warning"))
                                reject()
                            }
                        })
                    })
                });
            } else {
                return jsonServer.update(resource, params)
            }
        }
    }
}

