import Base from '../layout/newaccount/Base'
import styles from './NewAccount.module.css'
function NewAccount(props){
    document.getElementsByTagName("title")[0].innerHTML ="Registrar | STOK";

    return(
        <Base API = {props.API}/>
    )
}

export default NewAccount