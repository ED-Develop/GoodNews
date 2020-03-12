import * as axios from 'axios';

class RootApi {
    constructor(endpoint) {
        this.endpoint = endpoint;
        this.instanse = axios.create({
            baseURL: 'https://newsapi.org/v2/'
        });
        this.apiKey = '6787679983b14ae09ac4f6f18683340e';
    }

    getArticles = async (options) => {
        let response = await this.instanse.get(`${this._getUrl(options)}apiKey=${this.apiKey}`);
        return response.data;
    };

    _getUrl = (options = {}) => {
        let url = this.endpoint;

        if (url === 'top-headlines?' && !options.country) {
            options.country = 'us';
        } else if (url === 'everything?' && !options.q) {
            options.q = 'headlines';
        }


        Object.entries(options).forEach(i => {
            url = `${url}${i[0]}=${i[1]}&`
        });

        return url;
    };
}

export const topHeadlinesAPI = new RootApi('top-headlines?');
export const everythingAPI = new RootApi('everything?');
