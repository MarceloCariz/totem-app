import clienteAxios from '../axios';

export const crearClick = async(click) => {
    try {
        await clienteAxios.post('/click', click);
    } catch (error) {
        console.log(error);
    }
};