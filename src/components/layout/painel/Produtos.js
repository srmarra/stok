    import Deletar from './Actions/Deletar'
    import Editar from './Actions/Editar'
    import Vender from './Actions/Vender'
    import styles from './Produtos.module.css'

    function Produtos({titulo,desc,preco,qnt,id,Del,Vend,Edit}){

        return(
            <div className={styles.Produtos}>
                <section >
                    <h2 id={`T${id}`} >{titulo}</h2>
                    <h3 id={`D${id}`} >{desc}</h3>
                    <h4 >R$ <span id={`P${id}`}>{preco}</span></h4>
                    <h5>QNT: <span id={`Q${id}`}>{qnt}</span></h5>
                </section>
                <section>
                    <Vender id={id} Vend={Vend}/>
                    <Editar id={id} Edit={Edit} />
                    <Deletar id={id} Del={Del}/>
                </section>
            </div>
        )
    }

    export default Produtos