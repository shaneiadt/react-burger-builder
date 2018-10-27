import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-85a4e.firebaseio.com/'
});

export default instance;