import MockAdapter from 'axios-mock-adapter';
import * as axios from "axios";
import {getCookie, setCookie} from "../helpers/cookie";

const mock = new MockAdapter(axios);

mock.onGet('/login').reply((config) => {
    let user = JSON.parse(localStorage.getItem(config.params.email));

    if (!user) {
        user = {
            id: 1,
            email: "admin@gmail.com",
            password: "12345",
            rememberMe: true,
            isAuth: false,
            login: "admin",
            isSubscribe: false
        }
    }

    if (config.params.email === user.email && config.params.password === user.password) {
        if (config.params.rememberMe) {
            setCookie('user', config.params.email, {'max-age': 360000});
        }

        localStorage.setItem(user.email, JSON.stringify({
            ...user,
            isAuth: true,
        }));

        return [200, {resultCode: 0, data: {id: user.id, login: user.login, email: user.email, isSubscribe: user.isSubscribe}}]
    } else {
        return [201, {
            resultCode: 1,
            message: 'Incorrect login or password'
        }]
    }
});

mock.onGet('/logout').reply((config) => {
    const user = JSON.parse(localStorage.getItem(config.params));

    if (user) {
        setCookie('user', "", {'max-age': -1});

        localStorage.setItem(user.email, JSON.stringify({
            ...user,
            isAuth: false,
        }));

        return [200, {resultCode: 0}]
    } else {
        return [400, {resultCode: 1}]
    }


});

mock.onGet('/auth').reply((config) => {
    const user = JSON.parse(localStorage.getItem(getCookie('user')));

    if (user) {
        return [200, {resultCode: 0, data: {id: user.id, login: user.login, email: user.email, isSubscribe: user.isSubscribe}}]
    } else {
        return [201, {
            resultCode: 1
        }]
    }
});

mock.onPost('/subscribe').reply(config => {
    return [200, {resultCode: 0}]
});


export default axios;