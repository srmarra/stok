import styles from './Conteudo.module.css'
import Produtos from './Produtos';
import btnPlus from './util/img/btnPlus.png'
import {useState,useEffect} from 'react'

function Conteudo(){

    function add(){
        console.log("Abrir Gaveta");
    }   
    const[StokProd,setStokProd] = useState([]);
    

    return(
        <section className={styles.conteudo}>
            <nav>
                <div><h1>STOK</h1></div>
                <div onClick={add}><img src={btnPlus} alt="" /></div>
            </nav>
            <nav>
                {StokProd.map((prod)=>(
                    <Produtos key={prod.id} titulo={prod.titulo} desc={prod.desc} preco={prod.preco} qnt={prod.qnt}/>
                ))}



            </nav>
        </section>
    )
}

export default Conteudo