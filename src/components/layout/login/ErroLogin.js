import styles from './ErroLogin.module.css'
import ErroX from '../../util/img/icon/Erro-X.png'
import BtnLogin from './BtnLogin'
function ErroLogin({mensagem,reset}){
    return(
        <nav className={styles.ErroForm}>
            <img src={ErroX} alt="" />
            <h2>{mensagem}</h2>
            <BtnLogin text="VOLTAR" action={reset} />
        </nav>
    )
}

export default ErroLogin