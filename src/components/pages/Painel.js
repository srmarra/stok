import Conteudo from '../layout/painel/Conteudo'
import LogoIntegracao from '../layout/painel/LogoIntegracao'
import Logout from '../layout/painel/Logout'
import styles from './Painel.module.css'

import Cookies from 'js-cookie'

function Painel(){
    document.getElementsByTagName("title")[0].innerHTML ="Painel | STOK";

    if(!Cookies.get('key')){
        window.location.href = "../"
    }else{
        console.log(!Cookies.get('key'));
    }
    return(
        <>
        <LogoIntegracao/>
        <Conteudo/>
        <Logout/>
        </>
    )
}
export default Painel