import { Link } from "react-router-dom"
import BtnLogin from "../../login/BtnLogin"
import InputForm from "../../login/form/InputForm"

function Form1(props){
    return(
        <form action="">
                    <h4>{props.erro}</h4>
                    <InputForm name="email" type="email" place="EMAIL" />
                    <BtnLogin action={props.resetar} text="RESETAR"/>
                    <Link to='/'><p>FAZER <span>LOGIN</span></p></Link> 
        </form>
    )
}

export default Form1