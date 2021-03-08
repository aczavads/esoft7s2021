import logo from './logo.svg';
import './App.css';
// import SomarComponent from './components/somar-component';
// import HelloComponent from './components/hello-component';
// import ContadorComponent from './components/contador-component';
// import ContadorBásico from './components/contador-básico';
// import ArCondicionado from './components/ar-condicionado';
import CorEdit from './components/cor/cor-edit';
import CorList from './components/cor/cor-list';
import LandingPage from './components/landing/landing-page';
import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import MeusLivrosList from './components/arthur_zavadski/meulivro/meulivro-list';
import ProdutoList from './components/produto/produto-list';
import ProdutoEdit from './components/produto/produto-edit';

/*
function somar(v1, v2) {
  return v1 + v2;
}
*/

/*
const somar = function (v1, v2) {
  return v1 + v2;
}
*/

//const somar = (v1, v2) => v1 + v2;

const somar = (v1, v2) => {
  return v1 + v2;
}


function App() {
  const resultado = somar(100, 150);

  return (
    <div>
      <Router>
        <Switch>
        <Route exact path="/">
            <LandingPage></LandingPage>
          </Route>
          <Route exact path="/meuslivros">
            <MeusLivrosList></MeusLivrosList>
          </Route>
          <Route exact path="/cores">
            <CorList></CorList>
          </Route>
          <Route path="/cores/editar/:idParaEditar">
            <CorEdit></CorEdit>
          </Route>
          <Route path="/cores/nova">
            <CorEdit></CorEdit>
          </Route>
          <Route exact path="/produtos">
            <ProdutoList></ProdutoList>
          </Route>
          <Route path="/produtos/editar/:idParaEditar">
            <ProdutoEdit></ProdutoEdit>
          </Route>
          <Route path="/produtos/novo">
            <ProdutoEdit></ProdutoEdit>
          </Route>
        </Switch>
      </Router>

      {/* <ArCondicionado></ArCondicionado>
      <ContadorBásico></ContadorBásico> */}
      {/* <div>{resultado}</div>
      <SomarComponent v1={1000} v2={2200}></SomarComponent>      
      <HelloComponent></HelloComponent>
      <ContadorComponent valorMinimo={10} valorMaximo={15}></ContadorComponent>
      <ContadorComponent valorMinimo={0} valorMaximo={10}></ContadorComponent> */}
    </div>
  );
}

export default App;
