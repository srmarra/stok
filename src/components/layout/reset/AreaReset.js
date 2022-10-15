import styles from './AreaReset.module.css'
import Integra from "../../util/img/LogoIntegração-Azul.png";
import BtnLogin from '../login/BtnLogin';
import InputForm from '../login/form/InputForm';

import {Link} from 'react-router-dom'
import {useState} from 'react'
import Form1 from './forms/Form1';
import Form2 from './forms/Form2';
import Cookies from 'js-cookie';
import Form3 from './forms/Form3';

function AreaReset(props){

    
    const[erroForm,setErroForm] = useState("DIGITE O EMAIL VINCULADO A SUA CONTA");function setErro(text){setErroForm(text)}
    function resetar(e){
        e.preventDefault()  
        let email = document.getElementById("email");

        if(email.value !=""){
            if(email.value.includes('@')){
                let env = {
                    'email':email.value
                }
                fetch(props.API+"auth/reset/",{
                    method:"POST",
                    headers: {
                        'Content-Type':'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },body:JSON.stringify(env)
                })
                .then((resp)=> resp.json())
                .then((data)=>{
                    if(data.status){
                        Cookies.set("KeyReset",data.key);
                        setStatus(1);
                        setErro("DIGITE O CÓDIGO ENVIADO PARA O EMAIL");
                    }else{
                        erro("NENHUMA CONTA VINCULADA", email);
                    }
                })
                .catch(er=>{
                    console.log(er);
                })
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


    function render(){

        switch(status){
            case 0:
                return(<Form1 erro={erroForm} resetar={resetar}/>)
             break;
            case 1:
                return(<Form2 setSt={setSt} API ={props.API} setErro={erro} erro={erroForm}  />)
            break;
            case 2:
                return(<Form3 setSt={setSt} API ={props.API} setErro={erro} erro={erroForm}  />)
            break;
            case 3:
                return(<p>SENHA ALTERADA</p>)
            break;
        }
    }

    const [status,setStatus] = useState(0);function setSt(st){setStatus(st)}
    return(
        <>
            <h3 className={styles.AreaResetTitulo} >RESETAR SENHA</h3>
            <div className={styles.AreaReset}>
                <img src={Integra} alt="" />

                {render()}
                
                
            </div>
        </>

    )
}
export default AreaReset