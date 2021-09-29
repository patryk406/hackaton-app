const API_URL = `https://api.airtable.com/v0/${process.env.REACT_APP_DB_ID}`;
const apiKey = process.env.REACT_APP_API_KEY

function request(endpoint, method = 'GET', data = null) {
    const config = {
        method,
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
        }
    };

    if (method === 'POST' || method === 'PATCH') {
        config.body = JSON.stringify(data)
    }
    const url = `${API_URL}${endpoint}`
    return fetch(url, config)
        .then(response => {
            // response status
            return response.json()
        });
}

function get(endpoint) {
    return request(endpoint);
}

function post(endpoint, data) {
    console.log(data)
    return request(endpoint, 'POST', data)
}

function patch(endpoint, data) {
    return request(endpoint, 'PATCH', data)
}

function _delete(endpoint) {
    return request(endpoint, 'DELETE')
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    get,
    post,
    patch,
    delete: _delete
};