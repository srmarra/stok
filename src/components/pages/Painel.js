import Conteudo from '../layout/painel/Conteudo'
import LogoIntegracao from '../layout/painel/LogoIntegracao'
import Logout from '../layout/painel/Logout'
import styles from './Painel.module.css'

function Painel(){
    document.getElementsByTagName("title")[0].innerHTML ="Painel | STOK";

    return(
        <>
        <LogoIntegracao/>
        <Conteudo/>
        <Logout/>
        </>
    )
}
export default Painel