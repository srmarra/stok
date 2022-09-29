import styles from './AreaReset.module.css'
import Integra from "../../util/img/LogoIntegração-Azul.png";
import BtnLogin from '../login/BtnLogin';
import InputForm from '../login/form/InputForm';

import {Link} from 'react-router-dom'
import {useState} from 'react'

function AreaReset(){

    const[erroForm,setErroForm] = useState("DIGITE O EMAIL VINCULADO A SUA CONTA");
    function resetar(e){
        e.preventDefault()  
        let email = document.getElementById("email");

        if(email.value !=""){
            if(email.value.includes('@')){
                alert("chegou");
            }else{
                erro("DIGITE UM EMAIL VALIDO", email);
            }
        }else{
            erro("EMAIL VAZIO", email);
        }
    }

    function erro(error, email){
        email.style.borderColor = "red";
        email.style.setProperty("--p", "red");
        setErroForm(error);
        setTimeout(function(){
            setErroForm("DIGITE O EMAIL VINCULADO A SUA CONTA");
            email.style.borderColor = "rgb(39, 39, 39)";
            email.style.setProperty("--p", "rgb(123, 123, 123)");
        }, 4000)
    }

    return(
        <>
            <h3 className={styles.AreaResetTitulo} >RESETAR SENHA</h3>
            <div className={styles.AreaReset}>
                <img src={Integra} alt="" />
                <form action="">
                    <h4>{erroForm}</h4>
                    <InputForm name="email" type="email" place="EMAIL" />
                    <BtnLogin action={resetar} text="RESETAR"/>
                    <Link to='/'><p>FAZER <span>LOGIN</span></p></Link> 
                </form>
            </div>
        </>

    )
}
export default AreaReset