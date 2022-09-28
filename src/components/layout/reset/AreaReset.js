import styles from './AreaReset.module.css'
import Integra from "../../util/img/LogoIntegração-Azul.png";
import BtnLogin from '../login/BtnLogin';
import InputForm from '../login/form/InputForm';
import {Link} from 'react-router-dom'
function AreaReset(){

    function resetar(e){
        e.preventDefault()  
        alert("Resetou");
    }

    return(
        <>
            <h3 className={styles.AreaResetTitulo} >RESETAR SENHA</h3>
            <div className={styles.AreaReset}>
                <img src={Integra} alt="" />
                <form action="">
                    <h4>DIGITE O EMAIL VINCULADO A SUA CONTA</h4>
                    <InputForm name="email" type="password" place="EMAIL" />
                    <BtnLogin action={resetar} text="RESETAR"/>
                    <Link to='/'><p>FAZER <span>LOGIN</span></p></Link> 
                </form>
            </div>
        </>

    )
}
export default AreaReset