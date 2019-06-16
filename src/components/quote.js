import React from 'react';


function Quote({ quote, index, deleteQuote }) {
  return(
    <div className="cita">
      <p>Paciente: <span>{ quote.patient }</span></p>
      <p>Fecha: <span>{ quote.date }</span></p>
      <p>Hora: <span>{ quote.time }</span></p>
      <p>Sintomas: <span>{ quote.symptom }</span></p>

      <button onClick={() => deleteQuote(index)} type="button" className="u-full-width button-delete X">Eliminar</button>
    </div>
  );
}

export default Quote;
