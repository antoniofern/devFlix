import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

export default function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [categoria, setCategoria] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleSubmit(infosDoEvento) {
    infosDoEvento.preventDefault();
    setCategoria([...categoria, values]);
    setValues(valoresIniciais);
  }

  function handleChange(event) {
    const { getAttribute, value } = event.target;
    setValue(getAttribute('name'), value);
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nome da categoria:
            <input
              type='text'
              name='nome'
              value={values.nome}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Descrição:
            <input
              type='textarea'
              name='descricao'
              value={values.descricao}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Cor:
            <input
              type='color'
              name='cor'
              value={values.cor}
              onChange={handleChange}
            />
          </label>
        </div>
        <button>Cadastrar</button>
      </form>

      <ul>
        {categoria.map((categoria, index) => {
          return <li key={`${categoria}${index}`}>{categoria.nome}</li>;
        })}
      </ul>

      <Link to='/'>Ir para home</Link>
    </PageDefault>
  );
}
