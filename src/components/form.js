import React from 'react';


function Form(){
  return (
    <form>
      <label htmlFor="patient">Nombre de Paciente</label>
      <input
        id="patient"
        type="text"
        name="patient"
        className="u-full-width input-style"
      />

      <label htmlFor="date">Fecha</label>
      <input
        id="date"
        type="date"
        name="date"
        className="u-full-width input-style"
      />

      <label htmlFor="time">Hora</label>
      <input
        type="time"
        name="time"
        id="time"
        className="u-full-width input-style"
      />

      <label htmlFor="symptom">Sintomas</label>
      <textarea
        name="symptom"
        id="symptom"
        cols="30"
        rows="10"
        className="u-full-width input-style">
      </textarea>

      <button className="u-full-width button-color">
        Agregar
      </button>

    </form>
  )
}

export default Form;
