
/* import './App.css'; */
import HelloWorld from "./components/HelloWorld";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";
import Frase from "./components/Frase";
import List from "./components/List";
import Evento from "./components/Evento";
import Form from "./components/Form";
import Condicional from './components/Condicional';
import OutraLista from "./components/OutraLista";
import { useState } from 'react';
import SeuNome from './components/SeuNome';
import Saudacao from "./components/Saudacao";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Empresa from "./pages/Empresa";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";





function App() {
  /*   const nome = "Walter";
    const meusItens = ['React', 'Vue', 'Angular']; */
  /* const [nome, setNome] = useState(); */

  return (
    <div className="App">
      {/* <h1>Testando CSS</h1>
      <Frase/>
      <Frase/>
      <SayMyName nome="Matheus"/>
      <SayMyName nome={nome}/>
      <Pessoa nome="Walter Rodrigues Jr" idade="28" profissao="Programador" foto="https://via.placeholder.com/150"/>
      <List/> 
      <h1>Testando Eventos</h1>
      <Evento numero={1}/>
      <h1>Cadastrando Usuário</h1>
      <Form/> */}
      {/* <h1>Renderização de condicional</h1>
      <Condicional/> */}
      {/*       <h1>Renderização de Listas</h1>
      <OutraLista itens={meusItens}/>
      <OutraLista itens={[]}/> */}
      {/* <h1>State Lift</h1>
      <SeuNome setNome={setNome}/>
      <Saudacao nome={nome}/> */}
       <Router>
          <NavBar />
          <Routes>
            <Route path='/' exact='true' element={<Home/>}></Route>
            <Route path='/empresa' element={<Empresa/>}></Route>
            <Route path='/contato' element={<Contato/>}></Route>
          </Routes>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
