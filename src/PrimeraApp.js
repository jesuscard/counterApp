 //FC functional component
// import React, { Fragment } from 'react';
 import React from 'react';
 import PropTypes from 'prop-types'

 const PrimerApp = ({ 
     saludo, 
     subtitulo 
    }) =>{

    return (
        <>
            <h1> { saludo } </h1>
            {/* <pre> { JSON.stringify(saludo, null, 3) } </pre> */}
            <p>{ subtitulo }</p>
        </>
        
    );


 }

 PrimerApp.protTypes = {
     saludo: PropTypes.string.isRequired
 }

 PrimerApp.defaultProps = {
     subtitulo: 'Soy un subtitulo'
 }
 
 export default PrimerApp;