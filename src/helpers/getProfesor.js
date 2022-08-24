

export const getDocente = async (nameDocente = '') => {

    console.log(getDocente);

    const url = `https://totem.ivaras.cl:7002/api/alumnos/teacher?nombredocente=${nameDocente}`;
    const resp = await fetch(url);
    const { docente } = await resp.json();

    console.log(docente)
    return { docente };
}