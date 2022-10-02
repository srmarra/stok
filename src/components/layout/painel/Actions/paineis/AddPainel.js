import { useState } from 'react'
import BtnLogin from '../../../login/BtnLogin';
import InputForm from '../../../login/form/InputForm';
import Load from '../../../login/form/Load';
import styles from './AddPainel.module.css'

function AddPainel(props){
    const [Request, setRequest] = useState(false);
    const [Titulo, setTitulo] = useState("");
    const [Descricao, setDescricao] = useState("");
    const [Preco, setPreco] = useState("");
    const [Quantidade, setQuantidade] = useState("");

    const [Erro, setErro] = useState("");

    function Adicionar(e){
        e.preventDefault();
    }

    function ChangeT(e){setTitulo(e.target.value)}

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
                                <InputForm change={Change} id="0" type="text" place="Titulo" value={Titulo}/>
                                <InputForm change={Change} id="1" type="text" place="Descrião" value={Descricao}/>
                                <InputForm change={Change} id="2" type="number" place="Preço" value={Preco}/>
                                <InputForm change={Change} id="3" type="number" place="Quantidade" value={Quantidade}/>
                                <BtnLogin text="Adicionar produto"/>
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