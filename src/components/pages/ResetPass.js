import BaseReset from '../layout/reset/BaseReset';
import styles from './ResetPass.module.css'
function ResetPass(props){
    document.getElementsByTagName("title")[0].innerHTML ="Resetar | STOK";

    return(
        <BaseReset API={props.API}/>
    )
}

export default ResetPass