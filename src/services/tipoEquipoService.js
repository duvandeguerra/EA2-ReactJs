import { axiosInstance } from "../helpers/axios-config";

const getTiposEquipos = () => {
    return axiosInstance.get('tipo-equipo', {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

const postTiposEquipo = (data) => {
    const resp = axiosInstance.post('tipo-equipo', data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
    return resp;
}

const putTiposEquipos = (tipoEquipoId, data) => {
    const resp = axiosInstance.put(`tipo-equipo/${tipoEquipoId}`, data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
    return resp;
}

export {
    getTiposEquipos,
    postTiposEquipo,
    putTiposEquipos
}