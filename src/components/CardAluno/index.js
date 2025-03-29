import React from 'react';
import './styles.css';

function CardAluno({ nome, nota, faltas }) {
  return (
    <div className="card-aluno">
      <h3>{nome}</h3>
      <div className="card-details">
        <p><strong>Nota:</strong> {nota}</p>
        <p><strong>Faltas:</strong> {faltas}</p>
      </div>
    </div>
  );
}

export default CardAluno;