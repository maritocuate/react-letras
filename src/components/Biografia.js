import React from 'react';

const Biografia = ({biography}) => {

    if(Object.keys(biography).length===0) return null

    const {strBiographyEN, strArtistThumb, strGenre} = biography

    return (
        <div className='card border-light'>
            <div className='card-header bg-primary text-light font-weight-bold'>
                Biografia
            </div>
            <div className='card-body'>
                <img src={strArtistThumb} alt='banda'/>
                <p className='card-text'>{strBiographyEN}</p>
                <p className='card-text'>{strGenre}</p>
            </div>
        </div>
    );
}
 
export default Biografia;