import React, { useState } from 'react';


function Form({ createQuote }){

  const initialState = {
    patient: '',
    date: '',
    time: '',
    symptom: ''
  };

  const [quote, updateQuote] = useState(initialState);

  const handleChange = (e) => {
    updateQuote({
      ...quote, //es la manera de mantener vigente lo que ingresas en cada uno de los campos
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Pasar la cita hacia el componente principal
    createQuote(quote);

    // reiniciar el form
    updateQuote(initialState)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="quote-title">Crear Cita</h2>

      <label htmlFor="patient">Nombre del Paciente</label>
      <input
        id="patient"
        type="text"
        name="patient"
        value={quote.patient}
        className="u-full-width input-style"
        onChange={handleChange}
      />

      <label htmlFor="date">Fecha</label>
      <input
        id="date"
        type="date"
        name="date"
        value={quote.date}
        className="u-full-width input-style"
        onChange={handleChange}
      />

      <label htmlFor="time">Hora</label>
      <input
        type="time"
        name="time"
        id="time"
        value={quote.time}
        className="u-full-width input-style"
        onChange={handleChange}
      />

      <label htmlFor="symptom">Sintomas</label>
      <textarea
        name="symptom"
        id="symptom"
        cols="30"
        rows="10"
        value={quote.symptom}
        className="u-full-width input-style"
        onChange={handleChange} >
      </textarea>

      <button className="u-full-width button-submit">
        Agregar
      </button>
    </form>
  )
}

export default Form;
