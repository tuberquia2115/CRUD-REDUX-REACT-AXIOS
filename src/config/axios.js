import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: 'http://localhost:3004/'
})

export default clienteAxios;