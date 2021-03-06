import React, { useState, useEffect } from 'react';
import { getMarcas, postMarca, putMarca } from '../../services/marcaService';
import { MarcaTable } from './MarcaTable';
import Swal from 'sweetalert2';

export const MarcaView = () => {

  const [marcas, setMarcas] = useState([]);
  const [marca, setMarca] = useState(null);
  const [valoresForm, setValoresForm] = useState({});
  const { nombre = '', estado = '' } = valoresForm;

  useEffect(() => {
    if (marca) {
      setValoresForm(marca);
    } else {
      setValoresForm({});
    }
  }, [marca, setValoresForm]);

  const listarMarcas = async () => {
    try {
      Swal.fire({
        allowOutsiteClick: false,
        text: 'Cargando...'
      });
      Swal.showLoading();
      const resp = await getMarcas();
      setMarcas(resp.data);
      Swal.close();
    } catch (error) {
      console.log(error);
      Swal.close();
    }
  }

  const handleOnChange = (e) => {
    setValoresForm({ ...valoresForm, [e.target.name]: e.target.value });
  }

  const nuevaMarca = async (data) => {
    try {
      Swal.fire({
        allowOutsideClick: false,
        text: 'Cargando...'
      });
      Swal.showLoading();

      if (marca) {
        const resp = await putMarca(marca._id, data);
        console.log(resp.data);
      } else {
        const resp = await postMarca(data);
        console.log(resp.data);
      }

      listarMarcas();
      setValoresForm({ nombre: '', estado: '' });
      setMarca(null);
      Swal.close();
    } catch (error) {
      console.log(error);
      Swal.close();
    }
  }

  const handleCrearMarca = (e) => {
    e.preventDefault();
    nuevaMarca(valoresForm);
  }

  const handleActionEdit = (resp) => {
    setMarca(u => resp);
  }

  const handleCancelEdit = () => {
    setMarca(null);
  }

  useEffect(() => { listarMarcas(); }, []);

  return (
    <div className='container-fluid mt-3 mb-2'>
      <div className="card">
        <div className="card-header">
          <h5 className="card-title">Crear / Editar Marca </h5>
        </div>
        <div className="card-body">
          <div className='row'>
            <div className='col'></div>
          </div>
          <div className='row'>
            <div className='col'></div>
            <form onSubmit={(e) => handleCrearMarca(e)}>
              <div className='row'>
                <div className="col-lg-8">
                  <label className="form-label">Nombre</label>
                  <input required name='nombre' value={nombre} type="text" className="form-control"
                    placeholder="Escriba un nombre" onChange={(e) => handleOnChange(e)} />
                </div>
                <div className="col-lg-4">
                  <label className="form-label">Estado</label>
                  <select required name='estado' value={estado}
                    className="form-select" onChange={(e) => handleOnChange(e)}>
                    <option defaultValue value="">--SELECCIONAR--</option>
                    <option value="Activo">Activo</option>
                    <option value="Inactivo">Inactivo</option>
                  </select>
                </div>
              </div>
              <div className="row mb-5 mt-3">
                <div className="col">
                  <button type='submit' className="btn btn-primary custom-button">Guardar</button>
                  <button type='button' onClick={handleCancelEdit} className='btn btn-secondary'>Cancelar</button>
                </div>
              </div>
            </form>
            <MarcaTable marcas={marcas} handleActionEdit={handleActionEdit} />
          </div>
        </div>
      </div>
    </div>
  )
}