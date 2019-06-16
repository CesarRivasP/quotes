import React, { Fragment } from 'react';


function Quote({ quote, index, deleteQuote }) {
  return(
    <Fragment>
      <h2 className="quote-title">Citas</h2>
      <div className="cita">
        <p>Paciente: <span>{ quote.patient }</span></p>
        <p>Fecha: <span>{ quote.date }</span></p>
        <p>Hora: <span>{ quote.time }</span></p>
        <p>Sintomas: <span>{ quote.symptom }</span></p>

        <button onClick={() => deleteQuote(index)} type="button" className="u-full-width button-delete X">Eliminar</button>
      </div>
    </Fragment>
  );
}

export default Quote;
