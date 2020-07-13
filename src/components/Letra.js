import React, { Fragment } from 'react';

const Letra = ({lyrics}) => {

    if(!lyrics) return null

    return (
        <Fragment>
            <h2>Letra</h2>
            <p className='letra'>{lyrics}</p>
        </Fragment>
    );
}
 
export default Letra;