import * as axios from 'axios';

class GeolocationApi {
    constructor() {
        this.apiKey = '15b782b391aa45c1afb6a454be63ce55';
        this.instance = axios.create({
            baseURL: 'https://api.ipgeolocation.io/'
        });
    }

    _getUrl(endpoint) {
        return `${endpoint}?apiKey=${this.apiKey}`;
    }

    getCountryCode(){
        return this.instance.get(this._getUrl('ipgeo')).then(response => response.data.country_code2);
    }
}

export const geolocationApi = new GeolocationApi();
