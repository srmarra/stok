import styles from './Login.module.css'
import {useState, useEffect} from 'react'
import Cookies from 'js-cookie'

// Imagens
import Ilustracao from '../util/img/IlustracaoMenu.png'
import Integracao from '../util/img/LogoIntegração-Azul.png'
import ErroLogin from '../layout/login/ErroLogin';
import FormLogin from '../layout/login/FormLogin';
import Load from '../layout/login/form/Load'

// Imagens

function Login(props){

    if(Cookies.get('key')){
        window.location.href = "/painel"
    }else{
    }


    document.getElementsByTagName("title")[0].innerHTML ="Login | STOK";
    const [msgErro, setMsgErro] = useState('');
    const[erroForm,setErroForm] = useState("");
    const [requestPost, setRequestPost] = useState(false);

    const[email, setEmail] = useState('');
    function Autenticacao(){
        let email = document.getElementById("email");
        let senha = document.getElementById("password");
        setEmail(email.value);

        if(email.value != ""){
            if(senha.value != ""){
                setRequestPost(true);
                let data = {
                    'email':email.value,
                    'senha':senha.value
                };
                fetch(props.API+"auth/key/criar/",{
                    method:'POST',
                    headers: {
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify(data),
                }).then((resp) => resp.json())
                .then((data)=>{
                   if(data.status){
                    Cookies.set('key', data.key,{ expires: 1 });
                    window.location.href =  "/painel";
                   }else{
                    setRequestPost(false);
                    setMsgErro("EMAIL/SENHA INVALIDOS")
                   }
                })
                .catch(()=>{
                    setMsgErro("OCORREU UM ERRO INTERNO");
                    setRequestPost(false);
                });
            
            }else{
                senha.style.borderColor = "red";
                senha.style.setProperty("--p", "red");
                setErroForm("Senha vazia");
                setTimeout(function(){
                    setErroForm("");
                    senha.style.borderColor = "rgb(39, 39, 39)";
                    senha.style.setProperty("--p", "rgb(123, 123, 123)");
                }, 4000)
            }
        }else{
            email.style.borderColor = "red";
            email.style.setProperty("--p", "red");
            setErroForm("Email vazio");
            setTimeout(function(){
                setErroForm("");
                email.style.borderColor = "rgb(39, 39, 39)";
                email.style.setProperty("--p", "rgb(123, 123, 123)");
            }, 4000)

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
                        <p>GERENCIAMENTO DE ESTOQUE</p>
                    </section>
                   {/* Area Form */}
                        <section>
                            <img className={styles.Img_Integracao} src={Integracao} alt="Integração" />
                            {msgErro ?(
                                <ErroLogin reset={reset} mensagem={msgErro}/>
                            ):(
                                !requestPost ? (
                                    <FormLogin change={emailState} Vemail = {email} erro={erroForm} action={Autenticacao}/>
                                ):(
                                 <Load/> 
                                )

                                
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