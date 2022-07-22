
import axios from 'axios';
import biblioteca from '../data/biblioteca.json'
export const obtenerPreguntas = async() =>{
    return biblioteca;
}