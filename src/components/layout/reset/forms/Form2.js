import Cookies from "js-cookie";
import { Link } from "react-router-dom"
import BtnLogin from "../../login/BtnLogin"
import InputForm from "../../login/form/InputForm"

function Form2(props){

    function codeReset(e){
        e.preventDefault();

        let obj = {
            'code': document.getElementsByTagName("input")[0].value,
            'key' : Cookies.get("KeyReset")
        }

        fetch(props.API+"auth/reset/code.php",{
            method:"POST",
            headers: {
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin': '*'
            },body:JSON.stringify(obj)
        })
        .then((resp)=> resp.json())
        .then((data)=>{
            if(data.status){
                {props.setSt(2)}
            }else{
                {props.setErro("CODIGO ERRADO", document.getElementsByTagName("input")[0])}
            }
        })
        .catch(er=>{
            console.log(er);
        })
    }

    function voltar(){
        {props.setMsg("DIGITE O EMAIL VINCULADO A SUA CONTA")}
        Cookies.remove("KeyReset");
        {props.setSt(0)}
    }
    return(
        <form onSubmit={codeReset} action="">
            <h4>{props.erro}</h4>
            <InputForm name="code" type="number" place="CÓDIGO" />
            <BtnLogin action={props.resetar} text="RESETAR"/>
            <p onClick={voltar}>TENTAR <span>NOVAMENTE</span></p>
        </form>
    )
}

export default Form2