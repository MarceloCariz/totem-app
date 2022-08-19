import { useEffect, useState } from "react";
import { getAlumno } from "../../helpers/getRut";
import { TarjetaProfesor } from "./TarjetaProfesor";

export const ResultadoRut = () => {

    const [rutAlumnos, setRutAlumnos] = useState('');

    const [profe, setProfe] = useState(['']);

    const [tituloAlumno, setTituloAlumno] = useState({ Nombre_Alumno: '', Apellido_Paterno_Alumno: '', Apellido_Materno_Alumno: '' });

    const onChange = (e) => {
        const value = e.target.value;
        setRutAlumnos(value);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const { respAlumno, docente } = await getAlumno(rutAlumnos);
        setProfe(docente);
        setTituloAlumno({
            Nombre_Alumno: respAlumno.Nombre_Alumno,
            Apellido_Paterno_Alumno: respAlumno.Apellido_Paterno_Alumno,
            Apellido_Materno_Alumno: respAlumno.Apellido_Materno_Alumno
        })

    }

    // useEffect(() => {
    //     getEstudiante();
    // }, [])


    return (
        <>
            <h3 className='titulo-alumno'>{`${tituloAlumno.Nombre_Alumno} ${tituloAlumno.Apellido_Paterno_Alumno} ${tituloAlumno.Apellido_Paterno_Alumno}`}</h3>

            <div className="contenedor-menu">
                <p className="seleccionar">Selecciona el ramo que necesites encontrar:</p>
                <form onSubmit={onSubmit}>
                    <input
                        className="input-rut"
                        type="text"
                        placeholder="INGRESA TU RUT"
                        onChange={onChange}
                        value={rutAlumnos}
                    />
                </form>
                <ol>
                    {
                        profe.map((profe, index) => (
                            <TarjetaProfesor
                                key={index + 1}
                                {...profe}
                            />
                        ))
                    }
                </ol>
            </div>
        </>
    )
}
