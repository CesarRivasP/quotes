import React, { useState, Fragment } from 'react';
import Form from './components/form';


function App() {
  // useState
  const [quote, updateQuote] = useState([]);
  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form />
          </div>
          <div className="one-half column">

          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
