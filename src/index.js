import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import CadastroVideo from './pages/cadastro/Video';

const Pagina404 = () => <div>Error 404</div>;

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/cadastro/video' component={CadastroVideo} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,

  document.getElementById('root')
);
