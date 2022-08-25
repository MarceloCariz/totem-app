import axios from "axios";



const clienteAxios = axios.create({
    baseURL: 'https://totem.ivaras.cl:7002/api/'
    //baseURL: 'http://localhost:7001/api/'
})


export default clienteAxios;