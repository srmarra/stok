import Cookies from "js-cookie";
import { Link } from "react-router-dom"
import BtnLogin from "../../login/BtnLogin"
import InputForm from "../../login/form/InputForm"

function Form3(props){

    function codeReset(e){
        if(document.getElementsByTagName("input")[0].value != ""){
            e.preventDefault();

            let obj = {
                'senha': document.getElementsByTagName("input")[0].value,
                'key' : Cookies.get("KeyReset")
            }

            fetch(props.API+"auth/reset/update.php",{
                method:"POST",
                headers: {
                    'Content-Type':'application/json',
                    'Access-Control-Allow-Origin': '*'
                },body:JSON.stringify(obj)
            })
            .then((resp)=> resp.json())
            .then((data)=>{
                if(data.status){
                    {props.setSt(3);}
                }else{
                    {props.setErro("ERRO");}
                }
            })
            .catch(er=>{
                console.log(er);
            })
        }else{
            {props.setErro("A SENHA TEM QUE CONTER 8 CARACTERES", document.getElementsByTagName("input")[0])}
        }
    }


    return(
        <form onSubmit={codeReset} action="">
            <h4>{props.erro}</h4>
            <InputForm name="pass" type="password" place="NOVA SENHA" />
            <BtnLogin action={props.resetar} text="RESETAR"/>
            <Link to='/'><p>FAZER <span>LOGIN</span></p></Link> 
        </form>
    )
}

export default Form3