import React from 'react';


function Quote({ quote }) {
  return(
    <div className="cita">
      <p>Paciente: <span>{ quote.patient }</span></p>
      <p>Fecha: <span>{ quote.date }</span></p>
      <p>Hora: <span>{ quote.time }</span></p>
      <p>Sintomas: <span>{ quote.symptom }</span></p>
    </div>
  );
}

export default Quote;
