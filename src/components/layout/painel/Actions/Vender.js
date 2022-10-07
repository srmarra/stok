import styles from './Vender.module.css'

function Vender(props){
    function Venda(){
        {props.Vend(props.id)}
    }

    return(
        <div  onClick={Venda}  className={styles.Vender}><span></span></div>

    )
}

export default Vender