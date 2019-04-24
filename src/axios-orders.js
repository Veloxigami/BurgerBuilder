import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerbuilder-2f67f.firebaseio.com/'
});

export default instance;