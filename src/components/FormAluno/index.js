import React from 'react';
import './styles.css';

function FormAluno() {
  return (
    <div className="form-container">
      <h2>Cadastrar Novo Aluno</h2>
      <form className="aluno-form">
        <div className="form-group">
          <label htmlFor="nome">Nome do Aluno:</label>
          <input type="text" id="nome" name="nome" placeholder="Digite o nome" />
        </div>
        
        <div className="form-group">
          <label htmlFor="nota1">Nota 1:</label>
          <input type="number" id="nota1" name="nota1" min="0" max="10" step="0.1" />
        </div>
        
        <div className="form-group">
          <label htmlFor="nota2">Nota 2:</label>
          <input type="number" id="nota2" name="nota2" min="0" max="10" step="0.1" />
        </div>
        
        <button type="submit" className="submit-btn">Cadastrar</button>
      </form>
    </div>
  );
}

export default FormAluno;