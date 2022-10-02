import styles from './FormRegistrar.module.css'

import BtnLogin from "../login/BtnLogin"
import InputForm from '../login/form/InputForm';

import {json, Link} from 'react-router-dom'
import {useState} from 'react'
import Cookies from 'js-cookie';
function FormRegistrar(props){
    const [Erro, setErro] = useState("");
    function Registrar(e){
        e.preventDefault()
        let nome = document.getElementById("nome");
        let email = document.getElementById("email");
        let senha = document.getElementById("senha");
        let senha2 = document.getElementById("senha2");
        let arrayInputs = [senha,senha2,email,nome];
        
        if(nome.value !="" && email.value !="" && senha.value !="" && senha2.value !="" ){
            if(senha.value == senha2.value){
                if(senha.value.length >= 8){
                    let data = {
                        'email': email.value,
                        'senha': senha.value,
                        'nome': nome.value
                    };
                    
                    fetch(props.API+"auth/registrar/",{
                        method:'POST',
                        headers: {
                            'Content-Type':'application/json',
                            'Access-Control-Allow-Origin': '*',
                        },
                        body: JSON.stringify(data),
                    }).then((resp) => resp.json())
                    .then((data)=>{
                        if(data.status){
                            Cookies.set('key', data.key,{expires: 1});
                            window.location.href = "../painel";
                        }
                    })
                    .catch((er)=>{
                        console.log(er)
                    });
                }else{
                    erroSenha("SENHA TEM QUE TER NO MINIO 8 CARACTERES",senha,senha2)
                }
            }else{
                erroSenha("AS SENHAS SÃO DIFERENTES",senha,senha2);
            }
        }else{
            validacaoNULL(arrayInputs
                )
        }
    }

    function validacaoNULL(obj){
        obj.forEach(e => {
            if(e.value ==""){
                setErro("INSIRA O CAMPO "+e.placeholder)
                e.style.borderColor = "red";
                e.style.setProperty("--p", "red");
                setTimeout(function(){
                    setErro("");
                    e.style.borderColor = "rgb(39, 39, 39)";
                    e.style.setProperty("--p", "rgb(123, 123, 123)");
                }, 4000)
            }
        });
    }


    function erroSenha(erro,senha,senha2){
        setErro(erro);
                senha.style.borderColor = "red";
                senha.style.setProperty("--p", "red");
                senha2.style.borderColor = "red";
                senha2.style.setProperty("--p", "red");
                setTimeout(function(){
                    setErro("")
                    senha.style.borderColor = "rgb(39, 39, 39)";
                    senha.style.setProperty("--p", "rgb(123, 123, 123)");

                    senha2.style.borderColor = "rgb(39, 39, 39)";
                    senha2.style.setProperty("--p", "rgb(123, 123, 123)");
                }, 4000)
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