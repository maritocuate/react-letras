import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario'
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
    </Fragment>
  );
}

export default App;
