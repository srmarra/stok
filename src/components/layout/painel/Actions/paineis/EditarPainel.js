import { useEffect, useState } from "react"
import BtnLogin from "../../../login/BtnLogin"
import InputForm from "../../../login/form/InputForm"
import Load from "../../../login/form/Load"
import style from "./EditarPainel.module.css"

function EditarPainel(props){

    function edit(){{props.Edit(-1)}}
    function Vazia(){}

    function Editar(){props.Edita(props.id);setRequest(true)}

    const [Request,setRequest] = useState(false);
    return(
        <div className={style.EditPainel}>
            <section>
                <nav><div onClick={edit}><span></span></div></nav>

                {!Request ?(
                <nav>
                    <InputForm value={props.Titulo} change={props.Tchange} id="E0" place="Titulo" />
                    <InputForm value={props.Desc} change={props.Dchange} place="Descrição" />
                    <InputForm value={props.Preco} change={props.Pchange} place="Preço" />
                    <InputForm value={props.Qnt} change={props.Qchange} place="Quantidade" />
                    <BtnLogin action={Editar} text="EDITAR"/>
                </nav>
                ):(<Load/>)}

            </section>
            

        </div>
    )
}

export default EditarPainel