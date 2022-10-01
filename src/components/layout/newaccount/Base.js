import styles from './Base.module.css'
import Ilustracao from './img/RegisterIlustracao.png'
import RegisterArea from './RegisterArea'
function Base(){


    return(
        <section className={styles.Base}>
            <nav><img src={Ilustracao} alt="" /></nav>
            <nav>
                <h1>CRIAR CONTA NA STOK</h1>
                <RegisterArea/>
            </nav>
        </section>
    )
}

export default Base