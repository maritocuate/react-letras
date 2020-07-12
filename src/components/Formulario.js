import React, { useState } from 'react';

const Formulario = () => {

    const [search, setSearch] = useState({
        artista: '',
        cancion: ''
    })
    const [error, setError] = useState(false)

    const inputChange = e =>{
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    const {artista, cancion} = search

    const handleSubmit = e => {
        e.preventDefault()

        if(artista.trim()==='' || cancion.trim()===''){
            setError(true)
        }else{
            setError(false)
        }
    }
    
    return (
        <div className='bg-info'>
            <div className='container'>
                <form className='col card text-white bg-transparent mb-5 pt-5 pb-2' onSubmit={handleSubmit}>
                    <fieldset>
                        <legend className='text-center'>Buscador Letras Canciones</legend>

                        {error ? <p className='alert alert-danger text-center p-2'>Todos los campos son obligatorios</p> : null}

                        <div className='row'>
                            <div className='col-6'>
                                <div className='form-group'>
                                    <label>Artista</label>
                                    <input 
                                        type='text'
                                        className='form-control'
                                        name='artista'
                                        placeholder='Nombre Artista'
                                        onChange={inputChange}
                                        value={artista}
                                    />
                                </div>
                            </div>

                            <div className='col-6'>
                                <div className='form-group'>
                                    <label>Cancion</label>
                                    <input 
                                        type='text'
                                        className='form-control'
                                        name='cancion'
                                        placeholder='Nombre Cancion'
                                        onChange={inputChange}
                                        value={cancion}
                                    />
                                </div>
                            </div>
                        </div>

                        <button type='sumbit' className='btn btn-primary float-right'>Buscar</button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
}
 
export default Formulario;