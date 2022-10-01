import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Erro404 from './components/pages/Erro404';
import Login from './components/pages/Login';
import NewAccount from './components/pages/NewAccount';
import Painel from './components/pages/Painel';
import ResetPass from './components/pages/ResetPass';
import {useState} from 'react'
function App() {
  const API_URL ="https://apistok.hmarra.tech/";
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Erro404  API={API_URL}/>} />
        <Route exact path="/" element={<Login API={API_URL} />} ></Route>
        <Route exact path="/painel" element={<Painel API={API_URL} />}></Route>
        <Route path="/newaccount" element={<NewAccount API={API_URL} />}> </Route> 
        <Route path="/resetpass" element ={<ResetPass API={API_URL} />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
