import './findStyles.css';
export const TarjetaProfesor = ({ Id_Docente, _id, Nombre_Docente, Apellido_Paterno_Docente, Apellido_Materno_Docente, Nombre_Asignatura }) => {
    return (
        <div className='contenedor'>
            <li className='lista-contenedor'>
                <h1 className='titulo-docente' key={Id_Docente}>{Nombre_Docente}{Apellido_Paterno_Docente}{Apellido_Materno_Docente}</h1>
                <h2 className='titulo-asignatura' key={_id}>{Nombre_Asignatura}</h2>
            </li>
        </div>
    )
}
