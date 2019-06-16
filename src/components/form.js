import React, { useState } from 'react';


function Form(){

  const [quote, updateQuote] = useState({
    patient: '',
    date: '',
    time: '',
    symptom: ''
  });

  const handleChange = (e) => {
    updateQuote({
      ...quote,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form>
      <label htmlFor="patient">Nombre de Paciente</label>
      <input
        id="patient"
        type="text"
        name="patient"
        className="u-full-width input-style"
        onChange={handleChange}
      />

      <label htmlFor="date">Fecha</label>
      <input
        id="date"
        type="date"
        name="date"
        className="u-full-width input-style"
        onChange={handleChange}
      />

      <label htmlFor="time">Hora</label>
      <input
        type="time"
        name="time"
        id="time"
        className="u-full-width input-style"
        onChange={handleChange}
      />

      <label htmlFor="symptom">Sintomas</label>
      <textarea
        name="symptom"
        id="symptom"
        cols="30"
        rows="10"
        className="u-full-width input-style"
        onChange={handleChange} >
      </textarea>

      <button className="u-full-width button-color">
        Agregar
      </button>

    </form>
  )
}

export default Form;
