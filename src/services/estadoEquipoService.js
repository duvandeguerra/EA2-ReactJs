import { axiosInstance } from "../helpers/axios-config";

const getEstadosEquipos = () => {
    return axiosInstance.get('estado-equipo', {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

const postEstadosEquipos = (data) => {
    const resp = axiosInstance.post('estado-equipo', data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
    return resp;
}

const putEstadosEquipos = (estadoEquipoId, data) => {
    const resp = axiosInstance.put(`estado-equipo/${estadoEquipoId}`, data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
    return resp;
}

export {
    getEstadosEquipos,
    postEstadosEquipos,
    putEstadosEquipos
}