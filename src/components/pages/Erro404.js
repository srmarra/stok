import styles from './Erro404.module.css'

import Ilustracao from '../util/img/404.svg'

function Erro404(){
    document.getElementsByTagName("title")[0].innerHTML ="404 | STOK";

    return(
        <section className={styles.Sec404}>
            
            <img src={Ilustracao} alt="" />
        </section>
    )
}
export default Erro404