import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://employees-88b2e.firebaseio.com/'
});

export default instance;