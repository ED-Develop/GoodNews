import axios from '../_mock/index';

export const authApi = {
    login: function (loginData) {
        return axios.get('/login', {params: loginData}).then(response => response.data);
    },
    logout: function (email) {
        return axios.get('/logout', {params: email}).then(response => response.data.resultCode);
    },
    authMe: function () {
        return axios.get('/auth').then(response => response.data);
    },
    subscribe: function (email) {
        return axios.post('/subscribe', {params:email}).then(response => response.data.resultCode);
    }
};