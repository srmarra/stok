    import Deletar from './Actions/Deletar'
    import Editar from './Actions/Editar'
    import Vender from './Actions/Vender'
    import styles from './Produtos.module.css'

    function Produtos({titulo,desc,preco,qnt,id,Del}){
        return(
            <div className={styles.Produtos}>
                <section >
                    <h2>{titulo}</h2>
                    <h3>{desc}</h3>
                    <h4>R$ {preco}</h4>
                    <h5>QNT: {qnt}</h5>
                </section>
                <section>
                    <Vender/>
                    <Editar/>
                    <Deletar id={id} Del={Del}/>
                </section>
            </div>
        )
    }

    export default Produtos