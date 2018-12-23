import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://kitchen-0723.firebaseio.com/'
});

export default instance;