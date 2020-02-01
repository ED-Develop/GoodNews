import * as axios from 'axios';

const instanse = axios.create({
    baseURL: 'https://newsapi.org/'
});

const apiKey = '6787679983b14ae09ac4f6f18683340e';


export const articleAPI = {
    async getArticles() {
        let response = await instanse.get(`v2/top-headlines?country=us&apiKey=${apiKey}`);
        return response.data;
    }
};