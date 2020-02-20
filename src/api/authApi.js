import axios from '../_mock/index';

export const authApi = {
    login: function (loginData= {params: {login: 'test', password: '12345'}}) {
        axios.post('/login', loginData);
    }
};