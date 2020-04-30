import * as axios from 'axios';

class GeolocationApi {
    constructor() {
        this.instance = axios.create({
            baseURL: 'http://www.geoplugin.net/'
        });
    }

    getCountryCode(){
        return this.instance.get('json.gp').then(response => response.data.geoplugin_countryCode);
    }
}

export default new GeolocationApi();
