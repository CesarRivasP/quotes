import React, { useState, Fragment } from 'react';
import Form from './components/form';
import Quote from './components/quote';


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

  const deleteQuote = (index) => {
    const newQuotes = [ ...quotes ];
    newQuotes.splice(index,1);  //splice permite eliminar elementos de un array
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
            {
              quotes.map((quote, index) => (
                <Quote key={index} index={index} quote={quote} deleteQuote={deleteQuote} />
              ))
            }
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
