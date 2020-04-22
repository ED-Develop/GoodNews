import axios from '../_mock/index';

export const mockApi = {
    login(loginData) {
        return axios.get('/login', {params: loginData}).then(response => response.data);
    },
    logout(id) {
        return axios.get('/logout', {params: id}).then(response => response.data.resultCode);
    },
    authMe() {
        return axios.get('/auth').then(response => response.data);
    },
    subscribe(email) {
        return axios.post('/subscribe', {params:email}).then(response => response.data.resultCode);
    },
    getProfile(id) {
        return axios.get(`/profile/${id}`).then(response => response.data);
    },
    updateProfile(id, data) {
        return axios.put(`/profile/${id}`, {data}).then(response => response.data);
    }
};