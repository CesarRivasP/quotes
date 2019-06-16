import React, { useState, Fragment } from 'react';
import Form from './components/form';


function App() {
  // useState
  const [quotes, updateQuote] = useState([]);

  // Agregar las nuevas citas
  const createQuote = (quote) => {
    // tomar una copia del state y tomar el nuevo cliente
    const newQuotes = [ ...quotes, quote];

    // Almacenamos en el state
    updateQuote(newQuotes);
  }

  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form createQuote={createQuote} />
          </div>
          <div className="one-half column">

          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
