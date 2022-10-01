import styles from './Base.module.css'
import Ilustracao from './img/RegisterIlustracao.png'
import RegisterArea from './RegisterArea'
function Base(props){


    return(
        <section className={styles.Base}>
            <nav><img src={Ilustracao} alt="" /></nav>
            <nav>
                <h1>CRIAR CONTA NA STOK</h1>
                <RegisterArea API = {props.API}/>
            </nav>
        </section>
    )
}

export default Base