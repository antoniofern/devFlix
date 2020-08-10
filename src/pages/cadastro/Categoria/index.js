import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/components/Button';
import useForm from '../../../hooks/useForm';

export default function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  const [categoria, setCategoria] = useState([]);

  function handleSubmit(infosDoEvento) {
    infosDoEvento.preventDefault();
    setCategoria([...categoria, values]);
    clearForm();
  }

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://devvflixx.herokuapp.com/categorias';
    fetch(URL).then(async (respostaDoServidor) => {
      const resposta = await respostaDoServidor.json();
      setCategoria([...resposta]);
    });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {' '}
        {values.nome}
      </h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome da categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />
        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />
        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />
        <Button>Cadastrar</Button>
      </form>

      {categoria.length === 0 && <div>Loading...</div>}

      <ul>
        {categoria.map((category) => (
          <li key={category}>{category.titulo}</li>
        ))}
      </ul>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}
