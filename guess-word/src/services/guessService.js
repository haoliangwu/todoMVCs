const MAIL = 'ouerbeiju_whl@163.com'
const HOST = 'http://45.62.99.73:3000'
const API = {
    login: '/login',
    start: '/start',
    guess: '/guess',
    result: '/result'
}

export default {
    post(url, payload, token) {
        const opts = {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        }

        if (token) opts.headers['token'] = token

        return fetch(url, opts).then(res => res.json())
    },

    login(cb) {
        this.post(`${HOST}${API.login}`, { email: MAIL }).then(cb)
    },

    start(token, cb) {
        this.post(`${HOST}${API.start}`, {}, token).then(cb)
    }
}