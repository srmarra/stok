import styles from './FormRegistrar.module.css'

import BtnLogin from "../login/BtnLogin"
import InputForm from '../login/form/InputForm';

import {Link} from 'react-router-dom'
import {useState} from 'react'
function FormRegistrar(){
    const [Erro, setErro] = useState("");
    function Registrar(e){
        e.preventDefault()
        setErro("Funcionou")
    }

    return(
        <form className={styles.FormRegistrar}>
            <h3>{Erro}</h3>
            <InputForm place="NOME" type="text" name="nome" id="nome"/>
            <InputForm place="EMAIL" type="email" name="email" id="email"/>
            <InputForm place="SENHA" type="password" name="senha" id="senha"/>
            <InputForm place="REPETIR SENHA" type="password" name="senha2" id="senha2"/>
            <BtnLogin text="REGISTRAR" action={Registrar}/>
            <Link to={'/'}><p>FAZER <span>LOGIN</span></p></Link>
        </form>
    )
}
export default FormRegistrar