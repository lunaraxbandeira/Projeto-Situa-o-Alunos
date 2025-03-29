import React from 'react';
import './CardAluno.css';

function CardAluno({ nome, nota, faltas }) {
  const mediaAprovacao = 6;
  const maxFaltas = 15;
  
  const aprovado = nota >= mediaAprovacao && faltas <= maxFaltas;
  const situacao = aprovado ? 'Aprovado' : 'Reprovado';
  const classeSituacao = aprovado ? 'aprovado' : 'reprovado';

  return (
    <div className="card-aluno">
      <h2>{nome}</h2>
      <p>Nota: {nota}</p>
      <p>Faltas: {faltas}</p>
      <p className={classeSituacao}>Situação: {situacao}</p>
    </div>
  );
}

export default CardAluno;