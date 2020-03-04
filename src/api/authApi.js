import axios from '../_mock/index';

export const authApi = {
    login: function (loginData= {login: 'admin', password: '12345'}) {
        return axios.get('/login', loginData);
    }
};