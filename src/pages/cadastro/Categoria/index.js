import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

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
    setValue(event.target.getAttribute('name'), event.target.value);
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label='Nome da categoria'
          type='text'
          name='nome'
          value={values.nome}
          onChange={handleChange}
        />
        <FormField
          label='Descrição'
          type='textarea'
          name='descricao'
          value={values.descricao}
          onChange={handleChange}
        />
        <FormField
          label='Cor'
          type='color'
          name='cor'
          value={values.cor}
          onChange={handleChange}
        />
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
