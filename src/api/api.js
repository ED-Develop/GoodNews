import * as axios from 'axios';

class Api {
    constructor() {
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

        if (options.country) {
            url = this._setCountry(url, options.country);
        }

        if (options.category) {
            url = this._setCategory(url, options.category);
        }

        if (options.keyword) {
            url = this._setKeyword(url, options.keyword);
        }

        if (options.pageSize) {
            url = this._setPageSize(url, options.pageSize);
        }

        if (options.page) {
            url = this._setPage(url, options.page);
        }

        if (options.sortBy) {
            url = this._setSortBy(url, options.sortBy);
        }

        return url;
    };

    _setPageSize = (endpoint, pageSize) => {
        return `${endpoint}pageSize=${pageSize}&`;
    };

    _setPage = (endpoint, page) => {
        return `${endpoint}page=${page}&`;
    };

    _setKeyword = (endpoint, keyword) => {
        return `${endpoint}q=${keyword}&`;
    };
}

class TopHeadlinesAPI extends Api {
    constructor() {
        super();
        this.endpoint = 'top-headlines?country=us&';
    }

    _setCountry = (endpoint, country = 'us') => {
        return `${endpoint.slice(0, endpoint.indexOf('country'))}country=${country}&`;
    };

    _setCategory = (endpoint, category) => {
        return `${endpoint}category=${category}&`;
    };
}

class EverythingAPI extends Api {
    constructor() {
        super();
        this.endpoint = 'everything?q=headlines&'
    }

    _setLanguage = (endpoint, language) => {
        return `${endpoint}language=${language}&`;
    };

    _setSortBy = (endpoint, sortBy) => {
        return `${endpoint}sortBy=${sortBy}&`;
    };

    _setKeyword = (endpoint, keyword) => {
        return `${endpoint.slice(0, endpoint.indexOf('q'))}q=${keyword}&`
    };
}

export const topHeadlinesAPI = new TopHeadlinesAPI();
export const everythingAPI = new EverythingAPI();
