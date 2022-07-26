import { useContext } from "react";
import OpcionesContext from "../context/OpcionesProvider"



const useOpciones = () =>{
    return useContext(OpcionesContext);
}


export default useOpciones;