    import Deletar from './Actions/Deletar'
    import Editar from './Actions/Editar'
    import Vender from './Actions/Vender'
    import styles from './Produtos.module.css'

    function Produtos({titulo,desc,preco,qnt,id,Del,Vend}){
        return(
            <div className={styles.Produtos}>
                <section >
                    <h2>{titulo}</h2>
                    <h3>{desc}</h3>
                    <h4 id={`P${id}`}>R$ {preco}</h4>
                    <h5 id={`Q${id}`} >QNT: {qnt}</h5>
                </section>
                <section>
                    <Vender id={id} Vend={Vend}/>
                    <Editar/>
                    <Deletar id={id} Del={Del}/>
                </section>
            </div>
        )
    }

    export default Produtos