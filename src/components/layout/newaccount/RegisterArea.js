import styles from './RegisterArea.module.css'
import Integracao from '../../util/img/LogoIntegração-Azul.png'
import FormRegistrar from './FormRegistrar'
function RegisterArea(props){
    return(
        <div className={styles.RegisterArea}>
            <img src={Integracao} alt="" />
            <FormRegistrar API = {props.API} />
        </div>
    )
}

export default RegisterArea