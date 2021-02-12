import logo from './logo.svg';
import './App.css';
import SomarComponent from './components/somar-component';
import HelloComponent from './components/hello-component';
import ContadorComponent from './components/contador-component';

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
  const resultado = somar(100,150);

  return (
    <div>
      <div>{resultado}</div>
      <SomarComponent v1={1000} v2={2200}></SomarComponent>      
      <HelloComponent></HelloComponent>
      <ContadorComponent valorMinimo={10} valorMaximo={15}></ContadorComponent>
      <ContadorComponent valorMinimo={0} valorMaximo={10}></ContadorComponent>
    </div>
  );
}

export default App;
