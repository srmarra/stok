import Conteudo from '../layout/painel/Conteudo'
import LogoIntegracao from '../layout/painel/LogoIntegracao'
import Logout from '../layout/painel/Logout'
import styles from './Painel.module.css'

import Cookies from 'js-cookie'
import { useState , useEffect} from 'react'
import AddPainel from '../layout/painel/Actions/paineis/AddPainel'

function Painel(props){
    document.getElementsByTagName("title")[0].innerHTML ="Painel | STOK";
    const[StokProd,setStokProd] = useState([]);

    function Actualiza(){
        let key = Cookies.get("key");
        let obj = {
            'key': key,
        }

        fetch(props.API+"produtos/",{
            method:"POST",
            headers: {
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin': '*'
            },body:JSON.stringify(obj)
        })
        .then((resp)=> resp.json())
        .then((data)=>{
            setStokProd(data);
        })
        .catch(er=>{
            console.log(er);
        })
    }

    useEffect(()=>{
        Actualiza();
    },[]);

 
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
        <Conteudo  array={StokProd} API={props.API} change={AddAc}/>
        <Logout/>
        {Add ? (
        <AddPainel action={Actualiza} API={props.API} change={AddAc} />
        ):(<></>)}
        
        </>
    )
}
export default Painel