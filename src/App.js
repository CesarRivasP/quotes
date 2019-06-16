import React, { useState, useEffect, Fragment } from 'react';
import Form from './components/form';
import Quote from './components/quote';


function App() {

  // cargar las citas de localStorage como state inicial
  let initialsQuotes = JSON.parse(localStorage.getItem('quotes'));

  if(!initialsQuotes){
    // En caso de que no hayan citas
    initialsQuotes = [];
  }

  // useState
  const [quotes, updateQuote] = useState(initialsQuotes);

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

  useEffect(
    () => {
      console.log('Component listo o algo cambio');
      let initialsQuotes = JSON.parse(localStorage.getItem('quotes'));  //quotes viene como string y hay que parsearlo

      if(quotes){
        //Cuando haya citas, que las guarde en localStorage
        localStorage.setItem('quotes', JSON.stringify(quotes))
      }
      else {
        // Para la primera vez, que no haya nada
        localStorage.setItem('quotes', JSON.stringify([]))
      }
    }, [quotes] //para que se ejecuta unicamente cuando las citas tengan algun cambio
  )

  // Cargar condicionalmente un titulo
  const title = Object.keys(quotes).length === 0 ? 'No hay Citas' : 'Administrar Citas';

  return (
    <Fragment>
      <header className="header-container">
        <h1>Administrador de Pacientes</h1>
      </header>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form createQuote={createQuote} />
          </div>
          <div className="one-half column">
            <h2 className="quote-title">{ title }</h2>
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
