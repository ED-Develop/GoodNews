import MockAdapter from 'axios-mock-adapter';
import * as axios from "axios";

const mock = new MockAdapter(axios);

mock.onGet('/login', {params: {login: 'test', password: '12345'}}).reply(200, {
    users: [
        {id: 1, name: 'John Smith'}
    ]
});


export default axios;