import { axiosInstance } from '../helpers/axios-config'

const getInventarioPorId = (inventarioId) => {
    return axiosInstance.get(`inventario/${inventarioId}`, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

const getInventarios = () => {
    return axiosInstance.get('inventario', {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

const postInventarios = (data) => {
    return axiosInstance.post('inventario', data, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

const putInventarios = (inventarioId, data) => {
    return axiosInstance.put(`inventario/${inventarioId}`, data, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

export {
    getInventarios,
    getInventarioPorId,
    postInventarios,
    putInventarios
}