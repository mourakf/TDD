const axios = require('axios');
const url = "https://catfact.ninja/"
async function getCatFact(path) {
    try {
        const response = await axios.get(url, path);
        const fact = response.data.fact
        return {
            response: response.data,
            fact: fact
        }
    } catch (error) {
        return error.message
    }
}

async function getCatBreed(path) {
    try {
        const response = await axios.get(`${url}${path}`);
        return {
            response: response.data
        }
    } catch (error) {
        return error.message
    }
}


module.exports = getCatFact, getCatBreed