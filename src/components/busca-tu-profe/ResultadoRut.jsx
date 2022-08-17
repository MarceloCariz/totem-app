import { useEffect, useState } from "react";
import { getAlumno } from "../../helpers/getRut";
import { TarjetaProfesor } from "./TarjetaProfesor";

export const ResultadoRut = ({ rutAlumno }) => {

    const [alumno, setAlumno] = useState([]);

    const [tituloAlumno, setTituloAlumno] = useState({ Nombre_Alumno: '', Apellido_Paterno_Alumno: '', Apellido_Materno_Alumno: '' });

    const getEstudiante = async () => {
        const newAlumno = await getAlumno(rutAlumno);
        setAlumno(newAlumno);
        setTituloAlumno({
            Nombre_Alumno: newAlumno[0].Nombre_Alumno,
            Apellido_Paterno_Alumno: newAlumno[0].Apellido_Paterno_Alumno,
            Apellido_Materno_Alumno: newAlumno[0].Apellido_Materno_Alumno
        })
    }

    useEffect(() => {
        getEstudiante();
    }, [])



    return (
        <>
            <h3 className='titulo-alumno'>{`${tituloAlumno.Nombre_Alumno} ${tituloAlumno.Apellido_Paterno_Alumno} ${tituloAlumno.Apellido_Paterno_Alumno}`}</h3>
            <div className="contenedor-menu">
                <p className="seleccionar">Selecciona el ramo que necesites encontrar:</p>

                <ol>
                    {
                        alumno.map((alumno) => (
                            <TarjetaProfesor
                                key={alumno._id}
                                {...alumno}
                            />
                        ))
                    }
                </ol>
            </div>
        </>
    )
}
