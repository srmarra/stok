
import styles from './Deletar.module.css'

function Deletar(props){
    function del(){
        {props.Del(props.id)}
    }
    
    return(
        
        <div onClick={del} className={styles.Deletar} ><span></span></div>
        
    )
}

export default Deletar