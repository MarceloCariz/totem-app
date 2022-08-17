
export const getAlumno = async ( rutAlumno) => {

    const url = `https://totem.ivaras.cl:7002/api/alumnos/?rutalumno=${rutAlumno}`
    const resp = await fetch(url);
    const { alumno } = await resp.json();
    return alumno;
}