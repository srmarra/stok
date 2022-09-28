import styles from './Login.module.css'
import {useState, useEffect} from 'react'

// Imagens
import Ilustracao from '../util/img/IlustracaoMenu.png'
import Integracao from '../util/img/LogoIntegração-Azul.png'
import ErroLogin from '../layout/login/ErroLogin';
import FormLogin from '../layout/login/FormLogin';
// Imagens

function Login(){
    document.getElementsByTagName("title")[0].innerHTML ="Login | STOK";
    const [msgErro, setMsgErro] = useState('');
    const[erroForm,setErroForm] = useState("");

    const[email, setEmail] = useState('');
    function Autenticacao(){
        let email = document.getElementById("email");
        let senha = document.getElementById("password");
        setEmail(email.value);

        if(email.value != ""){
            if(senha.value != ""){
                if(email.value == "123" & senha.value == "123"){
                    document.location.href = "/painel";
                }else{
                    setMsgErro("SENHA/LOGIN INCORRETOS");
            }
            }else{
                senha.style.borderColor = "red";
                senha.style.setProperty("--p", "red");
                setErroForm("Senha vazia");
            }
        }else{
            email.style.borderColor = "red";
            email.style.setProperty("--p", "red");
            setErroForm("Email vazio");
        }
    }

    //Resetar o erro
    function reset(){
        setMsgErro("")
    }
    function emailState(e){
        setEmail(e.target.value);
    }
    return(
        <nav className={styles.Nav_Login}>
            {/* Ilustração */}
            <section className={styles.ilustracao}><img src={Ilustracao} alt="Ilustração" /></section>
            {/* Ilustração */}

            {/* Login */}
            <section>

                <div>
                    <section>
                        <h1>STOK</h1>
                        <p>GERENCIAMENTO DE ESTOQUEd</p>
                    </section>
                   {/* Area Form */}
                        <section>
                            <img className={styles.Img_Integracao} src={Integracao} alt="Integração" />
                            {msgErro ?(
                                <ErroLogin reset={reset} mensagem={msgErro}/>
                            ):(
                                <FormLogin change={emailState} Vemail = {email} erro={erroForm} action={Autenticacao}/>
                            )}
                        </section>
                    {/* Area Form */}
                </div>

            </section>
            {/* Login */}

        </nav>
    )
}

export default Login 