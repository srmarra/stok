import { Link } from 'react-router-dom'
import BtnLogin from './BtnLogin'
import InputForm from './form/InputForm'
import styles from './FormLogin.module.css'
function FormLogin({action,erro,change , Vemail}){

    

    return (
        <nav className={styles.LoginForm}>
            <p className={styles.erro}>{erro}</p>
            <InputForm change={change} place="EMAIL" name="email" type="email" value={Vemail}  />
            <InputForm place="SENHA" name="password" type="password" />
            <BtnLogin action={action} text="ENTRAR"/>
            <Link to="/resetpass"><p className={styles.restPass}>RESETAR <span>SENHA</span></p></Link>
            <Link to="/newaccount">
                <p className={styles.CreateCount}>CRIAR NOVA <span>CONTA</span></p>
            </Link>
        </nav>
    )
}
export default FormLogin