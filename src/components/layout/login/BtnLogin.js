import styles from './BtnLogin.module.css'

function BtnLogin({text,action}){
    return(
        <button className={styles.btnLogin} onClick={action}>{text}</button>
    )
}
export default BtnLogin