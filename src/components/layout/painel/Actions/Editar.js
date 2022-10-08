import styles from './Editar.module.css'

function Editar(props){
    function Edit(){
        {props.Edit(props.id)}
    }

    return(
        <div onClick={Edit} className={styles.Editar}><span></span></div>
    )
}

export default Editar