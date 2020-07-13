import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario'
import Letra from './components/Letra'
import axios from 'axios'

function App() {

  const [values, setValues] = useState({})
  const [lyrics, setLyrics] = useState('')

  useEffect(()=>{
    if( Object.keys(values).length===0 ) return

    const callApiLyrics = async () => {
      const {artista, cancion} = values
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`
      const query = await axios(url)

      setLyrics(query.data.lyrics)
    }
    callApiLyrics()

  }, [values])

  return (
    <Fragment>
      <Formulario setValues={setValues}/>

      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-6'>
          </div>
          <div className='col-md-6'>
            <Letra lyrics={lyrics}/>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
