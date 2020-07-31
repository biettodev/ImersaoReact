import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/CadastroVideo'
import CadastroCategoria from './pages/cadastro/CadastroCategoria'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route} from 'react-router-dom'

const Pagina404 = () => (<div>Página 404</div>)

ReactDOM.render(
  <BrowserRouter>
	<Switch>
		<Route component={Pagina404} />
		<Route path="/" component={Home} exact/>
		<Route path="/cadastro/video" component={CadastroVideo}/>
		<Route path="/cadastro/categoria" component={CadastroCategoria}/>
	<Switch>
  <BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
