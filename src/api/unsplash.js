import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID f8UsSrI-4xYEtCzR4GEILlOptKu5iYxR3J5aRU4uQWU'
    }
});