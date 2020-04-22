import MockAdapter from 'axios-mock-adapter';
import * as axios from "axios";
import {getCookie, setCookie} from "../helpers/cookie";

const mock = new MockAdapter(axios, {delayResponse: 1000});

mock.onGet('/login').reply((config) => {
    let users = JSON.parse(localStorage.getItem('users'));

    if (!users) {
        users = [{
            id: 1,
            email: "admin@gmail.com",
            password: "12345",
            isAuth: false,
            login: "admin",
            dateOfBirth: '1999/07/26',
            membership: 'trial for 30 days',
            isSubscribe: false,
            region: null
        }]
    }

    if (users.some( user => config.params.email === user.email && config.params.password === user.password)) {
        if (config.params.rememberMe) {
            setCookie('user', config.params.email, {'max-age': 360000});
        }

        localStorage.setItem('users', JSON.stringify(users.map( user => {
            if (user.email === config.params.email) {
                user.isAuth = true;
            }

            return user;
        })));

        const {id, login, email, isSubscribe} = users.find( user => user.email === config.params.email);

        return [200, {resultCode: 0, data: {id, login, email, isSubscribe}}]
    } else {
        return [201, {
            resultCode: 1,
            message: 'Incorrect login or password'
        }]
    }
});

mock.onGet('/logout').reply((config) => {
    const users = JSON.parse(localStorage.getItem('users'));

    if (users) {
        setCookie('user', "", {'max-age': -1});

        localStorage.setItem('users', JSON.stringify(users.map( user => {
            if (user.id === config.params) {
                return {
                    ...user,
                    isAuth: false,
                    rememberMe: false
                }
            }

            return user;
        })));

        return [200, {resultCode: 0}]
    } else {
        return [400, {resultCode: 1}]
    }
});

mock.onGet('/auth').reply((config) => {
    const users = JSON.parse(localStorage.getItem('users'));
    const user = users.find( user => user.email === getCookie('user'));

    if (user) {
        const {id, login, email, isSubscribe} = user;

        return [200, {resultCode: 0, data: {id, login, email, isSubscribe}}]
    } else {
        return [201, {
            resultCode: 1
        }]
    }
});

mock.onPost('/subscribe').reply(config => {
    return [200, {resultCode: 0}]
});

const usersUri = "/profile";
const url = new RegExp(`${usersUri}/*`);

function parseIdInURL(url) {
    return +url.slice(url.lastIndexOf('/') + 1);
}

function getUserForId(id) {
    const users = JSON.parse(localStorage.getItem('users'));

    return users.find( user => user.id === id);
}

mock.onGet(url).reply((config) => {
    const user = getUserForId(parseIdInURL(config.url));

    if (user) {
        const {id, login, email, dateOfBirth, membership, region} = user;

        return [200, {resultCode: 0, data: {id, login, email, dateOfBirth, membership, region}}]
    } else {
        return [201, {
            resultCode: 1,
            message: 'Bad request'
        }]
    }
});

mock.onPut(url).reply(config => {
    const users = JSON.parse(localStorage.getItem('users'));
    const id = parseIdInURL(config.url);
    let user = getUserForId(id);
    const payload = JSON.parse(config.data);

    if (!user) return [201, {resultCode: 1, message: 'Bad request'}];

    localStorage.setItem('users', JSON.stringify(users.map(u => {
        if (u.id !== id) return u;

        return {
            ...u,
            ...payload.data
        }
    })));

    user = getUserForId(id);

    if (user) {
        const {login, email, dateOfBirth, membership, region} = user;

        return [200, {resultCode: 0, data: {id, login, email, dateOfBirth, membership, region}}]
    } else {
        return [201, {
            resultCode: 1,
            message: 'Bad request'
        }]
    }
});


export default axios;