import Conteudo from '../layout/painel/Conteudo'
import LogoIntegracao from '../layout/painel/LogoIntegracao'
import Logout from '../layout/painel/Logout'
import styles from './Painel.module.css'

import Cookies from 'js-cookie'
import { useState , useEffect} from 'react'
import AddPainel from '../layout/painel/Actions/paineis/AddPainel'
import DelPainel from '../layout/painel/Actions/paineis/DelPainel'
import EditarPainel from '../layout/painel/Actions/paineis/EditarPainel'

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

    const [Edit,setEdit] = useState(false);
    const [id_Edit,setid_Edit] = useState(-1);

    const [TituloEdit,setTituloEdit] = useState("");function ETstate(e){setTituloEdit(e.target.value)}
    const [DescEdit,setDescEdit] = useState("");function EDstate(e){setDescEdit(e.target.value)}
    const [PrecoEdit,setPrecoEdit] = useState("");function EPstate(e){setPrecoEdit(e.target.value)}
    const [QntEdit,setQntEdit] = useState("");function EQstate(e){setQntEdit(e.target.value)}

    function EditAc(id){
        console.log(id);
        if(id != -1){
            setid_Edit(id);
            setTituloEdit(document.getElementById("T"+id).innerHTML);
            setDescEdit(document.getElementById("D"+id).innerHTML);
            setPrecoEdit(document.getElementById("P"+id).innerHTML);
            setQntEdit(document.getElementById("Q"+id).innerHTML);
            

        }
        setEdit(!Edit);
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
            document.getElementById("Q"+id).innerText =data.qnt;
            console.log(data);
        }).catch((er)=>{
            console.log(er);
        })
    }


    if(!Cookies.get('key')){
        window.location.href = "../"
    }else{
    }
    return(
        <>
        <LogoIntegracao/>
         <Conteudo  array={StokProd} API={props.API} change={AddAc} Del ={DellAc} Vend={Vender} Edit={EditAc} />
        <Logout/>


    {/* Paineis de ação */}
        {Edit ? (
            <EditarPainel Qnt={QntEdit}Qchange={EQstate} Preco={PrecoEdit}Pchange={EPstate} id={id_Edit} Desc={DescEdit}Dchange={EDstate}  Titulo={TituloEdit}Tchange={ETstate} Edit={EditAc} /> 
        ):(<></>)}

        {Add ? (
        <AddPainel action={Actualiza} API={props.API} change={AddAc} />
        ):(<></>)}
        

        {Dell ? (
            <DelPainel DelAct={Deletar} change={DellAc} />
        ):(<></>)
            
        }
        </>
    )
}
export default Painel