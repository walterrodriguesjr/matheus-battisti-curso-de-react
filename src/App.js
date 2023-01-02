
import './App.css';
import HelloWorld from "./components/HelloWorld";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";
import Frase from "./components/Frase";

function App() {
  const nome = "Walter";

  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase/>
      <Frase/>
      <SayMyName nome="Matheus"/>
      <SayMyName nome={nome}/>
      <Pessoa nome="Walter Rodrigues Jr" idade="28" profissao="Programador" foto="https://via.placeholder.com/150"/>
    </div>
  );
}

export default App;
