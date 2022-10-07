import styles from './Conteudo.module.css'
import Produtos from './Produtos';
import btnPlus from './util/img/btnPlus.png'
import {useState,useEffect} from 'react'
import Cookies from 'js-cookie';

function Conteudo(props){

    function add(){
        console.log("Abrir Gaveta");
    }   
   

    

    return(
        <section className={styles.conteudo}>
            <nav>
                <div><h1>STOK</h1></div>
                <div onClick={props.change}><img src={btnPlus} alt="" /></div>
            </nav>
            <nav id='Conteudos'>
                
                {props.array.map((prod)=>(
                    <Produtos Del={props.Del} key={prod.id} id={prod.id} titulo={prod.titulo} desc={prod.desc} preco={prod.preco} qnt={prod.qnt}/>
                ))}


                


            </nav>
        </section>
    )
}

export default Conteudo