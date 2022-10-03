import { useEffect, useState } from 'react'
import BtnLogin from '../../../login/BtnLogin';
import InputForm from '../../../login/form/InputForm';
import Load from '../../../login/form/Load';
import styles from './AddPainel.module.css'

function AddPainel(props){
    document.onkeydown = function(e) {
        if(e.key === 'Escape') {
            {props.change()};
        }
      }

    const [Request, setRequest] = useState(false);
    const [Titulo, setTitulo] = useState("");
    const [Descricao, setDescricao] = useState("");
    const [Preco, setPreco] = useState("");
    const [Quantidade, setQuantidade] = useState("");

    const [Erro, setErro] = useState("");

    function Adicionar(e){
        e.preventDefault();
        let input = document.getElementsByTagName("input");
        if(input[0].value != "" & input[1].value != "" & input[2].value != "" & input[3].value != "" ){
            let obj = {
                'titulo' : input[0].value,
                'descricao' : input[1].value,
                'preco':input[2].value,
                'quantidade':input[3].value
            }
            fetch(props.API+"produtos/criar/",{
                method:"POST",
                headers: {
                    'Content-Type':'application/json',
                    'Access-Control-Allow-Origin': '*'
                },body:JSON.stringify(obj)
            }).then((resp)=>resp.json())
            .then((data)=>{
                console.log(data)
            })
            .catch(er=>{
                console.log(er);
            })

        }else{
            setErro("PREENCHA TODOS OS CAMPOS")
            for(let i=0;i<input.length;i++){
                if(input[i].value == ""){
                    input[i].style.borderColor = "red";
                    input[i].style.setProperty("--p", "red");
                }
            }

            setTimeout(()=>{
                setErro("")
                for(let i=0;i<input.length;i++){
                    input[i].style.borderColor = "white";
                    input[i].style.setProperty("--p", "white");
                }
            }, 4000);

        }
    }

    function ChangeT(e){setTitulo(e.target.value)}
    function ChangeD(e){setDescricao(e.target.value)}
    function ChangeP(e){setPreco(e.target.value)}
    function ChangeQ(e){setQuantidade(e.target.value)}

    
    return(
        <>
            <div className={styles.AddPainel} id="AddPainel">
                <section>
                    <div><div onClick={props.change} ><nav></nav></div></div>
                    <div className={styles.form}>
                        {!Request ?(
                        <nav>
                            <form onSubmit={Adicionar}>
                                <h1>{Erro}</h1>
                                <InputForm change={ChangeT} type="text" place="Titulo" value={Titulo}/>
                                <InputForm change={ChangeD} type="text" place="Descrição" value={Descricao}/>
                                <InputForm change={ChangeP} type="number" place="Preço" value={Preco}/>
                                <InputForm change={ChangeQ} type="number" place="Quantidade" value={Quantidade}/>
                                <BtnLogin text="Adicionar produto"/>
                                <img src="" alt="" />
                            </form>
                        </nav>
                        ):(
                        <div><Load/></div>
                        )}
                    </div>
                </section>
            </div>
        </>
    )
}

export default AddPainel