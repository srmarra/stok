import styles from './RegisterArea.module.css'
import Integracao from '../../util/img/LogoIntegração-Azul.png'
import FormRegistrar from './FormRegistrar'
function RegisterArea(){
    return(
        <div className={styles.RegisterArea}>
            <img src={Integracao} alt="" />
            <FormRegistrar/>
        </div>
    )
}

export default RegisterArea