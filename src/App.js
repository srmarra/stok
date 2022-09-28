import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Erro404 from './components/pages/Erro404';
import Login from './components/pages/Login';
import NewAccount from './components/pages/NewAccount';
import Painel from './components/pages/Painel';
import ResetPass from './components/pages/ResetPass';
import {useState} from 'react'
function App() {

  return (
    <Router>
      <Routes>
        <Route path="*" element={<Erro404/>} />
        <Route exact path="/" element={<Login/>} ></Route>
        <Route exact path="/painel" element={<Painel/>}></Route>
        <Route path="/newaccount" element={<NewAccount/>}> </Route> 
        <Route path="/resetpass" element ={<ResetPass/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
