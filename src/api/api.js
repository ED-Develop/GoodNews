import * as axios from 'axios';

class Api {
    constructor() {
        this.instanse = axios.create({
            baseURL: 'https://newsapi.org/'
        });
        this.apiKey = '6787679983b14ae09ac4f6f18683340e';
    }
}

class ArticleAPI extends Api {
    constructor() {
        super();
    }

    getTopArticles = async () => {
        let response = await this.instanse.get(`v2/top-headlines?country=us&apiKey=${this.apiKey}`);
        return response.data;
    };

    getEverythingArticles = async () => {
        let response = await this.instanse.get(`v2/everything?q=bitcoin&apiKey=${this.apiKey}`);
        return response.data;
    };
}

export const articleAPI = new ArticleAPI();