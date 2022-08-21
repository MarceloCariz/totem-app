import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getAlumno } from "../../helpers/getRut";
import useOpciones from "../../hooks/useOpciones";
import { NumericPad } from "../pad-numerico/NumericPad";
import { TarjetaProfesor } from "./TarjetaProfesor";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

export const ResultadoRut = () => {

    const [rutAlumnos, setRutAlumnos] = useState('');
    const [active, setActive] = useState(false)
    const [profe, setProfe] = useState(['']);

    const [padState, setPadState] = useState(true);

    const [tituloAlumno, setTituloAlumno] = useState({ Nombre_Alumno: '', Apellido_Paterno_Alumno: '', Apellido_Materno_Alumno: '' });

    const {setAsignatura} = useOpciones();
    const navigate = useNavigate();
    const onChange = (e) => {
        const value = e.target.value;
        setRutAlumnos(value);
        if(e.target.value === ''){
            setActive(false)
            setTituloAlumno({})
        }
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
        setActive(true)
        setPadState(false);
    }

    const handleClick = (e) =>{
        setAsignatura(e)
        navigate('salas')
    }


    return (
        <>
            <h3 className='titulo-alumno'>{ active ?`${tituloAlumno.Nombre_Alumno} ${tituloAlumno.Apellido_Paterno_Alumno} ${tituloAlumno.Apellido_Paterno_Alumno}` : ''}</h3>

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
                    <Button onClick={() => {
                        setRutAlumnos("");
                        setProfe([]);
                        setPadState(true);
                    }}><FontAwesomeIcon icon={faTrashCan} />
                </Button>
                </Form>


                {
                    (padState) ? <NumericPad setRutAlumnos={setRutAlumnos} rutAlumnos={rutAlumnos}/> : null
                }



                <ol className="example">
                    { active ?
                        profe.map((profe, index) => (
                           <div key={index + 1} onClick={(e)=> handleClick({...profe},e)}>
                                <TarjetaProfesor  {...profe}/>

                           </div>
                         
                   
                        )) : ''
                    }
                </ol>
            </div>
        </>
    )
}
const Ol  = styled.div`
margin-top: 15rem;
  height: 700px ;
  position: absolute; 
  overflow-y: scroll;
`;
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