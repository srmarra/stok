import styles from './Conteudo.module.css'
import Produtos from './Produtos';
import btnPlus from './util/img/btnPlus.png'
import {useState,useEffect} from 'react'
import Cookies from 'js-cookie';

function Conteudo(props){

    function add(){
        console.log("Abrir Gaveta");
    }   
    const[StokProd,setStokProd] = useState([]);
    useEffect(()=>{
        Actualiza();
    },[]);

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

    return(
        <section className={styles.conteudo}>
            <nav>
                <div><h1>STOK</h1></div>
                <div onClick={props.change}><img src={btnPlus} alt="" /></div>
            </nav>
            <nav id='Conteudos'>
                
                {StokProd.map((prod)=>(
                    <Produtos key={prod.id} titulo={prod.titulo} desc={prod.desc} preco={prod.preco} qnt={prod.qnt}/>
                ))}


                


            </nav>
        </section>
    )
}

export default Conteudo