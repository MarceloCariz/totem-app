// import useOpciones from '../../hooks/useOpciones';
import './findStyles.css';
export const TarjetaProfesor = ({ nombre_docente, Nom_Asignatura }) => {
    return (
        <div className='contenedor'>
            <li className='lista-contenedor'>
                <h1 className='titulo-docente'>{nombre_docente}</h1>
                <h2 className='titulo-asignatura'>{Nom_Asignatura}</h2>
            </li>
        </div>
    )
}
