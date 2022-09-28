import Base from '../layout/newaccount/Base'
import styles from './NewAccount.module.css'
function NewAccount(){
    document.getElementsByTagName("title")[0].innerHTML ="Registrar | STOK";

    return(
        <Base/>
    )
}

export default NewAccount