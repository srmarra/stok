import Conteudo from '../layout/painel/Conteudo'
import LogoIntegracao from '../layout/painel/LogoIntegracao'
import Logout from '../layout/painel/Logout'
import styles from './Painel.module.css'

import Cookies from 'js-cookie'
import { useState } from 'react'
import AddPainel from '../layout/painel/Actions/paineis/AddPainel'

function Painel(props){
    document.getElementsByTagName("title")[0].innerHTML ="Painel | STOK";

    const [Add,setAdd] = useState(false);
    function AddAc(){
        setAdd(!Add);
    }
    if(!Cookies.get('key')){
        window.location.href = "../"
    }else{
        console.log(!Cookies.get('key'));
    }
    return(
        <>
        <LogoIntegracao/>
        <Conteudo API={props.API} change={AddAc}/>
        <Logout/>
        {Add ? (
        <AddPainel API={props.API} change={AddAc} />
        ):(<></>)}
        </>
    )
}
export default Painel