import React from 'react';
import './App.css';
import CardAluno from './components/CardAluno';
import FormAluno from './components/FormAluno';

function App() {
  return (
    <div className="App">
      <h1>Sistema de Controle Acadêmico</h1>
      
      <div className="content-container">
        <FormAluno />
        
        <div className="cards-section">
          <h2>Alunos Cadastrados</h2>
          <div className="cards-container">
            <CardAluno nome="João Silva" nota={7.5} faltas={10} />
            <CardAluno nome="Maria Oliveira" nota={5.0} faltas={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;