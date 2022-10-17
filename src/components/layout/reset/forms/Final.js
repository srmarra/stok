import { Link } from 'react-router-dom'
import styles from './Final.module.css'

function Final(){
    return(
        <div className={styles.Final}>
            <p>SENHA RESETADA</p>
            <Link to='/' ><button>FAZER LOGIN</button></Link>
        </div>
    )
}

export default Final