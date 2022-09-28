import styles from './LogoIntegracao.module.css'
import LogoIntegra from './util/img/LogoIntegraBranca.png'

function LogoIntegracao(){
    return(
        <img className={styles.LogoIntegra} src={LogoIntegra} alt="" />
    )
}

export default LogoIntegracao
