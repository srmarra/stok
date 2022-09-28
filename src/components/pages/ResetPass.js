import BaseReset from '../layout/reset/BaseReset';
import styles from './ResetPass.module.css'
function ResetPass(){
    document.getElementsByTagName("title")[0].innerHTML ="Resetar | STOK";

    return(
        <BaseReset/>
    )
}

export default ResetPass