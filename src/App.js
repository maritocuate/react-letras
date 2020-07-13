import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario'
import Letra from './components/Letra'
import axios from 'axios'

function App() {

  const [values, setValues] = useState({})
  const [lyrics, setLyrics] = useState('')
  const [biography, setBiography] = useState({})

  useEffect(()=>{
    if( Object.keys(values).length===0 ) return

    const callApiLyrics = async () => {
      const {artista, cancion} = values
      const urlLyrics = `https://api.lyrics.ovh/v1/${artista}/${cancion}`
      const urlBio = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`

      const [letra, bio] = await Promise.all([
        axios(urlLyrics), axios(urlBio)
      ])

      setLyrics(letra.data.lyrics)
      setBiography(bio.data.artists[0].strBiographyEN)
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
