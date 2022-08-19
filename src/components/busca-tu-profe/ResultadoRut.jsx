import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getAlumno } from "../../helpers/getRut";
import useOpciones from "../../hooks/useOpciones";
import { TarjetaProfesor } from "./TarjetaProfesor";

export const ResultadoRut = () => {

    const [rutAlumnos, setRutAlumnos] = useState('');

    const [profe, setProfe] = useState(['']);

    const [tituloAlumno, setTituloAlumno] = useState({ Nombre_Alumno: '', Apellido_Paterno_Alumno: '', Apellido_Materno_Alumno: '' });

    const {setAsignatura} = useOpciones();
    const navigate = useNavigate();
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

    const handleClick = (e) =>{
        setAsignatura(e)
        navigate('salas')
    }

    // useEffect(() => {
    //     getEstudiante();
    // }, [])


    return (
        <>
            <h3 className='titulo-alumno'>{`${tituloAlumno.Nombre_Alumno} ${tituloAlumno.Apellido_Paterno_Alumno} ${tituloAlumno.Apellido_Paterno_Alumno}`}</h3>

            <div className="contenedor-menu">
                <p className="seleccionar">Selecciona el ramo que necesites encontrar:</p>
                <Form onSubmit={onSubmit}>
                    <input
                        className="input-rut"
                        type="text"
                        placeholder="INGRESA TU RUT"
                        onChange={onChange}
                        value={rutAlumnos}
                        maxLength={9}
                    />
                    <Button>Buscar</Button>
                </Form>
                <ol>
                    {
                        profe.map((profe, index) => (
                           <div key={index + 1} onClick={(e)=> handleClick({...profe},e)}>
                        <TarjetaProfesor  {...profe}/>

                           </div>
                         
                   
                        ))
                    }
                </ol>
            </div>
        </>
    )
}

const Button = styled.button`
    padding: 1rem 2rem 1rem 2rem;
    background-color: #FFB71B;
    border: none;
    border-radius: 10px;
    margin-left: 1rem;
    font-size: 1.8rem;
    font-weight: 700;

`
const Form = styled.form`
  display: flex;
  justify-items: center;  
`;