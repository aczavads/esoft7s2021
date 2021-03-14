import logo from './logo.svg';
import './App.css';
import SomarComponent from './components/somar-components';
import HelloComponent from './components/hello-component';
import ContadorComponent from './components/contador-component';
import ContadorBásico from './components/contador-basico';

const somar = (v1,v2) => v1 + v2;

function App() {
const resultado = somar(100,200); 

  return(
    <div>
      <ContadorBásico></ContadorBásico>
      {/* <div>{resultado}</div>  
      <SomarComponent v1 ={1000} v2 = {2020}></SomarComponent>
      <HelloComponent></HelloComponent>
      <ContadorComponent valorMinimo = {10} valorMaximo = {15}></ContadorComponent> */}
    </div>
  );
}

export default App;
