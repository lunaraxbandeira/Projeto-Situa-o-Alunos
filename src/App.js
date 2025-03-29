import React from 'react';
import './App.css';
import CardAluno from './components/CardAluno';

function App() {
  return (
    <div className="App">
      <h1>Situação dos Alunos</h1>
      <div className="cards-container">
        <CardAluno nome="João Silva" nota={7.5} faltas={10} />
        <CardAluno nome="Maria Oliveira" nota={5.0} faltas={20} />
      </div>
    </div>
  );
}

export default App;