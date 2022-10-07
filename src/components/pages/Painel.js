import Conteudo from '../layout/painel/Conteudo'
import LogoIntegracao from '../layout/painel/LogoIntegracao'
import Logout from '../layout/painel/Logout'
import styles from './Painel.module.css'

import Cookies from 'js-cookie'
import { useState , useEffect} from 'react'
import AddPainel from '../layout/painel/Actions/paineis/AddPainel'
import DelPainel from '../layout/painel/Actions/paineis/DelPainel'

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
            if(data.status == false){
                Cookies.remove('key');
                window.location.href = "../";
            }
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
    const [Dell,setDel] = useState(false);
    const [id_Del,setid_Del] = useState(-1);
    function DellAc(id){
        setDel(!Dell);
        setid_Del(id);
        console.log(id_Del);
    }
    function Deletar(id){
        const url = props.API+"produtos/deletar/";
        console.log(id_Del);
        
        const env = {
            'key': Cookies.get('key'),
            'id': id_Del
        }

        fetch(url,{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin': '*'
            },body:JSON.stringify(env)
        }).then((resp) => resp.json())
        .then((data)=>{
            Actualiza();
            if(data.status == false){
                Cookies.remove('key');
                window.location.href = "../";
            }
            setDel(!Dell);
        }).catch((er)=>{
            console.log(er);
        })
    }

    function Vender(id){
        const url = props.API+"produtos/vender/";
        console.log(id);
        
        const env = {
            'key': Cookies.get('key'),
            'id': id
        }

        fetch(url,{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin': '*'
            },body:JSON.stringify(env)
        }).then((resp) => resp.json())
        .then((data)=>{
            document.getElementById("Q"+id).innerText = "QNT: "+data.qnt;
            console.log(data);
        }).catch((er)=>{
            console.log(er);
        })
    }


    if(!Cookies.get('key')){
        window.location.href = "../"
    }else{
        console.log(!Cookies.get('key'));
    }
    return(
        <>
        <LogoIntegracao/>
        <Conteudo  array={StokProd} API={props.API} change={AddAc} Del ={DellAc} Vend={Vender} />
        <Logout/>
        {Add ? (
        <AddPainel action={Actualiza} API={props.API} change={AddAc} />
        ):(<></>)}
        
        {Dell ? (
            <DelPainel DelAct={Deletar} change={DellAc} />
        ):(
            <></>
        )
            
        }
        </>
    )
}
export default Painel