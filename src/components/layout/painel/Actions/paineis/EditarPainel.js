import { useEffect } from "react"
import BtnLogin from "../../../login/BtnLogin"
import InputForm from "../../../login/form/InputForm"
import style from "./EditarPainel.module.css"

function EditarPainel(props){

    function edit(){{props.Edit(-1)}}
    function Vazia(){}
    return(
        <div className={style.EditPainel}>
            <section>
                <nav><div onClick={edit}><span></span></div></nav>

                <nav>
                    <InputForm value={props.Titulo} change={props.Tchange} id="E0" place="Titulo" />
                    <InputForm value={props.Desc} change={props.Dchange} place="Descrição" />
                    <InputForm value={props.Preco} change={props.Pchange} place="Preço" />
                    <InputForm value={props.Qnt} change={props.Qchange} place="Quantidade" />
                    <BtnLogin text="EDITAR"/>
                </nav>
            </section>


        </div>
    )
}

export default EditarPainel